import { post, get } from '../Suports/rest';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './styles/dynamicForm.css';

/* Collection example:
Finca: [{ field: 'nombre', type: 'text', length: 50, required: true },
    { field: 'ubicacion', type: 'text', length: 100, required: true },
    { field: 'extension', type: 'number', required: false },
    { field: 'numero_predial', type: 'text', length: 20, required: true },
    { field: 'id_usuario', type: 'text', length: 20, required: true }],
 */

export default function DynamicForm() {
    const { collection } = useParams();
    const [fields, setFields] = useState(null);
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
                                        <div className="group" key={currentIndex}>
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
                                    return null; // Si no hay más elementos, retornar nulo
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