import app from "./app";
import './connection';

process.removeAllListeners('warning');

app.listen(app.get('port'));
console.log('Server running on port ' + app.get('port'));


/* const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

const serviceAccount = require('../Ganaderia.json');

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();
db.collection('Usuarios').doc().set({
    nombre: 'Luis',
    apellido: 'Urrego',
    correo: 'nreuanlj@uergt.gdo',
    contraseña: '79451',
    rol: 'cliente',
    fecha: Timestamp.now()
});


db.collection('Usuarios').get().then((e) => e.docs.map((e) => console.log(e.data())));

db.collection('Usuarios').get().then((e) => e.forEach((e) => console.log(e.data())));
(async () => {
    await db.collection('Usuarios').add({
        nombre: 'Noah', apellido: 'Carrillo', correo: 'frjege@nfyj-uip',
        contraseña: '1234', rol: 'admin'
    });
    // Obtener todos los documentos
    let users = await db.collection('Usuarios').get().then((e) => e.docs.map((e) => {
        return {
            id: e.id, registro: e.createTime.toDate().getTime(),
            ultactualizacion: e.updateTime.toDate().getTime(), ...e.data()
        }
    }));
    console.log(users);

    // Obtener campos especificos y id
    let data = await db.collection('Usuarios').select('id', 'nombre', 'constraseña')
        .get().then((e) => e.docs.map(e => { return { id: e.id, ...e.data() } }));
    console.log(data);

    // Filtrar campo
    let user = db.collection('Usuarios').where('nombre', '!=', 'Ivan');
    let users = await user.get().then((e) => e.docs.map(e => e.data()));

    // Obtener id
    let docref = db.collection('Usuarios').doc();
    console.log(docref.id);

    //Eliminar documento
    let f = await db.collection('Usuarios').doc('2').delete();
    console.log(f);
})(); */