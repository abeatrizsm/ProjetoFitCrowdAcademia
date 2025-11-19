# FitCrowd – Sistema de Gestão de Academia

Projeto full-stack para gerenciamento de alunos, instrutores, treinos e planos de treino.
Desenvolvido utilizando React (Vite + TailwindCSS) no frontend e Node.js + Express + MySQL no backend.

Este projeto foi criado como entrega acadêmica da disciplina de Ambiente de Dados.

---

## Arquitetura do Projeto

```
AplicativoAcademia/
│
├── backend/
│   ├── config/
│   ├── controller/
│   ├── service/
│   ├── dao/
│   ├── routes/
│   ├── app.js
│   ├── package.json
│   └── node_modules/
│
└── frontend/
    ├── src/
    │   ├── pages/
    │   ├── components/
    │   ├── services/
    │   ├── assets/
    │   └── App.jsx
    ├── index.html
    ├── package.json
    └── node_modules/
```


---

## Tecnologias Utilizadas

### Frontend
- React
- Vite
- TailwindCSS
- React Router
- React Icons

### Backend
- Node.js
- Express
- MySQL2
- Arquitetura em camadas (Routes, Controller, Service, DAO)

### Banco de Dados
- MySQL

---

## Modelagem das Tabelas

### alunos
- id_aluno
- nome
- cpf
- data_ingresso
- telefone
- email
- senha
- dias_ativos
- treinos_concluidos

### instrutores
- id_instrutor
- nome
- especialidade
- email
- senha

### plano_treino
- id_plano
- nome_plano
- objetivo
- duracao_semanas
- nivel
- frequencia_semanal
- id_aluno (FK)
- id_instrutor (FK)

---

## Relacionamentos

- Instrutor elabora plano de treino
- Aluno possui plano de treino
- Plano de treino é composto por treinos
- Treinos são compostos por exercícios

---

## Execução do Backend
Primeiro você deve alterar as credencias no arquivo "db.js" que está na pasta config no backend. Configure com base no seu MySQL, mas na maioria dos casos, basta mudar o campo "password" para a sua senha.

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
npm run dev
```



---

## Execução do Frontend



---

## Endpoints

### Alunos
- GET /alunos
- POST /alunos
- PUT /alunos/:id
- DELETE /alunos/:id

### Instrutores
- GET /instrutores
- POST /instrutores

### Planos de Treino
- GET /planos
- POST /planos
- GET /planos/:id

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


