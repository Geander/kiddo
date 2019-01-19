#### Server3
```sh
Consumer para pegar as mensagens do rabbitmq e salvar no mongodb.
```
##### requisitos
```sh
docker
node
```
#### Run
##### Install dependencies
```sh
npm i
```
##### Run lint or fix lint
```sh
npm run lint
 or
npm run fix
```
##### Run tests
```sh
npm test
```
##### Run
```sh
npm start
```
##### Build and run docker image
```sh
docker build -t "consumer:0.0.1" .
docker run service:0.0.1
```
