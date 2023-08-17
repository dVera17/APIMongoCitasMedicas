use('db_citas');
db.createCollection("usuario", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id", "nombre", "telefono", "direccion", "tipo_doc", "genero"],
            properties: {
                dni: { bsonType: "int", description: "'dni' debe ser un entero y es requerido" },
                nombre: { bsonType: "string", description: "'nombre' debe ser un string y es requerido" },
                telefono: { bsonType: "string", description: "'telefono' solo puede contener numeros y es requerido", pattern: "^[0-9]+$" },
                direccion: { bsonType: "string", description: "'direccion'" },
                email: { bsonType: "string", description: "'email' debe ser una direccion de correo valido y es requerido" },
                tipo_doc: { enum: ['CC', 'TI', 'PSP', 'RCN', 'CEX'] },
                genero: { enum: ['masculino', 'femenino'], description: "'genero' solo puede ser masculino o femenino" },
                dni_acudiente: { bsonType: "int", description: "'acudiente'" }
            }
        }
    }
});

db.createCollection("acudiente", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id", "nombre", "telefono", "direccion"],
            properties: {
                dni: { bsonType: "int", description: "'dni' debe ser un entero y es requerido" },
                nombre: { bsonType: "string", description: "'nombre' debe ser un string y es requerido" },
                telefono: { bsonType: "string", description: "'telefono' solo puede contener numeros y es requerido", pattern: "^[0-9]+$" },
                direccion: { bsonType: "string", description: "'direccion'" }
            }
        }
    }
})

db.createCollection("cita", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["codigo", "fecha", "estado", "cod_matriProfesional_med", "dni_usuario"],
            properties: {
                codigo: { bsonType: "int", description: "'codigo' debe ser un número entero y es requerido" },
                fecha: { bsonType: "date", description: "'fecha' debe ser una fecha valida y es requerida" },
                estado: { enum: ['programada', 'atendida', 'rechazada'], description: "'estado' es requerido" },
                cod_matriProfesional_med: { bsonType: "int", description: "'cod_matriProfesional_med' debe ser un número entero y es requerido" },
                dni_usuario: { bsonType: "int", description: "'dni_usuario' debe ser un entero y es requerido" }
            }
        }
    }
})

db.createCollection("medico", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["cod_matriProfesional", "nombre", "id_consultorio", "id_especialidad"],
            properties: {
                cod_matriProfesional: { bsonType: "int", description: "'cod_matriProfesional' debe ser un número entero y es requerido" },
                nombre: { bsonType: "string", description: "'nombre' debe ser un string y es requerido" },
                id_consultorio: { bsonType: "int", description: "'id_consultorio' debe ser un número entero y es requerido" },
                id_especialidad: { bsonType: "int", description: "'id_especialidad' debe ser un número entero y es requerido" }
            }
        }
    }
})

db.createCollection("especialidad", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id", "nombre"],
            properties: {
                id: { bsonType: "int", description: "'id' debe ser un número entero y es requerido" },
                nombre: { bsonType: "string", description: "'nombre' debe ser un string y es requerido" }
            }
        }
    }
})

db.createCollection("consultorio", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id", "nombre"],
            properties: {
                id: { bsonType: "int", description: "'id' debe ser un número entero y es requerido" },
                nombre: { bsonType: "string", description: "'nombre' debe ser un string y es requerido" }
            }
        }
    }
})

db.createCollection("cliente", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ['user', 'email', 'rol'],
            properties: {
                user: { bsonType: "string", description: "'user' debe ser un string y es requerido" },
                email: { bsonType: "string", description: "'email' debe ser un correo valido y es requerido" },
                rol: { enum: ['admin', 'medico', 'usuario'] }
            }
        }
    }
})

db.cliente.insertMany([
    {
        user: "admin101",
        email: "admin101@gmail.com",
        rol: "admin"
    },
    {
        user: "medico101",
        email: "medico101@gmail.com",
        rol: "medico"
    },
    {
        user: "user101",
        email: "user101@hotmail.com",
        rol: "usuario"
    }
])

db.consultorio.insertMany([
    {
        id: 1,
        nombre: "consul1"
    },
    {
        id: 2,
        nombre: "consul2"
    },
    {
        id: 3,
        nombre: "consul3"
    },
    {
        id: 4,
        nombre: "consul4"
    },
    {
        id: 5,
        nombre: "consul5"
    }
]);

db.especialidad.insertMany([
    {
        id: 1,
        nombre: "cardiologia"
    },
    {
        id: 2,
        nombre: "dermatologia"
    },
    {
        id: 3,
        nombre: "gastroenterologia"
    },
    {
        id: 4,
        nombre: "neurologia"
    },
    {
        id: 5,
        nombre: "oftalmologia"
    },
    {
        id: 6,
        nombre: "pediatria"
    },
    {
        id: 7,
        nombre: "urologia"
    },
    {
        id: 8,
        nombre: "endocrinologia"
    },
    {
        id: 9,
        nombre: "otorrinolaringologia"
    }
]);

db.medico.insertMany([
    {
        cod_matriProfesional: 1,
        nombre: "nombre1",
        id_consultorio: 1,
        id_especialidad: 1
    },
    {
        cod_matriProfesional: 2,
        nombre: "nombre2",
        id_consultorio: 2,
        id_especialidad: 2
    },
    {
        cod_matriProfesional: 3,
        nombre: "nombre3",
        id_consultorio: 3,
        id_especialidad: 3
    },
    {
        cod_matriProfesional: 4,
        nombre: "nombre4",
        id_consultorio: 4,
        id_especialidad: 4
    },
    {
        cod_matriProfesional: 5,
        nombre: "nombre4",
        id_consultorio: 5,
        id_especialidad: 5
    }
]);

db.cita.insertMany([
    {
        codigo: 1,
        fecha: ISODate('2023-01-01'),
        estado: "programada",
        cod_matriProfesional_med: 1,
        dni_usuario: 1
    },
    {
        codigo: 2,
        fecha: ISODate('2023-01-01'),
        estado: "programada",
        cod_matriProfesional_med: 2,
        dni_usuario: 2
    },
    {
        codigo: 3,
        fecha: ISODate('2023-01-01'),
        estado: "programada",
        cod_matriProfesional_med: 3,
        dni_usuario: 3
    },
    {
        codigo: 4,
        fecha: ISODate('2023-01-01'),
        estado: "atendida",
        cod_matriProfesional_med: 4,
        dni_usuario: 4
    },
    {
        codigo: 5,
        fecha: ISODate('2023-01-01'),
        estado: "atendida",
        cod_matriProfesional_med: 1,
        dni_usuario: 5
    },
    {
        codigo: 6,
        fecha: ISODate('2023-01-01'),
        estado: "programada",
        cod_matriProfesional_med: 2,
        dni_usuario: 6
    },
    {
        codigo: 7,
        fecha: ISODate('2023-01-01'),
        estado: "atendida",
        cod_matriProfesional_med: 3,
        dni_usuario: 7
    },
    {
        codigo: 8,
        fecha: ISODate('2023-01-01'),
        estado: "programada",
        cod_matriProfesional_med: 4,
        dni_usuario: 8
    },
    {
        codigo: 9,
        fecha: ISODate('2023-01-01'),
        estado: "atendida",
        cod_matriProfesional_med: 1,
        dni_usuario: 9
    },
    {
        codigo: 10,
        fecha: ISODate('2023-01-01'),
        estado: "rechazada",
        cod_matriProfesional_med: 2,
        dni_usuario: 10
    }
]);

db.acudiente.insertMany([
    {
        id: 1,
        nombre: "nombre1",
        telefono: "318",
        direccion: "cra 33"
    },
    {
        id: 2,
        nombre: "nombre2",
        telefono: "319",
        direccion: "cra 34"
    },
    {
        id: 3,
        nombre: "nombre3",
        telefono: "320",
        direccion: "cra 35"
    },
    {
        id: 4,
        nombre: "nombre4",
        telefono: "321",
        direccion: "cra 36"
    },
    {
        id: 5,
        nombre: "nombre5",
        telefono: "322",
        direccion: "cra 37"
    }
]);

db.usuario.insertMany([
    {
        id: 1,
        nombre: "Daniel",
        telefono: "318",
        direccion: "cra 27",
        email: "daniel@daniel.com",
        tipo_doc: "CC",
        genero: "masculino"
    },
    {
        id: 2,
        nombre: "Maria",
        telefono: "319",
        direccion: "cra 28",
        email: "maria@maria.com",
        tipo_doc: "TI",
        genero: "femenino"
    },
    {
        id: 3,
        nombre: "Juan",
        telefono: "320",
        direccion: "cra 29",
        email: "juan@juan.com",
        tipo_doc: "CC",
        genero: "masculino"
    },
    {
        id: 4,
        nombre: "Ana",
        telefono: "321",
        direccion: "cra 30",
        email: "ana@ana.com",
        tipo_doc: "PSP",
        genero: "femenino"
    },
    {
        id: 5,
        nombre: "Luis",
        telefono: "322",
        direccion: "cra 31",
        email: "luis@luis.com",
        tipo_doc: "RCN",
        genero: "masculino"
    }
]);