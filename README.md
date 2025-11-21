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

# FitCrowd – Sistema de Gestão de Academia

Projeto full-stack para gerenciamento de alunos, instrutores, treinos e planos de treino.
Desenvolvido utilizando React (Vite + TailwindCSS) no frontend e Node.js + Express + MySQL no backend.

Este projeto foi criado como entrega acadêmica da disciplina de Ambiente de Dados.


## Tecnologias Utilizadas

### Frontend
* [![React][React.js]][React-url]
* [![Vite][Vite.js]][Vite-url]
* [![TailwindCSS][Tailwind.css]][Tailwind-url]
 ### Backend
* [![NodeJS][Node.js]][Node-url]
* [![Express][Express.js]][Express-url]
 ### Banco de Dados
* [![MySQL][MySQL.com]][MySQL-url]
---

## Execução do Backend
> [!NOTE]
> Primeiro você deve alterar as credencias no arquivo "db.js" que está na pasta config no backend. Configure com base no seu MySQL, mas na maioria dos casos, basta mudar o campo "password" para a sua senha.

```
const db = mysql2.createPool({
	host: "localhost",
	user: "root",
	password: "sua senha",
	database: "gestaoAcademia",
});
```
Em seguida abra o terminal e rode: 
```
cd backend
npm install
node app.js
```

---

## Execução do Frontend
Abra outro terminal, sem fechar o do backend, e rode: 

```
cd View
cd FitCrowd
npm install
npm run dev
```
> [!IMPORTANT]
> É necessário manter os dois terminais rodando simultaneamente para que o front e o back funcionem em conjunto.

---

## Arquitetura do Backend
Route → Controller → Service → DAO → MySQL


---

## Autora

Ana Beatriz Silveira Mendes
4º Semestre – Ciência da Computação  

---

## Licença

Projeto produzido exclusivamente para fins acadêmicos.


