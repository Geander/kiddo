#### Server4
```sh
Api rest para exibir os registros do mongodb.
Com somente um endpoint GET que lista todos os registros.
```
##### requisitos
```sh
docker
nodeJS
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
#### Run tests
```sh
npm test
```
##### Run
```sh
npm start
```
##### Show in
```sh
http://localhost:8080/
```
### Build and run docker image
```sh
docker build -t "service:0.0.1" .
docker run service:0.0.1
```
