### Happy

#### Front-end Web com ReactJS

- [x] 1.1. Apresentação do Projeto
- [x] 1.1.1. Comunidade no Discord
- [x] 1.2. Ambiente de desenvolvimento
- [x] 1.2.1. Nodejs - LTS v12.19: v12.18.3
- [x] 1.2.2. Gerenciador de pacotes - npm - LTS v7.0: v6.14.6
- [x] 1.2.3. Gerenciador de pacotes - yarn - LTS v1.22.0: v1.21.1
- [x] 1.3. Conceitos do back-end, front-end e api ?
- [x] 1.4. O que React e porque utilizar ?
- [x] 1.5. Porque vamos usar Typescript ?
- [x] 1.6. Criando um projeto com ReactJS
- [x] 1.6.1. yarn: `yarn create react-app web --template typescript`
- [x] 1.6.2. node: `npx create-react-app web --template typescript`
- [x] 1.6.3. Estrutura de pastas e arquivos iniciais
- [x] 1.6.4. startar o projeto:`yarn start` ou `npm start`
- [X] 1.7. Componentes, JSX e propriedades 
- [x] 1.8. Criando a landing page
- [x] 1.8.1. layout no Figma
- [x] 1.8.1.1. exportar imagens no formato .svg
- [x] 1.8.1.2. Google Fonts
- [x] 1.8.2. estrutura
- [x] 1.8.3. estilização
- [x] 1.8.3.1. global.css
- [x] 1.8.3.2. landing.css
- [x] 1.8.3.3. as medidas e posições podem ser consultadas no modelo do Figma
- [x] 1.8.3.4. pacote de icons: `yarn add react-icons`, FiArrowRight
- [x] 1.8.3.5. seis elementos na landing page 
- [x] 1.9. Trabalhando com rotas
- [x] 1.9.1. instalar react-router-dom: yarn add react-router-dom
- [x] 1.9.2. autocomplete: yarn add @types/react-router-dom -D
- [x] 1.9.3. BrowserRouter, Switch, Route 
- [x] 1.9.4. exact 
- [x] 1.9.5. SPA: fazer a transição de uma página para outra sem carregar a página inteira
- [x] 1.9.5.1. Link
- [x] 1.10. Página com mapa
- [x] 1.10.1. estrutura html
- [x] 1.10.2. estilização css
- [x] 1.10.3. funcionalidades
- [x] 1.10.3.1. biblioteca de mapas - leaflet: yarn add leaflet react-leaflet
- [x] 1.10.3.2. yarn add @types/react-leaflet -D
- [x] 1.10.3.3. colocar um map em tela
- [x] 1.10.4. Biblioteca de Mapa - Map
- [x] 1.10.4.1. Latitude e Longetude
- [x] 1.10.4.2. TileLayer - open street map 
- [x] 1.10.4.3. warning: o mapa carregou todo estranho
- [x] 1.10.4.3.1. correção: import 'leaflet/dist/leaflet.css'
- [x] 1.10.5. Outras bibliotecas de Map
- [x] 1.10.5.1. Google Maps
- [x] 1.10.5.2. Map Box
- [x] 1.10.5.2.1. token
- [x] 1.10.5.2.2. .env: variável ambiente para manter esse token reservado
- [x] 1.10.6. Warning: botão indo para baixo do mapa
- [x] 1.10.7. Warning: o mapa não estava funcionando com o Map Box. Solução: para funcionar, o arquivo .env deve estar na raiz do projeto e não na pasta src.

#### Back-end com NodeJS

- [x] 2.1. Criando projeto com Nodejs
- [x] 2.1.1. Pasta backend
- [x] 2.1.2. yarn init -y: `package.json`
- [x] 2.1.3. express: `yarn add express`
- [x] 2.1.4. .gitignore para `/node_modules`
- [x] 2.1.5. `src/server.ts`
- [x] 2.1.6. warning: instalar pacote de tipagem do express: `yarn add @types/express -D`
- [x] 2.1.7. instalar o typescript como dependência de desenvolvimento: `yarn add typescript -D`
- [x] 2.1.8. `yarn tsc --init`: tsconfig.json
- [x] 2.1.9. `yarn add ts-node-dev -D`: utilizar node e typescript no mesmo projeto
- [x] 2.1.10. criar scripts: yarn dev
````json
"scripts":{
    "dev":"ts-node-dev src/server.ts"
}
```` 
- [x] 2.1.11. hello world
- [x] 2.2. Rotas, parâmetros e métodos HTTP
- [x] 2.2.1. Rota = conjunto
- [x] 2.2.2. Recurso = usuário
- [x] 2.2.3. Métodos HTTP = GET, POST, PUT, DELETE
- [x] 2.2.4. Parâmetros
- [x] 2.2.4.1. Query Params
- [x] 2.2.4.2. Route Params - Identificar um recurso
- [x] 2.2.4.3. Body - Identificar um recurso
- [x] 2.2.5. Insomnia - next-level-week-3: para testar as requisições
- [x] 2.2.5.1. rodar o projeto: `npm run dev` ou `yarn dev`
- [x] 2.3. Configurando Banco de Dados
- [x] 2.3.1. typeorm: yarn add typeorm sqlite3
- [x] 2.3.2. sqlite3
- [x] 2.4. Criando tabelas no Banco de Dados
- [x] 2.4.1. Configurar Migrations: registro das alterações
- [x] 2.4.2. criar migrations: `yarn typeorm migration:create -n create_orphanages`
- [x] 2.4.3. executar migrations: `yarn typeorm migration:run`
- [x] 2.4.4. beekeeper studio: visualizar criação
- [x] 2.4.5. sqlite explorer: visualizar criação

- 2.5. Criando orfanato sem imagem
- 2.6. Abstraindo em controller 
- 2.7. Listando orfanatos 
- 2.8. Upload de imagens
- 2.9. Trabalhando com views
- 2.10. Detalhe do Orfanato
- 2.11. Lidando com excessões 
- 2.12. Validação de Dados

- cors: `npm install cors`
- multer: `npm install --save multer`
- yup: `npm install -S yup`

:. [Trilha Omnistack - Next Level Week - Rocketseat](https://rocketseat.com.br/)<br/>
:. [Douglas A B Novato](https://linktr.ee/douglasabnovato)