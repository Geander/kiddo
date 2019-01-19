### Descrição
```sh
Esse projeto é uma simples demonstração para a criação de 4 microserviços
rodando em Docker e se comunicando por uma rede interna Docker.

Centralizei o start e config de todos os services em um único comando.
```

#### Desenho da arquitetuira construida
![arquitetura](arquitetura-atual.png)

#### Server1 database
```sh
mongo
```
#### Server2 amqp
```sh
rabbitmq
```
#### Server3 consumer
```sh
NodeJs
```
#### Server4 service
```sh
NodeJs
```

#### requisitos
```sh
docker
docker-compose
```

#### run
```sh
docker-compose up &
```
