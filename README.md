# Gamer Store - Cod3r

Este é um projeto de estudo desenvolvido como parte do curso da Cod3r, focado no desenvolvimento full stack utilizando diversas tecnologias modernas, incluindo React, Next.js, Nest.js, PostgreSQL, Prisma, Turbo Build e Tailwind CSS. A aplicação simula uma loja de games, oferecendo funcionalidades de e-commerce e gerência de produtos.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário, especialmente SPAs (Single Page Applications).
- **Next.js**: Framework React que oferece renderização híbrida, rotas simplificadas e otimização automática.
- **Nest.js**: Framework de back-end para Node.js que utiliza TypeScript, focado em escalabilidade e arquitetura modular.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional (RDBMS) robusto e open-source.
- **Prisma**: ORM moderno que facilita o trabalho com bancos de dados relacionais em Node.js e TypeScript.
- **Turbo Build**: Ferramenta para construir rapidamente aplicações monorepo, permitindo o uso eficiente de pacotes e módulos.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e responsiva.

## Funcionalidades

- Listagem de produtos 
- Detalhes de produtos
- Carrinho de compras // pendente
- Autenticação de usuários // pendente
- Painel de administração para gerência de produtos // pendente
- Integração com PostgreSQL para armazenamento de dados
- Renderização no lado do servidor (SSR) e no lado do cliente (CSR) com Next.js

## Estrutura do Projeto

A estrutura do projeto segue um modelo monorepo, aproveitando o **Turbo Build** para a divisão e gestão eficiente dos pacotes front-end e back-end.

### Front-end (React/Next.js)

O front-end da aplicação é construído com **Next.js** e **React**, utilizando **Tailwind CSS** para a estilização da interface. O front-end consome a API criada com **Nest.js** para exibir informações dos produtos e realizar ações de usuários, como adicionar itens ao carrinho e gerenciar pedidos.

### Back-end (Nest.js)

O back-end foi desenvolvido utilizando **Nest.js**, que fornece uma arquitetura modular e escalável. A API criada é responsável por gerenciar os produtos, usuários e pedidos da aplicação. **Prisma** é utilizado como ORM para gerenciar as interações com o banco de dados **PostgreSQL**, facilitando as consultas e migrações.

### Banco de Dados (PostgreSQL)

O banco de dados PostgreSQL armazena os produtos, informações de usuários e pedidos. **Prisma** é utilizado como ORM para gerenciar o esquema do banco de dados e realizar operações de leitura/escrita de forma eficiente e segura.

## Como Rodar o Projeto

### Pré-requisitos

- **Node.js** (>= 14.x)
- **PostgreSQL**
- **Yarn** ou **npm**

### Passos para Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/eridanvilas/gamer-store-cod3r.git
   
2. Instale as dependências do projeto:
    
  Copiar código
    ``` bash
      cd gamer-store-cod3r
      yarn install
      # ou
      npm install

3. Configure o banco de dados:
Crie um banco de dados no PostgreSQL.
Adicione as variáveis de ambiente necessárias (como conexão do banco de dados) no arquivo .env. O arquivo .env.example pode ser utilizado como referência.

4. Execute as migrações do banco de dados com Prisma:
    ``` bash
   npx prisma migrate dev
5. Inicie o servidor de desenvolvimento:
   ``` bash
    npm rum dev
6. Acesse a aplicação:
  Acesse o aplicativo no navegador através da URL: http://localhost:3000.


Scripts Disponíveis
  npm run dev: Inicia o servidor de desenvolvimento.
  npm run build: Constrói a aplicação para produção.
  npm start: Inicia o servidor em modo de produção.
  npx prisma migrate dev: Executa as migrações no banco de dados utilizando Prisma.
