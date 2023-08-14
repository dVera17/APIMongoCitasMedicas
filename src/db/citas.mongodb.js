use('db_citas');
db.createCollection("usuario", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id", "nombre", "telefono", "direccion", "tipo_doc", "genero"],
            properties: {
                id: { bsonType: "int", description: "'id' debe ser un entero y es requerido" },
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

use('db_citas');
db.usuario.insertOne({
    id: 1234,
    nombre: "Daniel",
    telefono: "318",
    direccion: "cra 27",
    email: "d@d.com",
    tipo_doc: "CC",
    genero: "masculino"
});

use('db_citas');
db.usuario.find({});