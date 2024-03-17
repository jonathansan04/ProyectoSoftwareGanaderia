const collections = {
  Animal: ['nombre', 'numero', 'nacimiento', 'sexo', 'madre', 'padre', 'peso', 'idUsuario', 'idRaza'],
  Construccion: ['cantidad', 'extension', 'descripcion', 'idPotrero'],
  Empleado: ['nombre', 'apellido', 'nacimiento', 'celular', 'numeroid', 'tipoid', 'rh', 'eps',
    'iniciocontrato', 'finalcontrato', 'salario', 'salariototal', 'idRol', 'idUsuario'],
  Finca: ['nombre', 'ubicacion', 'extension', 'numeropredial', 'idUsuario'],
  Implemento: ['nombre', 'cantidad', 'precio', 'idFinca'],
  Medicamento: ['nombre', 'cantidad', 'precio', 'idFinca'],
  Pastura: ['inicio', 'final', 'idPotrero'],
  Potrero: ['numero', 'extension', 'tipopasto', 'idFinca'],
  Produccion: ['fecha', 'numeroordeño', 'producciondia', 'idFinca'],
  Raza: ['nombre', 'idTiporaza'],
  Rol: ['nombre'],
  Tiporaza: ['nombre'],
  Usuario: ['nombre', 'apellido', 'celular', 'tipoid', 'numeroid', 'correo', 'contraseña'],
  Vacunacion: ['fecha', 'dosis', 'enfermedad', 'idAnimal'],
  Venta: ['fecha', 'cantidadanimales', 'idEmpleado']
},
  validate = (col, obj) => collections[col].every(key => Object.keys(obj).includes(key) && obj[key]),
  invalidate = (col, obj) => Object.keys(obj).some(key => !collections[col].includes(key));

export { collections, validate, invalidate };