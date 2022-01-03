## AWS Services

### Create an account in aws.amazon.com

### IAM - Create an IAM user (with programmatic access).
    * Anexar políticas existentes de forma direta
        * Selecione AmazonS3FullAccess
    * Salve o ID da chave de acesso (AWS_ACCESS_KEY_ID) e a Chave de acesso secreta (AWS_SECRET_ACCESS_KEY) em .env

### AWS S3 (STORAGE) - Create a new bucket
    * Habilite ACL
    * Desabilite "Bloquear todo o acesso público"

### AWS SDK
```
yarn add aws-sdk
```

### Create the Storage provider implementations for S3

--

### AWS SES (EMAIL SENDING) (MUST HAVE A DOMAIN AND EMAIL ADDRESS)
    * Domains > Verify a new domain
    * Email Address > Verify a new email address

    * IAM > Usuários > Adicionar permissão > AmazonSESFullAccess

### AWS EC2 (DEPLOY)
    * EC2 > Instâncias > Executar instâncias (somente nível gratuíto) > Ubuntu Server 20.04 LTS (64 bits x86) >
    * > t2.micro > Próximo (detalhes) (deixar padrão) > Adicionar armazenamento (padrão) > Adicionar Tags (padrão) > Security group (padrão - ssh :: TCP :: 22) > Verificar e ativar > Executar
    * Criar novo par de chaves (RSA) > defina um nome (ex: ignite-nodejs) > Download > Executar instâncias.
    * Edite o nome da instância (ex: ignite-nodejs)

    * chmod 400 ignite-nodejs.pem
    * Conectar > Cliente SSH > 
        - chmod 400 ignite-nodejs.pem
        - ssh -i ignite-nodejs.pem <user>@<host>

        * sudo adduser app (add password, then enter...)
        * sudo usermod -aG sudo app
        * sudo su - app
        * mkdir .ssh
        * chmod 700 .ssh/
        * cd .ssh/
        * touch authorized_keys
        * chmod 600 authorized_keys
        * vi authorized_keys
        
        * Outside SSH, create a rsa key pair in local machine
            - ssh-keygen
            - cat ~/.ssh/id_rsa.pub (copy)

        * Back in SSH connection, press i, then Ctrl + v.
        * Save and Exit: Ctrl + c > :wq! > Enter
        
        * Outide SSH, test SSH connection: ssh app@<Endereço IPv4 público>
        * Into SSH connection:
            * sudo apt update

            * Install Node.js
                * curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
                * sudo apt-get install -y nodejs

            * Install docker and docker-compose
                * sudo apt-get remove docker docker-e
ngine docker.io containerd runc
                * sudo apt-get install apt-transport-https ca-certificates curl gnupg lsb-release
                * curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
                * echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
                * sudo apt-get update
                * sudo apt-get install docker-ce docker-ce-cli containerd.io
                * sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
                * sudo chmod +x /usr/local/bin/docker-compose

            * Install yarn
                * sudo npm install --global yarn