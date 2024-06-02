import { db } from "../connection";
import bcrypt from "bcrypt";
import { typeCollections, collections as Collections } from "../base";
import xlsx from "xlsx";
import Util from "../Util/util";

let login = (req, res) => {
    let { correo, contraseña } = req.body;
    if (!correo || !contraseña) {
        res.status(400).json({ message: "Faltan campos", success: false, id: null });
        return;
    }
    db.collection("Usuario").where("correo", "==", correo).get()
        .then(async e => e.empty
            ? res.status(404).json({ message: "Usuario no encontrado", success: false, id: null })
            : (await bcrypt.compare(contraseña, e.docs[0].data().contraseña))
                ? res.json({ message: "Ingresando...", success: true, id: e.docs[0].id })
                : res.status(400).json({ message: "Contraseña incorrecta", success: false, id: null }))
        .catch(e => res.status(500).json({ message: e.message, success: false, id: null }));
},
    fields = (req, res) => {
        let { col } = req.params;
        if (!typeCollections[col]) {
            res.status(404).json({ message: "Coleccion no encontrada", success: false, fields: null });
            return;
        }
        res.json({ message: "OK", success: true, fields: typeCollections[col] });
    },
    collections = (req, res) => {
        res.json({ message: "OK", success: true, collections: Object.keys(typeCollections) });
    },
    upload = async (req, res) => {
        let { collection, id_usuario } = req.body;
        console.log("collection", collection);
        console.log("id_usuario", id_usuario);
        if (!req.file) {
            return res.status(400).json({ message: "No se subió ningún archivo.", success: false });
        }
        const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
        const sheet = workbook.Sheets["DATOS"];
        let data = xlsx.utils.sheet_to_json(sheet);
        let errors = [];
        data.forEach(d => {
            Object.keys(d).forEach(e => {
                const newkey = e.replace(/\s+/g, "_").toLowerCase().replace("n.", "id")
                if (e !== newkey) {
                    d[newkey] = d[e];
                    delete d[e];
                }
            });
        });
        Collections[collection].includes("id_usuario") && data.forEach(d => d.id_usuario = id_usuario);
        console.log(data);
        data = data.map(async (d, i) => {
            for (const key in d) {
                if (key.includes('fecha'))
                    d[key] = Util.excelDateToJSDate(d[key]).toISOString().split('T')[0];
                if (key.startsWith('id_')) {
                    let col = key.split('_')[1];
                    col = col.substring(0, 1).toUpperCase() + col.substring(1).toLowerCase();
                    let field = col === 'Potrero' ? 'numero' : 'nombre';
                    let snapshot = await db.collection(col).where(field, '==', d[key]).get();
                    if (snapshot.docs.length === 0)
                        errors.push({ row: i, message: `No se encontró ${col} con ${field} ${d[key]}` });
                    else {
                        d[key] = snapshot.docs[0].id;
                        console.log(d);
                        let { message, success, obj, status } = await Util.insert(db, collection, d);
                        console.log(message, success);
                        !success && errors.push({ row: i, message });
                    }
                }
            }
            return d;
        });
        await Promise.all(data);
        console.log("Errores: ", errors);
        res.json({ errors, message: "OK", success: true });
    };


export { login, fields, collections, upload }