# FitCrowd – Sistema de Gestão de Academia

> Plataforma completa para gerenciamento de alunos, treinos, instrutores e planos de treino.

O **FitCrowd** é um sistema full-stack desenvolvido para oferecer uma solução prática e simples de administração de academia. Este projeto foi criado como entrega acadêmica da disciplina de Ambiente de Dados.


<p align="center">
  <img src="assets/TelaInicial.png" alt="Tela inicial do sistema FitCrowd" width="900">
</p>

---

## Tecnologias Utilizadas
O sistema foi desenvolvido utilizando **React + Vite + TailwindCSS** no frontend e **Node.js + Express + MySQL** no backend, seguindo arquitetura em camadas para alta organização e manutenção.

 [![React][React.js]][React-url]
 [![Vite][Vite.js]][Vite-url]
[![TailwindCSS][Tailwind.css]][Tailwind-url]
 [![NodeJS][Node.js]][Node-url]
[![Express][Express.js]][Express-url]
 [![MySQL][MySQL.com]][MySQL-url]

### Bibliotecas principais:
- **Axios** — Cliente HTTP para consumir a API do backend
- **MySQL2** — Driver MySQL para Node.js, utilizado para todas as queries do sistema
- **CORS** — Middleware para habilitar comunicação entre frontend e backend
- **Dayjs** — Manipulação simplificada de datas e horários
---
## Pré-requisitos

Antes de iniciar o projeto, certifique-se de que o seu ambiente atende aos seguintes requisitos:

- **Node.js 18 ou superior**  
  Verifique sua versão com:
  ```
  node -v
  ```

- **NPM**
  ```
  npm -v
  ```
 - **Git instalado** (recomendado para clonar o repositório, mas você também pode apenas baixar o aquivo em formato .zip do projeto e abrir no seu editor de código)
- **VsCode** (ou outro editor de código de sua preferência)
- MySQL Server
- **MySQL Workbench**

  
> [!NOTE]  
> Para que o projeto funcione corretamente, também é necessário criar o banco de dados. Esse procedimento será explicado na próxima seção.
---
## Instalação e Execução do Projeto

Siga os passos abaixo para instalar, configurar e executar o sistema FitCrowd no seu computador.

### 1. Clonar o repositório

Abra o terminal (CMD, PowerShell ou Bash) e execute:

```
git clone https://github.com/abeatrizsm/ProjetoFitCrowdAcademia.git
```

Entre na pasta do projeto:

```
cd ProjetoFitCrowdAcademia
```
---


### 2. Configurar o Banco de Dados

> Certifique-se de que o MySQL Server está instalado e ativo.

1. Abra o **MySQL Workbench**
2. Vá até a pasta `/database` do projeto
3. Abra o arquivo `AV2_SQL_Completo.sql`
4. Execute todo o script no icone de raio, isso criará todas as tabelas necessárias e inserirá dados iniciais

---

### 3. Configurar o Backend
> Certifique-se de que o banco foi criado corretamente antes de iniciar o backend.

Entre na pasta do backend:

```
cd backend
```

Instale as dependências:

```
npm install
```

Altere as credencias no arquivo "db.js" que está na pasta config no backend. Configure com base no seu MySQL, mas na maioria dos casos, basta mudar o campo "password" para a sua senha.

```
const db = mysql2.createPool({
	host: "localhost",
	user: "root",
	password: "sua senha",
	database: "gestaoAcademia",
});
```

Inicie o servidor:

```
npm run dev
```

O backend rodará por padrão em:

```
http://localhost:3000
```

---

### 4. Configurar o Frontend

Em outro terminal, entre na pasta `frontend`:

```
cd frontend
```

Instale as dependências:

```
npm install
```

Inicie o frontend:

```
npm run dev
```

O frontend rodará por padrão em:

```
http://localhost:5173
```
Copie e cole esse endereço no navegador, ou aperte Ctrl + Click em cima do endereço no terminal.

> [!IMPORTANT]
> É necessário manter os dois terminais rodando simultaneamente, pois o frontend depende da API para funcionar. Então, certifique-se de que o backend continua ativo.
---
## Autora

Ana Beatriz Silveira Mendes
4º Semestre – Ciência da Computação  

---

## Licença

Projeto produzido exclusivamente para fins acadêmicos.

---

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

[Vite.js]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev/

[Tailwind.css]: https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white
[Tailwind-url]: https://tailwindcss.com/

[Node.js]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/

[Express.js]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/

[MySQL.com]: https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white
[MySQL-url]: https://www.mysql.com/


