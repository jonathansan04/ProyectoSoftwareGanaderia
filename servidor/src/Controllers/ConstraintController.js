import { db, Filter } from "../connection";
import bcrypt from "bcrypt";

let constraint = async (method, field, body) => {
    if (method === "post" || method === "put") {
        if (field === "Usuario") {
            let size = 0;
            body.correo && (size = await db.collection('Usuario').where('correo', '==', body.correo).get().then(e => e.size));
            body.contraseña && size == 0 && (body.contraseña = await bcrypt.hash(body.contraseña, 10));
            return { msg: size > 0 ? "El correo ya esta registrado" : null, obj: body };
        }
    }
}

export default constraint;