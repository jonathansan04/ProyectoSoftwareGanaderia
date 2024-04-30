import { db } from "../connection";
import bcrypt from "bcrypt";
import { typeCollections } from "../base";

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
    };


export { login, fields }