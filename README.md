### Descrição
```sh
Esse projeto é uma simples demonstração para a criação de 4 microserviços
rodando em Docker e se comunicando por uma rede interna Docker.

Para o teste ficar mais fácil coloquei tudo em 1 repositório e
centralizei o start e config de todos os services em um único comando
(vide o tópico 'run' abaixo).

Preparado para receber mensagens JSON com os parametros 'name' e 'wikipedia_url'.

Os serviços sobem automaticamente se houver alguma falha.

Além dos 4 servers solicitados estou também enviando um app que lê o csv e
coloca as mensagens na fila.

Cada server também contém seu próprio readme com instruções de testes.

No csv está faltando uma url, esse registro não passa na validação.
```
#### Desenho da arquitetuira construida
![arquitetura](arquitetura-atual.png)
#### Server1 database
```sh
banco de dados para guardar as mensagens recebidas.
- docker
- mongodb
- ip interno: 172.28.2.1
```
#### Server2 amqp
```sh
fila para receber as mensagens.
- docker
- rabbitmq
- ip interno: 172.28.2.2
- user 'guest'
```
#### Server3 consumer
```sh
job para ler mensagens do rabbitmq e guardar no mongo.
- docker
- nodeJs
- ip interno: 172.28.2.3
- testes unitátios
- vide readme do consumer
```
#### Server4 service
```sh
api rest para exibir os registros do mongodb.
- docker
- nodeJs
- ip interno: 172.28.2.4
- ip externo: http://127.0.0.1:8080/
- helmet com filtro xss
- testes unitátios
- vide readme do service
```
#### Pré requisitos
```sh
docker
docker-compose
```
#### Run
```sh
docker-compose up &
```
### curl para enviar mensagens para fila
```sh
curl -u guest:guest -H "content-type:application/json" -X POST -d'{"properties":{"delivery_mode":2},"routing_key":"languages","payload":"{\"name\": \"ABAP\", \"wikipedia_url\": \"https://en.wikipedia.org/wiki/ABAP/\"}","payload_encoding":"string"}' http://localhost:15672/api/exchanges/%2f/amq.default/publish
```
### Acessar a api
```sh
http://127.0.0.1:8080/
```
### Proposta infra aws
```sh
Também estou enviando uma proposta de infra aws
```
![arquitetura](arquitetura-aws.png)
### Futuras melhorias (Não deu tempo pra fazer)
```sh
- Adicionar 'healthcheck' do docker pra esperar um serviço
  subir antes de subir o outro.
- Criar o AWS CloudFormation.
- Colocar TypeScript e classes.
- Testar em outros ambientes, só testei no Ubuntu.
- Usar mensagens em trânsito.
- Usar várias filas e vários consumidores.
- Dividir filas em diferentes núcleos.
- Desativar acks manuais.
```
