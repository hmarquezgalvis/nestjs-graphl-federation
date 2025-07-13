# Proyecto de Microservicios con NestJS y GraphQL Federation

Este Monorepo contiene un proyecto de ejemplo de implementación de diferentes arquitecturas y patrones de desarrollo, con el objetivo de aprender y practicar el uso de NestJS, GraphQL y otras tecnologías modernas.

Entre las arquitecturas que se implementan en este monorepo, se incluyen:

- **Clean Architecture**: Un enfoque de diseño que separa las preocupaciones en capas, facilitando la mantenibilidad y escalabilidad del código.
- **Ports and Adapters**: Un patrón de diseño que aísla el núcleo de la aplicación de las dependencias externas, permitiendo una mayor flexibilidad y testabilidad.
- **Microservicios**: Implementación de servicios independientes que se comunican entre sí.
- **Patron Saga**: Un patrón para gestionar transacciones distribuidas y coordinar acciones entre microservicios.

Las tecnologias y librerias utilizados en este proyecto son:

- **TypeScript**: Un superconjunto de JavaScript que compila a JavaScript plano, proporcionando tipado estático y características modernas.
- **NestJS**: Un framework progresivo de Node.js para construir aplicaciones del lado del servidor eficientes y escalables.
- **NestJS: GraphQL**: Un módulo de NestJS que permite la creación de APIs GraphQL de manera sencilla y eficiente.
- **NestJS: GraphQL Federation**: Un enfoque para componer múltiples servicios GraphQL en un único grafo de datos, facilitando la creación de microservicios GraphQL.

Se decidio utilizar **PostgreSQL** como base de datos principal debido a su robustez y rendimiento, y **TypeORM** para interactuar con la base de datos de manera eficiente y tipada.

Para la autenticación y autorización, se utiliza **JWT (JSON Web Tokens)** junto con **JWK (JSON Web Key)** para la verificación de firmas. Además, se implementa **Redis** como un almacén de datos en memoria para mejorar el rendimiento y la escalabilidad.

Para la comunicacion entre microservicios, se utiliza **NATS** como un sistema de mensajería ligero y eficiente.

## Estructura de folders y archivos (generico)

```javascript
├── api
│   ├── apps
│   │   ├── <gateway>
│   │   │   ├── src
│   │   │   │   ├── config
│   │   │   │   │   └── environment.config.ts // configuraciones
│   │   │   │   ├── api.employees.controller.ts
│   │   │   │   ├── api.employees.module.ts
│   │   │   │   ├── api.employees.service.ts
│   │   │   │   ├── config
│   │   │   │   │   └── environment.config.ts
│   │   │   │   ├── graphql
│   │   │   │   │   ├── employee.resolver.ts
│   │   │   │   │   └── employee.service.ts
│   │   │   │   └── main.ts
│   │   └── api.users
│   │       ├── src
│   │       │   ├── api.users.controller.ts
│   │       │   ├── api.users.module.ts
│   │       │   ├── api.users.service.ts
│   │       │   ├── config
│   │       │   │   └── environment.config.ts
│   │       │   ├── graphql
│   │       │   │   ├── user.resolver.ts
│   │       │   │   └── user.service.ts
│   │       │   └── main.ts
│   ├── .env
│   ├── package.json
│   ├── tsconfig.json
│   └── tsconfig.build.json
├── docker-compose.yml
├── README.md
└── package.json
```