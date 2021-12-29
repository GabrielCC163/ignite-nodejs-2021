## AWS Services

### Create an account in aws.amazon.com

### IAM - Create an IAM user (with programmatic access).
    * Anexar políticas existentes de forma direta
        * Selecione AmazonS3FullAccess
    * Salve o ID da chave de acesso (AWS_ACCESS_KEY_ID) e a Chave de acesso secreta (AWS_SECRET_ACCESS_KEY) em .env

### AWS S3 - Create a new bucket
    * Habilite ACL
    * Desabilite "Bloquear todo o acesso público"

### AWS SDK
```
yarn add aws-sdk
```

### Create the Storage provider implementations for S3

--

### AWS SES (MUST HAVE A DOMAIN AND EMAIL ADDRESS)
    * Domains > Verify a new domain
    * Email Address > Verify a new email address

    * IAM > Usuários > Adicionar permissão > AmazonSESFullAccess
