import { collections, validate, invalidate } from "../base";
import { db } from "../connection";
import constraint from "./ConstraintController";

const keys = Object.keys(collections);
const controllers = {};
let msg = null, obj = {};

let cons = async (method, field, body) => {
    let res = await constraint(method, field, body);
    msg = res.msg;
    obj = res.obj;
    return res;
}

keys.forEach(key => controllers[key] = {
    get: (req, res) => db.collection(key).get()
        .then(e => res.json(e.docs.map(e => {
            return {
                id: e.id, registro: e.createTime.toDate().getTime(),
                ultactualizacion: e.updateTime.toDate().getTime(), ...e.data()
            }
        })))
        .catch(e => res.status(500).json({ message: e.message, success: false })),

    getById: (req, res) => db.collection(key).doc(req.params.id).get()
        .then(e => e.exists
            ? res.json({
                id: e.id, registro: e.createTime.toDate().getTime(),
                ultactualizacion: e.updateTime.toDate().getTime(), ...e.data()
            })
            : res.status(404).json({ message: `${key} no encontrado`, success: false }))
        .catch(e => res.status(500).json({ message: e.message, success: false })),

    post: async (req, res) => validate(key, req.body)
        ? !invalidate(key, req.body)
            ? !(await cons("post", key, req.body)).msg
                ? db.collection(key).add(obj)
                    .then(e => res.status(201).json({ message: `${key} creado`, success: true, obj: obj }))
                    .catch(e => res.status(500).json({ message: e.message, success: false }))
                : res.status(400).json({ message: msg, success: false })
            : res.status(400).json({ message: "Campos invalidos", success: false})
        : res.status(400).json({ message: "Faltan campos", success: false }),

    put: (req, res) => db.collection(key).doc(req.params.id).get()
        .then(async e => e.exists
            ? !invalidate(key, req.body)
                ? !(await cons("post", key, req.body)).msg
                    ? e.ref.update(obj)
                        .then(e => res.status(200).json({ message: `${key} actualizado`, success: true }))
                        .catch(e => res.status(500).json({ message: e.message, success: false }))
                    : res.status(400).json({ message: msg, success: false })
                : res.status(400).json({ message: "Campos invalidos", success: false })
            : res.status(404).json({ message: `${key} no encontrado`, success: false })),

    delete: (req, res) => db.collection(key).doc(req.params.id).get()
        .then(e => e.exists
            ? e.ref.delete()
                .then(e => res.status(200).json({ message: `${key} eliminado`, success: true }))
                .catch(e => res.status(500).json({ message: e.message, success: false }))
            : res.status(404).json({ message: `${key} no encontrado`, success: false }))
});

export default controllers;