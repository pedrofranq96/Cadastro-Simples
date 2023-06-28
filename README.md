# Documentação do App de Cadastro Simples

Este documento fornece uma visão geral e um guia passo a passo para instalar o aplicativo de cadastro simples, desenvolvido com as tecnologias Next.js, React, Firebase e Tailwind CSS.

## Visão Geral

O aplicativo de cadastro simples permite que os usuários insiram informações básicas, como nome, idade, telefone e email. As informações são armazenadas no banco de dados Firebase e podem ser exibidas em uma tabela na página principal do aplicativo.

## Requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina antes de prosseguir:

- Node.js (versão 12 ou superior)
- npm (gerenciador de pacotes do Node.js)

## Passo a Passo de Instalação

Siga as etapas abaixo para instalar e executar o aplicativo de cadastro simples em sua máquina:

1. Clone o repositório do projeto:
   ```
   git clone <URL do repositório>
   ```

2. Acesse o diretório do projeto:
   ```
   cd <nome do diretório>
   ```

3. Instale as dependências do projeto utilizando o npm:
   ```
   npm install
   ```

4. Crie uma conta no Firebase (https://firebase.google.com) e crie um novo projeto.

5. Crie um arquivo chamado `config.ts` na pasta `firebase` e adicione as informações de configuração do seu projeto Firebase. O arquivo `config.ts` deve ter a seguinte estrutura:
   ```typescript
   export const firebaseConfig = {
     // Configurações do Firebase (obtidas no console do Firebase)
   };
   ```

6. Crie uma coleção chamada "ColecaoCliente" no Firestore do Firebase.

7. Volte ao terminal e execute o comando para iniciar o aplicativo:
   ```
   npm run dev
   ```

8. Acesse o aplicativo no seu navegador em `http://localhost:3000`.

Parabéns! Você instalou e iniciou o aplicativo de cadastro simples com sucesso. Agora você pode usar o aplicativo para cadastrar, exibir, alterar e excluir clientes.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte maneira:

- `src`: Pasta raiz do projeto.
  - `components`: Contém todos os componentes usados para montar a aplicação.
  - `core`: Contém o arquivo `Cliente.ts`, que representa a camada modelo do cliente, e a interface `ClienteRepositorio`, que contém os métodos implementados para interagir com o banco de dados.
  - `firebase`: Contém a pasta `db` com a lógica para salvar no banco de dados e o arquivo `config.ts`, que armazena a chave e conexão do Firebase.
  - `hooks`: Contém hooks personalizados utilizados na aplicação.
    - `useClientes`: Contém a lógica relacionada para salvar, exibir, alterar e excluir clientes, utilizada na tela principal (`index.tsx`).
    - `useTabelaOuForm`: Contém a lógica de rota para exibir a tela de cadastro ou a tabela de contatos adicionados.
  - `pages`: Contém a página principal (`index.tsx`), onde são renderizados os componentes.

## Conclusão

O aplicativo de cadastro simples é uma demonstração básica de um projeto utilizando as tecnologias Next.js, React, Firebase e Tailwind CSS. Você pode personalizar e estender o aplicativo de acordo com suas necessidades, adicionando recursos adicionais, melhorias na interface do usuário e validações de formulário, por exemplo.

Divirta-se explorando e aprimorando o aplicativo de cadastro simples!
