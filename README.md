# node-code-verifier-backend

Node Express project - backend

Dependencias instalas:
dotenv:16.0.1 permite crear un archivo .env que cargara en process.env como nuestras variables de entorno 
express: 4.18 express es un framework para node.Proporciona mecanismos para escribir manejadores de peticiones con diferentes verbos http en diferentes rutas.
@types/express es express adaptado para utilizarlo con typescript. Lo mismo con los @types.
ts jest y ts node son para utilizar node y jest con js.
nodemo es una herramienta para correr nuestro servidor
eslint es una herraminta de analisis de codigo, usaremos la standar
serve nos ayuda a ver nuestros archivos
webpack es un empaquetador de modulos 
jest es un marco de prueba
concurrently sirve para poder usar varios comando a la vez en el package.json


npm init -y (crea el package.json)

npm i express dotenv 

npm i -D nodemon
npm i -D trpescript @types/express @types/node
npx tsc --init (crea el tsconfig.json)
npm i -D concurrently 
npm i -D webpack webpack-cli webpack-node-externals webpack-shell-plugin
npm i -D eslint jest ts-jest @types/jest supertest
npx eslint --init