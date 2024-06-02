import constraint from "../Controllers/ConstraintController";
import { validate, invalidate } from "../base";

const res = {
    message: null,
    success: false,
    obj: {},
    status: 400
}

const excelDateToJSDate = (serial) => {
    const utc_days = Math.floor(serial - 25569);
    const utc_value = utc_days * 86400;
    return new Date(utc_value * 1000);
};
const insert = async (db, col, data) => {
    if (!validate(col, data))
        return { ...res, ...{ message: "Faltan campos" } };
    if (invalidate(col, data))
        return { ...res, ...{ message: "Campos invalidos" } };
    let { msg, obj } = await constraint("post", col, data);
    if (msg)
        return { ...res, ...{ message: msg } };
    try {
        await db.collection(col).add(obj);
        return { message: `${col} creado`, success: true, obj: obj, status: 201 };
    } catch (e) {
        return { ...res, ...{ message: e.message, status: 500 } };
    }
};

export default { excelDateToJSDate, insert };