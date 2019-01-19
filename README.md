## Descrição
```sh
Esse projeto é uma simples demonstração para a criação de 4 microserviços
rodando em Docker e se comunicando por uma rede interna Docker.

Centralizei o start e config de todos os services em um único comando.
```

### dsesenho da arquitetuira construida

![arquitetura](arquitetura-atual.png =400x)

### Server1 database
- mongo

### Server2 amqp
- rabbitmq

### Server3 consumer
- NodeJs

### Server4 service
- NodeJs

### requisitos
docker
docker-compose

### run
docker-compose up &
