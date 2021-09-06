# Rocketseat - Ignite - Node.js
## Desafio 6 - TypeORM

### Conceitos
* TypeORM
* TypeScript
* Testes de repositório
* <i>Many-to-many relations</i>

### Criação e inicialização do banco de dados
```bash
docker run --name ignite-challenge-database-queries -e POSTGRES_DB=queries_challenge -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

### Reinicialização ou encerramento da execução do container do banco de dados
```bash
docker start ignite-challenge-database-queries
```

```bash
docker stop ignite-challenge-database-queries
```