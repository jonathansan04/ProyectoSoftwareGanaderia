import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { get } from "../Suports/rest";
import './styles/dynamicTable.css';
import BarChart from "../Charts/barChart";

export default function DynamicTable() {
    const { collection } = useParams();
    const [data, setData] = useState([]);
    const [dataChart, setDataChart] = useState([]);
    const fieldsRef = useRef(null),
        navigate = useNavigate();

    const str2date = (string) => {
        const parts = string.split('-');
        return new Date(parts[0], parts[1] - 1, parts[2]);
    }

    useEffect(() => {
        (async () => {
            fieldsRef.current = (await get(`/Fields/${collection}`)).fields;
            !fieldsRef.current && navigate('/NotFound');
        })()
    }, [collection, navigate]);

    useEffect(() => {
        (async () => {
            let res = await get(`/${collection}`);
            let m = res.map(e => {
                let obj = {};
                fieldsRef.current.forEach(f => !f.field.startsWith('id') && !f.field.startsWith('contraseña') && (obj[f.field] = e[f.field]));
                return obj;
            });
            setData(m);
            if (collection === "Produccion") {
                let data = [];
                let cont = {};
                let date1 = str2date("2024-04-15"), date2 = str2date("2024-04-30");
                let prod = m.filter(e => {
                    let date = str2date(e.fecha);
                    return date >= date1 && date <= date2;
                });
                prod.forEach(e => {
                    let c = cont[e.fecha] || 0;
                    cont[e.fecha] = c + e.produccion_dia;
                });
                for (const key in cont) {
                    data.push({ name: key, value: cont[key] });
                }
                setDataChart(data.sort((a, b) => str2date(a.name) > str2date(b.name) ? 1 : -1));
            }
        })()
    }, [collection]);

    let sortBy = (field) => {
        let sorted = [...data].sort((a, b) => a[field] > b[field] ? 1 : -1);
        setData(sorted);
    };

    return (
        <div>
            {collection === "Produccion" ? <BarChart data={dataChart} collection={collection} /> :
                <table className="table">
                    <thead className="table-head">
                        <tr className="table-row">
                            {fieldsRef.current && fieldsRef.current.map((e, index) => (
                                !e.field.startsWith('id') && !e.field.startsWith('contraseña') &&
                                <th key={index}>{e.field.replaceAll("_", " ")}
                                    <button className="btn-sort" onClick={() => sortBy(e.field)}></button>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        {data.map((e, index) => (
                            <tr key={index} className={"table-row" + (index % 2 === 1 ? " shadowed" : "")}>
                                {fieldsRef.current && fieldsRef.current.map((f, i) => (
                                    !f.field.startsWith('id') && !f.field.startsWith('contraseña') && <td className="table-cell" key={i}>{e[f.field]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>}
        </div>
    )
}