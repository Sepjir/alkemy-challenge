# INSTRUCCIONES PARA LEVANTAR TANTO BACKEND, COMO FRONT END

## Levantar servidor

- Abrir Terminal

- Ingresar a la carpeta back-end en la terminal: `cd back-end`

- Descargar dependencias `npm install`

- Crear base de datos en PostgreSQL llamada `finanzas`

- Cambiar credenciales de `PGUSER` y `PGPASSWORD` para ingresar a la DB en el archivo `.env`

- Ejecutar el comando en terminal `npm run migrate` para crear tablas y poblar su información

- Ejecutar el comando en la terminal `npm run start` para iniciar el servidor de manera local.

## Iniciar aplicación en ReactJS

- Abrir una segunda terminal

- Ingresar a la carpeta front-end en la terminal: `cd front-end`

- Descargar dependencias `npm install`

- Ejecutar el comando en la terminal: `npm run start`

## Herramientas ocupadas

### Back-End

- cors

- dotenv

- express

- nodemon

- pg

### Front-End

- axios

- bootstrap

- moment

- react

- react router dom

- uuid