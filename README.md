# Gestor de citas medicas

## Requisitos del sistema

- Node.js y NPM (Node Package Manager) instalados en el sistema.
- Mongodb instalado

## Instalacion

1. Clona este repositorio:
    ```bash
    https://github.com/dVera17/APIMongoAlquilerAutos.git
    ```
2. Instala las dependencias con el comando:
    ```bash
    npm install
    ```
3. Crea un archivo .env y copia las variables de entorno del archivo .env.example y colocar sus valores, ejemplo:
    ```Javascript
    // .env
    JWT_PRIVATE_KEY = "clave secreta"
    PORT_SERVER = puerto
    DB_USER = "user de mongo"
    DB_PASSWORD = "password"
    DB_NAME = "nombre de la base de datos"
    ```

## Configuracion del packge.json

Las importaciones se manejaran con el estandar ES6 y se agrega el comando "dev" si se esta utilizando [nodemon](https://www.npmjs.com/package/nodemon).
```json
{
    ...,
    "type": "module",
    "scripts": {
        "tsc": "tsc -w",
        "dev": "nodemon --quiet src/index.js"
    }
    ...,
}
```

## Seguridad y autenticacion

Este proyecto implementa un sistema de autenticación basado en JWT (JSON Web Token) para proteger los endpoints y garantizar un acceso seguro a la API. JWT es un estándar ampliamente utilizado para la autenticación y autorización en aplicaciones web modernas. Por el momento se utiliza un unico token de acceso publico para la autorización.

Se implementa la libreria passport y passport-http-bearer

- para generar un token debes hacerlo con el usuario admin101 para poder tener acceso a todos los endpoints: `GET localhost:5010/token/admin101`

## Descripción de Endpoints

### Pacientes

- `GET /api/admin/pacientes`: Obtener todos los pacientes alfabéticamente

- `GET /api/admin/pacientes/proxima_cita/:dni`: Encontrar la próxima cita para un paciente específico

- `GET /api/admin/pacientes/medico/:med_matri`: Encontrar todos los pacientes que tienen citas con un médico específico

- `GET /api/admin/pacientes/consultoria/:dni`: Obtener las consultorías para un paciente específico

### Cita

- `GET /api/admin/cita`: Obtener todas las citas alfabéticamente

- `GET /api/admin/cita/total_citas/:cod_medico/:fecha`: Contar el número de citas que un médico tiene en un día específico

### Medico:

- `GET /api/admin/medico/:especialidad`: Obtener todos los médicos de una especialidad específica

- `GET /api/admin/medico/data/consultorios`: Obtener los médicos y sus consultorios

## Inicialización del servidor

Para empezar a utilizar la aplicación, abre tu terminal y ejecuta el siguiente comando.
```bash
npm run dev
```
