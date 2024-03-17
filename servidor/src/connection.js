const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, Filter } = require('firebase-admin/firestore');

const serviceAccount = require('../Ganaderia.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

export { db, Filter};