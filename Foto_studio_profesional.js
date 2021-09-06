// Adonistuvoaqui

// Para poder hacer el respaldo basandose desde estos codigos es necesario ejecutarlos gradualmente
//Es decir en el orden logico que se van explicando en los comentarios.

// Creamos la base de datos 

use Foto_studio_profesional

// Vemos la base de datos creada /

"show dbs"

// Creamos la primer coleccion "clientes"

db.createCollection("clientes")

//  Verficamos la coleccion creada
show collections

// Insertamos datos a la coleccion "clientes" 

db.clientes.insertMany( [ { nombre: "Maritza", apellidos: "Rivas", sexo: "Femenino", telefono: 25563289, email: "maritzarivas@gmail.com", nombre_producto: "combo_premium", precio_producto: 700, fecha: new Date("2021, 06, 21") },
  { nombre: "Pedro", apellidos: "Ramos", sexo: "Masculino", telefono: 25563274, email: "pedro@gmail.com", nombre_producto: "medium", precio_producto: 600, fecha: new Date("2021, 06, 07") },
   { nombre: "Raul", apellidos: "Beltran", sexo: "Masculino", telefono: 26245577, email: "raul@gmail.com", nombre_producto: "combo_premium", precio_producto: 700, fecha: new Date("2021, 06, 12") },
    { nombre: "Gerson", apellidos: "Bairez", sexo: "Masculino", telefono: 60141235, email: "bairez@gmail.com", nombre_producto: "combo_basico", precio_producto: 150, fecha: new Date("2021, 06, 15") },
     { nombre: "Gloria", apellidos: "De la O", sexo: "Femenino", telefono: 78695577, email: "gloriadelao@gmail.com", nombre_producto: "combo_familiar", precio_producto: 550, fecha: new Date("2021, 06, 18") },
      { nombre: "Maria", apellidos: "Guevara Paiz", sexo: "Femenino", telefono: 26855577, email: "mariapaiz@gmail.com", nombre_producto: "combo_personalizado", precio_producto: 00, fecha: new Date("2021, 05, 03") },
       { nombre: "Cesar", apellidos: "Funes", sexo: "Masculino", telefono: 10235577, email: "cesar@gmail.com", nombre_producto: "combo_premium", precio_producto: 700, fecha: new Date("2021, 05, 29") },
        { nombre: "Jaime", apellidos: "Penedo", sexo: "Masculino", telefono: 10553677, email: "penedo@gmail.com", nombre_producto: "combo_familiar", precio_producto: 550, fecha: new Date("2021, 05, 22") },
         { nombre: "Cristian", apellidos: "Villalta", sexo: "Masculino", telefono: 45153677, email: "jaime@gmail.com", nombre_producto: "combo_basico", precio_producto: 150, fecha: new Date("2021, 05, 10") },
          { nombre: "Gissela", apellidos: "Barrios", sexo: "Femnino", telefono: 10553889, email: "gissela@gmail.com", nombre_producto: "combo_familiar", precio_producto: 550, fecha: new Date("2021, 05, 10") } ] )


// vemos los datos registrados en la coleccion "clientes"
db.clientes.find().pretty()






// Creamos la segunda coleccion "combos"
db.createCollection("combos")

//  Verficamos la coleccion creada
show collections

// Insertamos datos a la coleccion "combos" 

db.combos.insertMany( [ { combo_premium: "1 foto ampliada+3 de video HD(1hrsvideo)+1 video con drone/30mts + 500 fotografias impresas", Precio_combo: 700, Total_combo: 700 },
 { combo_medium: "1 2 videos HD(1hrs por video) + 400 fotografias impresas2 videos HD(1hrs por video) + 400 fotografias impresas", Precio_combo: 600, Total_combo: 600 },
  { combo_basico: "1 video HD 1hr + 300 fotografias impresas", Precio_combo: 150, Total_combo: 150 },
   { combo_familiar: "2 videos HD(1hors cada uno)+ 350 fotos impresas + video Drone 15mts", Precio_combo: 550, Total_combo: 550 },
    { combo_personalizado: "Eleccion del cliente", Precio_combo: 00, Total_combo: 00 }  ])


// vemos los datos registrados en la coleccion "combos"
db.combos.find().pretty()





// // Creamos la tercera coleccion "empleados"
db.createCollection("empleados")

//  Verficamos la coleccion creada
show collections

// Insertamos datos a la coleccion "empleados" 

db.empleados.insertMany( [ { nombre: "Juan", apellidos: "Martin Ramos", cargo: "Fotografo", sexo: "Masculino", salario: 400, email: "jramos@gmail.com", telefono: "4546-7896", departamento: "San Miguel", municipio: "Moncagua", zona: "Urbana", residencia: "Colonia Ramirez", direccion: "3° calle poniente,casa numero 14" },
 { nombre: "Rosa", apellidos: "Rodriguez", cargo: "Maquillista", sexo: "Femenino", salario: 400, email: "rosa12@gmail.com", telefono: "1078-7896", departamento: "Usulutan", municipio: "Jucuapa", zona: "Urabana", residencia: "Colonia Miramontes", direccion: "8 calle occidente,casa 5" },
  { nombre: "Marta", apellidos: "Castro", cargo: "Asistente de Maquillista", sexo: "Femenino", salario: 300, email: "martacastro@gmail.com", telefono: "1078-5879", departamento: "La Union", municipio: "Limeño", zona: "Urabana", residencia: "Colonia Margarita", direccion: "avda occidente,casa 8" },
   { nombre: "Bryan", apellidos: "Gonzales", cargo: "Editor de fotos y videos", sexo: "Masculino", salario: 400, email: "bryan@gmail.com", telefono: "1078-5544", departamento: "Usulutan", municipio: "El Triunfo", zona: "Urbana", residencia: "Colonia Paz", direccion: "avda oriente,casa n 9" },
    { nombre: "Rogelio", apellidos: "Gomez", cargo: "Conductor", sexo: "Masculino", salario: 380, email: "rogeliog@gmail.com", telefono: "1078-6017", departamento: "Morazan", municipio: "Gotera", zona: "Urabana", residencia: "Colonia Margares 2", direccion: "8 calle occidente,casa n12" },
     { nombre: "Herber", apellidos: "Rodriguez", cargo: "Motorista", sexo: "Masculino", salario: 380, email: "herber@gmail.com", telefono: "1078-7895", departamento: "Morazan", municipio: "Gotera", zona: "Urabana", residencia: "Colonia Alta vista", direccion: "Avda jerusalen,casa n°6" },
      { nombre: "Yesenia", apellidos: "Castillo", cargo: "Editor de fotos y videos", sexo: "Femenino", salario: 400, email: "yesenia@gmail.com", telefono: "1078-2078", departamento: "Morazan", municipio: "Cacaopera", zona: "Urabana", residencia: "Colonia Alta vista", direccion: "Avda los pinos,casa n°4" },
       { nombre: "Roberto", apellidos: "Castillo", cargo: "Fotografo", sexo: "Masculino", salario: 400, email: "roberto@gmail.com", telefono: "4778-2078", departamento: "San MIguel", municipio: "Chinameca", zona: "Urabana", residencia: "Colonia Agular", direccion: "Avda los pinos,casa n°4" },
        { nombre: "Ibania", apellidos: "Castillo", cargo: "Maquillista", sexo: "Femenino", salario: 400, email: "ibania@gmail.com", telefono: "8896-2078", departamento: "La Union", municipio: "Santa Rosa", zona: "Urabana", residencia: "Colonia Alta vista", direccion: "Avda los claro,casa n°5" },
         { nombre: "Marcea", apellidos: "Amalla", cargo: "Administrativa", sexo: "Femenino", salario: 480, email: "marcela@gmail.com", telefono: "4566-2078", departamento: "San Miguel", municipio: "Lolotique", zona: "Urabana", residencia: "Barrio San Juan", direccion: "Avda los pinos,casa n°4" } ] )


// vemos los datos registrados en la coleccion "empleados"
db.empleados.find().pretty()





// Creamos la tercera coleccion "ventas"
db.createCollection("ventas")

//  Verficamos la coleccion creada
show collections

// Insertamos datos a la coleccion "ventas"

db.ventas.insertMany( [ { id_venta: 101, nombre_cliente: "Maritza", apellidos_cliente: "Rivas", nombre_producto: "Combo_premium", nombre_evento: "Boda", fecha : new Date(2021,05,21), precio_producto: 700, total_combo: 700, total_factura: 700 }, { id_venta: 102, nombre_cliente: "Pedro", apellidos_cliente: "Ramos", nombre_producto: "Combo_medium", nombre_evento: "Bautizmo", precio_producto: 600, total_combo: 600, total_factura: 600 },
{ id_venta: 103, nombre_cliente: "Raul", apellidos_cliente: "Beltran", nombre_producto: "Combo_premium", nombre_evento: "Cumpleaños", fecha : new Date(2021,05,21), precio_producto: 700, total_combo: 700, total_factura: 700 },
 { id_venta: 104, nombre_cliente: "Gloria", apellidos_cliente: "De la O", nombre_producto: "Combo_familiar", nombre_evento:"Bautizmo", fecha : new Date(2021,05,21), precio_producto: 550, total_combo: 550, total_factura: 550 },
 { id_venta: 105, nombre_cliente: "Gerson", apellidos_cliente: "Bairez", nombre_producto: "Combo_basico", nombre_evento: "Cumpleaños", fecha : new Date(2021,05,21), precio_producto: 150, total_combo: 150, total_factura: 150 },
  { id_venta: 106, nombre_cliente: "Maria", apellidos_cliente: "Guevara Paiz", nombre_producto: "Combo_personalizado", nombre_evento: "Baby shower", fecha : new Date(2021,05,21), precio_producto: 00, total_combo: 00, total_factura: 00 },
  { id_venta: 107, nombre_cliente: "Cesar", apellidos_cliente: "Funes", nombre_producto: "Combo_premium", nombre_evento: "Cumpleaños", fecha : new Date(2021,05,21), precio_producto: 700, total_combo: 700, total_factura: 700 },
   { id_venta: 108, nombre_cliente: "Jaime", apellidos_cliente: "Penedo", nombre_producto: "Combo_familiar", nombre_evento: "Bautizmo", fecha : new Date(2021,05,21), precio_producto: 550, total_combo: 550, total_factura: 550 },
   { id_venta: 109, nombre_cliente: "Cristian", apellidos_cliente: "Villalta", nombre_producto: "Combo_basico", nombre_evento: "boda", fecha : new Date(2021,05,21), precio_producto: 150, total_combo: 150, total_factura: 150 },
    { id_venta: 110, nombre_cliente: "Gisselle", apellidos_cliente: "Barrios", nombre_producto: "Combo_familiar", nombre_evento: "Bautizmo", fecha : new Date(2021,05,21), precio_producto: 550, total_combo: 550, total_factura: 550 } ] )


// vemos los datos registrados en la coleccion "empleados"
db.ventas.find().pretty()




// Creamos la tercera coleccion "reclamos"
db.createCollection("reclamos")

//  Verficamos la coleccion creada
show collections

// Insertamos datos a la coleccion "reclamos"

db.reclamos.insertMany( [ { id_reclamo: 001, asunto: "mala calida en los videos", fecha : new Date(2021,05,28), nombre_empleado: "Rosa", apellidos_mepleado: "Rodriguez", nombre_cliente: "Pedro", apellidos_cliente: "Ramos", nombre_evento: "Bautizmo" },
 { id_reclamo: 002, asunto: "Llegada tardia al evento", fecha : new Date(2021,05,21), nombre_empleado: "Juan", apellidos_mepleado: "Martin Ramos", nombre_cliente: "Maritza", apellidos_cliente: "Rivas", nombre_evento: "Boda" },
  { id_reclamo: 003, asunto: "Falta de amabilidad", fecha : new Date(2021,03,19), nombre_empleado: "Rosa", apellidos_mepleado: "Rodriguez", nombre_cliente: "Raul", apellidos_cliente: "Beltran", nombre_evento: "Cumpleaños" },
   { id_reclamo: 004, asunto: "Mala calida en la fotografias", fecha : new Date(2021,02,15), nombre_empleado: "Bryan", apellidos_mepleado: "Gonzales", nombre_cliente: "Gloria", apellidos_cliente: "De la O", nombre_evento: "Boda" },
    { id_reclamo: 005, asunto: "Mala calida en la fotografias", fecha : new Date(2021,01,12), nombre_empleado: "Bryan", apellidos_mepleado: "Gonzales", nombre_cliente: "Cristian", apellidos_cliente: "Villalta", nombre_evento: "Boda" },
     { id_reclamo: 006, asunto: "mala calida en los videos", fecha : new Date(2021,05,10), nombre_empleado: "Rosa", apellidos_mepleado: "Rodriguez", nombre_cliente: "Gisselle", apellidos_cliente: "Barrios", nombre_evento: "Bautizmo" },
      { id_reclamo: 007, asunto: "mala calida en las fotografias", fecha : new Date(2021,05,08), nombre_empleado: "Bryan", apellidos_mepleado: "Gonzales", nombre_cliente: "Jaime", apellidos_cliente: "Penedo", nombre_evento: "Bautizmo" },
       { id_reclamo: 008, asunto: "Falta de ambilidad", fecha : new Date(2021,04,16), nombre_empleado: "Yesenia", apellidos_mepleado: "Castillo", nombre_cliente: "Gerson", apellidos_cliente: "Baires", nombre_evento: "Cumpleaños" },
        { id_reclamo: 009, asunto: "Falta de ambilidad", fecha : new Date(2021,04,17), nombre_empleado: "Yesenia", apellidos_mepleado: "Castillo", nombre_cliente: "Maria", apellidos_cliente: "Guevara Paiz", nombre_evento: "Baby Shower" },
         { id_reclamo: 010, asunto: "Falta de ambilidad", fecha : new Date(2021,02,09), nombre_empleado: "Yesenia", apellidos_mepleado: "Castillo", nombre_cliente: "Cesar", apellidos_cliente: "Funes", nombre_evento: "Cumpleaños" } ]  )

// vemos los datos registrados en la coleccion "reclamos"
db.reclamos.find().pretty()
