# Hacker News com VueJs

Aplicação cliente da API Hacker News Laravel 5 (<a href="https://github.com/saulobr88/hnl5">HNL5</a>). Consome os recursos News, Top, Best e Users da API.

Pode ser acessado aqui: <a href="https://hnvue.netlify.com/" target="_blank">https://hnvue.netlify.com/</a>

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

### Recursos usados
- vue-cli
- vue 2.5
- vue-router
- vue-resource

<hr>

## Usando com o Docker
Existe uma <a href="https://hub.docker.com/r/saulobr88/hnvue/" taget="_blank">imagem</a> desta aplicação no DockerHub, a mesma pode ser usada com o seguinte comando:

1 - O docker irá baixar a imagem caso ela não exista no Docker Host:

\# docker run -d --rm -p 8081:8080 saulobr88/hnvue:latest

## Usando com o Docker Compose
Para usar com o Docker Compose, basta subir a aplicação usando o arquivo 'docker-compose.yml' do repositório, ele sobe a API e a aplicação cliente:

1 - Iniciar o Swarm caso não já esteja ativado:

\# docker swarm init

2 - Executar o Deploy com o docker-compose, no exemplo usei o nome 'hnlab':

\# docker stack deploy -c docker-compose.yml hnlab

3 - O mapeamento das portas no Docker Host está da seguinte forma:

- Porta 8080 serve a Aplicação Laravel (Backend)
- Porta 8081 serve a aplicação VueJs (Frontend)

<hr>

## About VueJs

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


