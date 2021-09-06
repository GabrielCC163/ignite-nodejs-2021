# RentalX API
<i>Rocketseat - Ignite - Node.js</i>

## Node.js API with TypeScript and Express.

### Concepts:
* ESLint, Prettier, Debug
* S.O.L.I.D
* Singleton
* File/image upload with Multer
* Swagger
* Docker & Docker-Compose
* TypeORM
* Dependency Injection with TSyringe
* Auth with JWT
* Tests, integração, unitário, funcional

### To learn
* Microsservices, Redis, RabbitMQ, Kafka, Kubernets, MongoDB, GraphQL, Nest.js
# Structure

src/
    modules/
        cars/
            models/
                ModelName.ts
                Specification.ts

            repositories/
                implementations/
                    CategoriesRepository.ts
                    SpecificationRepository.ts

                ICategoriesRepository.ts
                ISpecificationsRepository.ts

            services/

            useCases/
                createCategory/
                    CreateCategoryController.ts
                    CreateCategoryUseCase.ts
                    index.ts

                createSpecification/
                    CreateSpecificationController.ts
                    CreateSpecificationUseCase.ts
                    index.ts

                importCategory/
                    ImportCategoryController.ts
                    ImportCategoryUseCase.ts
                    index.ts
    routes/

    server.ts