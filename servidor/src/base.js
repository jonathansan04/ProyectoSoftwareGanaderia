const typeCollections = {
  Animal: [{ field: 'nombre', type: 'text', length: 50, required: true },
  { field: 'numero', type: 'number', required: true },
  { field: 'nacimiento', type: 'date', required: true },
  { field: 'sexo', type: 'text', length: 1, required: true },
  { field: 'id_animal_madre', type: 'text', length: 20, required: false },
  { field: 'id_animal_padre', type: 'text', length: 20, required: false },
  { field: 'peso', type: 'number', required: false },
  { field: 'id_raza', type: 'text', length: 20, required: true },
  { field: 'id_usuario', type: 'text', length: 20, required: true }],

  Construccion: [{ field: 'cantidad', type: 'number', required: true },
  { field: 'extension', type: 'number', required: true },
  { field: 'descripcion', type: 'text', length: 200, required: false },
  { field: 'id_potrero', type: 'text', length: 20, required: true }],

  Empleado: [{ field: 'nombre', type: 'text', length: 50, required: true },
  { field: 'apellido', type: 'text', length: 50, required: true },
  { field: 'nacimiento', type: 'date', required: true },
  { field: 'celular', type: 'text', length: 15, required: true },
  { field: 'numero_id', type: 'text', length: 20, required: true },
  { field: 'tipo_id', type: 'text', length: 3, required: true },
  { field: 'rh', type: 'text', length: 2, required: false },
  { field: 'eps', type: 'text', length: 50, required: false },
  { field: 'inicio_contrato', type: 'date', required: true },
  { field: 'final_contrato', type: 'date', required: false },
  { field: 'salario', type: 'number', required: true },
  { field: 'salario_total', type: 'number', required: false },
  { field: 'id_rol', type: 'text', length: 20, required: true },
  { field: 'id_usuario', type: 'text', length: 20, required: true }],

  Finca: [{ field: 'nombre', type: 'text', length: 50, required: true },
  { field: 'ubicacion', type: 'text', length: 100, required: true },
  { field: 'extension', type: 'number', required: false },
  { field: 'numero_predial', type: 'text', length: 20, required: true },
  { field: 'id_usuario', type: 'text', length: 20, required: true }],

  Implemento: [{ field: 'nombre', type: 'text', length: 50, required: true },
  { field: 'cantidad', type: 'number', required: true },
  { field: 'precio', type: 'number', required: true },
  { field: 'id_finca', type: 'text', length: 20, required: true }],

  Medicamento: [{ field: 'nombre', type: 'text', length: 50, required: true },
  { field: 'cantidad', type: 'number', required: true },
  { field: 'precio', type: 'number', required: true },
  { field: 'id_finca', type: 'text', length: 20, required: true }],

  Pastura: [{ field: 'inicio', type: 'date', required: true },
  { field: 'final', type: 'date', required: true },
  { field: 'id_potrero', type: 'text', length: 20, required: true }],

  Potrero: [{ field: 'numero', type: 'number', required: true },
  { field: 'extension', type: 'number', required: false },
  { field: 'tipo_pasto', type: 'text', length: 50, required: true },
  { field: 'id_finca', type: 'text', length: 20, required: true }],

  Produccion: [{ field: 'fecha', type: 'date', required: true },
  { field: 'numero_ordeño', type: 'number', required: true },
  { field: 'produccion_dia', type: 'number', required: true },
  { field: 'id_finca', type: 'text', length: 20, required: true }],

  Raza: [{ field: 'nombre', type: 'text', length: 50, required: true },
  { field: 'id_tipoRaza', type: 'text', length: 20, required: true }],

  Rol: [{ field: 'nombre', type: 'text', length: 50, required: true }],

  Tiporaza: [{ field: 'nombre', type: 'text', length: 50, required: true }],

  Usuario: [{ field: 'nombre', type: 'text', length: 50, required: true },
  { field: 'apellido', type: 'text', length: 50, required: true },
  { field: 'celular', type: 'text', length: 15, required: true },
  { field: 'tipo_id', type: 'text', length: 3, required: true },
  { field: 'numero_id', type: 'text', length: 20, required: true },
  { field: 'correo', type: 'text', length: 50, required: true },
  { field: 'contraseña', type: 'text', length: 50, required: true }],

  Vacunacion: [{ field: 'fecha', type: 'date', required: true },
  { field: 'dosis', type: 'number', required: true },
  { field: 'enfermedad', type: 'text', length: 50, required: true },
  { field: 'id_animal', type: 'text', length: 20, required: true }],

  Venta: [{ field: 'fecha', type: 'date', required: true },
  { field: 'cantidad_animales', type: 'number', required: true },
  { field: 'id_empleado', type: 'text', length: 20, required: true }]
},
  validate = (col, obj) => typeCollections[col].every(({ field, type, length, required }) => {
    if ((required && !obj[field]) || (length && obj[field] && obj[field].length > length)) {
      console.log(`Error en ${field} de ${col}`);
      return false;
    }
    return true;
  }),
  invalidate = (col, obj) => Object.keys(obj).some(key => 
  {
    if (!typeCollections[col].map(({ field }) => field).includes(key)) {
      console.log(`Error en ${key} de ${col}`)
      return true;
    }
    return false;
  }),
  collections = {};
for (const key in typeCollections) {
  const element = typeCollections[key];
  collections[key] = element.map(({ field }) => field);
};

export { collections, typeCollections, validate, invalidate };