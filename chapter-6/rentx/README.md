# RentalX API

<i>Rocketseat - Ignite - Node.js</i>

## Node.js API with TypeScript and Express.

## Start

```
docker-compose up

yarn typeorm migration:run

yarn seed:admin
```

## Test

```
docker-compose up

yarn typeorm migration:run

create a database rentx_test

yarn test
```

## Session

**Login**

- POST /sessions
  - token (use into requests)
  - refresh_token (use within next request when token expires)

**Generate new token**

- POST /refresh-token
  - token (use in requests)
  - refresh_token (use next time token is expires)

### Concepts:

- ESLint, Prettier, Debug
- S.O.L.I.D
- Singleton
- File (csv) / image upload with Multer
- Swagger
- Docker & Docker-Compose
- TypeORM
- Dependency Injection with TSyringe
- Auth with JWT
- Password reset (in dev with Ethereal Email)
- Unit tests and integration tests (Jest, Supertest)
- TDD
- Day.js
- Mappers (class transformer)
- AWS S3 (file storage service)
- AWS SES (email sending service - MUST HAVE A DOMAIN AND EMAIL ADDRESS)
- AWS EC2 (deploy service)