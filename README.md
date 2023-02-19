# code-verifier-backend
Node Express project - backend

# Dependencies
Se instalaron las siguientes dependencias:

**Express** se utiliza en este proyecto para facilitar la creacion de rutas y controladores que manejen peticiones HTTP.

**Jest** para los test del proyecto

**Typescript** porque el tipado de las variables mejora la calidad del codigo y facilita su mantenimiento. 

**Eslint** se utiliza para identificar y reportar patrones problemáticos en el código

**Concurrently** para ejecutar varios comandos a la vez a travez de los scripts especificados en el package.json

**Nodemon** para automatizar el proceso de reinicio del servidor de manera automática cada vez que se realiza un cambio en el código. Al utilizar Nodemon, no es necesario detener y volver a iniciar el servidor manualmente cada vez que se realizan cambios en el código

**Webpack** es una herramienta de construcción de módulos para proyectos de JavaScript que se utiliza para agrupar, empaquetar y optimizar el código de una aplicación web.

**dotenv** para cargar variables de entorno desde un archivo .env 

# Scripts

```"build": "npx tsc"```: para compilar el codigo typescript en javascript y generar la carpeta dist

```"start": "node dist/index.js",```: para iniciar el proyecto

```"dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\""``` : es el script utilizado para desarrollar y que el servidor este escuchando los cambios en el codigo en tiempo real

```"test": "jest",```: para correr los test del proyecto

```"serve:coverage": "npm run test && npx serve  && cd /coverage/lcov-report"```: para correr los test del proyecto y ver la cantidad de codigo del proyecto que tiene test

# Variables de entorno

Las variables de entorno que se deben crear por ahora es el puerto por donde la aplicacion va a ser servida
