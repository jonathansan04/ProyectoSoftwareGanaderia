import { db } from "../connection";
import bcrypt from "bcrypt";

let login = (req, res) => {
    let { correo, contraseña } = req.body;
    if (!correo || !contraseña) {
        res.status(400).json({ message: "Faltan campos", success: false });
        return;
    }
    db.collection("Usuario").where("correo", "==", correo).get()
        .then(async e => e.empty
            ? res.status(404).json({ message: "Usuario no encontrado", success: false })
            : (await bcrypt.compare(contraseña, e.docs[0].data().contraseña))
                ? res.json({ message: "Ingresando...", success: true })
                : res.status(400).json({ message: "Usuario o contraseña incorrectos", success: false }))
        .catch(e => res.status(500).json({ message: e.message, success: false }));
}


export { login }