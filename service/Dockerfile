FROM node:10.13-alpine
ENV NODE_PATH="./src"
WORKDIR /src
COPY . /src

RUN apk update && \
    apk add python make && \
    rm -rf /var/cache/apk/* && \
    npm install --only=prod

EXPOSE 8080
ENTRYPOINT ["node", "src/app.js"]
