import { post, get } from '../Suports/rest';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './styles/dynamicForm.css';

export default function DynamicForm() {
    const { collection } = useParams();
    const [fields, setFields] = useState(null);
    const [data, setData] = useState({});
    const navigate = useNavigate(),
        submit = async (e) => {
            e.preventDefault();
            let $form = e.target,
                data = Object.fromEntries(new FormData($form)),
                response = await post(`/${collection}`, data);
            console.log(response);
        };
    useEffect(() => {
        get(`/Fields/${collection}`).then(e => e.success ? setFields(e.fields) : navigate('/NotFound'));
    }, [collection, navigate]);
    useEffect(() => {
        (async () => {
            if (!fields) return;
            const newData = {};
            const promises = fields.map(async (e) => {
                if (e.field.includes('id_')) {
                    let col = e.field.split('_')[1];
                    let response = await get(`/${col}`);
                    let nombres = response.map(e => e.nombre !== undefined ? { nombre: e.nombre, id: e.id } : { nombre: e.numero, id: e.id });
                    newData[e.field] = nombres;
                }
            });
            await Promise.all(promises);
            setData(newData);
        })();
    }, [fields]);



    return (
        <div className="cont">
            <h1>{collection}</h1>
            <form onSubmit={submit}>
                {fields === null && <p>Cargando...</p>}
                {fields &&
                    fields.map((e, index) => (
                        <div className="row" key={index}>
                            {[0, 1, 2].map((i) => {
                                const currentIndex = index * 3 + i;
                                if (fields[currentIndex]) {
                                    return (
                                        fields[currentIndex].field === 'id_usuario' ?
                                            <input
                                                key={currentIndex}
                                                type='hidden'
                                                value={localStorage.getItem('Sessionid')}>
                                            </input>
                                            : fields[currentIndex].field.includes('id_') ?
                                                <div className="group" key={currentIndex}>
                                                    <label className="label-group" htmlFor={fields[currentIndex].field}>
                                                        {fields[currentIndex].field.substring(0, 1).toUpperCase() +
                                                            fields[currentIndex].field.substring(1).replaceAll("_", " ") +
                                                            (fields[currentIndex].required ? "*" : "")}
                                                    </label>
                                                    <select
                                                        className="input-group"
                                                        id={fields[currentIndex].field}
                                                        required={fields[currentIndex].required}
                                                        name={fields[currentIndex].field}
                                                        defaultValue=""
                                                    >
                                                        <option value="" disabled>Seleccione una opción</option>
                                                        {data[fields[currentIndex].field] && data[fields[currentIndex].field].map((e, i) =>
                                                            <option key={i} value={e.id}>{e.nombre}</option>
                                                        )}
                                                    </select>
                                                </div>
                                                : <div className="group" key={currentIndex}>
                                                    <label className="label-group" htmlFor={fields[currentIndex].field}>
                                                        {fields[currentIndex].field.substring(0, 1).toUpperCase() +
                                                            fields[currentIndex].field.substring(1).replaceAll("_", " ") +
                                                            (fields[currentIndex].required ? "*" : "")}
                                                    </label>
                                                    <input
                                                        className="input-group"
                                                        type={fields[currentIndex].type}
                                                        id={fields[currentIndex].field}
                                                        maxLength={fields[currentIndex].length}
                                                        required={fields[currentIndex].required}
                                                        name={fields[currentIndex].field}
                                                        min={fields[currentIndex].type === 'number' ? '0' : null}
                                                        max={fields[currentIndex].type === 'number' ? '1000000000' : null}
                                                    />
                                                </div>
                                    );
                                } else {
                                    return null;
                                }
                            })}
                        </div>
                    ))}
                {fields && (
                    <div className="submit-container">
                        <button type="submit" className="submit">
                            Enviar
                        </button>
                    </div>
                )}
            </form>
        </div>
    );


}