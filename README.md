
# Prueba tecnica de backend para listoapp.cl

Desarrollar una API local básica utilizando las siguientes tecnologías: NestJS (Usa NodeJS) , MongoDB, TypeScript y GraphQL 

# Tareas
Crear repositorio en Github 

• Crear proyecto localmente usando el framework NestJS 

• Debe existir conexión a una base de datos utilizando MongoDB Atlas (Plan gratuito, no 
queremos que gastes tu dinero) 

• Dentro del proyecto se debe desarrollar los siguientes métodos para poder gestionar 
la información de una empresa (Los datos o atributos que manejes del modelo 
empresa es decisión tuya, se creativo): 

    o Query: lectura de datos de todas las empresas registradas en la BD. 

    o Query: lectura de datos de una empresa en particular (Debe recibir como 
    parámetro el _id de la empresa) 

    o Mutation: creación de empresa (Debe poder recibir como parámetros todos 
    aquellos atributos obligatorios y no obligatorios) 

    o Mutation: eliminar una empresa en particular (Debe poder recibir el _id de la 
    empresa) 
## Importante

Agregar una variable de entorno con el nombre de:

```bash
  .env.development.local
```
La variable de entorno se deberá ver de esta forma:

```bash
  MONGO_URI=mongodb+srv://username:password@hostname/database
```


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
