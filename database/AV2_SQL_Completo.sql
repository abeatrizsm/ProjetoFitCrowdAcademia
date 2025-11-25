-- BANCO DE DADOS: GESTÃO DE ACADEMIA
create database gestaoAcademia;
-- drop database gestaoAcademia;
use gestaoAcademia;

-- TABELA: alunos
create table alunos(
	id_aluno int auto_increment primary key,
	nome varchar(100),
	cpf char(11) unique,
	data_ingresso date,
    telefone varchar(11),
    email varchar(100) unique,
	senha varchar(20),
    dias_ativos int,
    treinos_concluidos int
);


update alunos set email = "email" , telefone = "telefone" where email = "ana";
-- TABELA: instrutores
create table instrutores(
	id_instrutor int auto_increment primary key,
	nome varchar(100),
	especialidade varchar(50),
    email varchar(100) unique,
	senha varchar(20)
);

-- TABELA: plano_treino
create table plano_treino(
	id_plano int auto_increment primary key,
	nome_plano varchar(100),
	objetivo varchar(100),
	duracao_semanas int,
    nivel varchar(20),
    frequencia_semanal int,
	id_aluno int,
	id_instrutor int,
	constraint fk_aluno foreign key (id_aluno) references alunos(id_aluno) on delete cascade,
	constraint fk_instrutor foreign key (id_instrutor) references instrutores(id_instrutor) on delete set null
);

-- TABELA: treinos (A, B, C...)
create table treinos(
	id_treino int auto_increment primary key,
	nome_treino varchar(50), 
	descricao varchar(150),
    dia_semana varchar(20),
	id_plano int,
	constraint fk_plano foreign key (id_plano) references plano_treino(id_plano) on delete cascade
);

-- TABELA: exercicios
create table exercicios(
	id_exercicio int auto_increment primary key,
	nome varchar(80),
	grupo_muscular varchar(50),
	repeticoes int,
	series int
);

-- TABELA ASSOCIATIVA: treinos_exercicios
create table treinos_exercicios(
	id_treino int,
	id_exercicio int,
	ordem int,
	primary key (id_treino, id_exercicio),
	constraint fk_treino_ex foreign key (id_treino) references treinos(id_treino) on delete cascade,
    -- NÃO apagar exercícios ao apagar um treino
	constraint fk_exercicio_treino foreign key (id_exercicio) references exercicios(id_exercicio) on delete restrict
);

-- TABELA: frequencia
create table frequencia(
	id_frequencia int auto_increment primary key,
	data_aula datetime,
	presenca varchar(10),
	id_aluno int,
	constraint fk_frequencia_aluno foreign key (id_aluno) references alunos(id_aluno) on delete cascade
);

insert into alunos (nome, email, cpf, data_ingresso, telefone, senha, dias_ativos, treinos_concluidos) values
('Lucas Almeida', 'lucas.almeida@email.com', '12345678901', '2023-02-15', '85999990001', 'lucas123', 120, 45),
('Mariana Santos', 'mariana.santos@email.com', '23456789012', '2023-03-10', '85999990002', 'mariana123', 90, 30);

-- INSTRUTORES
insert into instrutores (nome, email, especialidade, senha) values
('Carlos Pereira', 'carlos.pereira@academia.com', 'Musculação', 'carlos123'),
('Juliana Costa', 'juliana.costa@academia.com', 'Funcional', 'juliana123');

-- PLANOS DE TREINO (agora com nivel e frequencia)
insert into plano_treino (nome_plano, objetivo, duracao_semanas, nivel, frequencia_semanal, id_aluno, id_instrutor) values
('Hipertrofia 2024', 'Ganho de massa muscular', 12, 'Intermediário', 4, 1, 1),
('Condicionamento Feminino', 'Tonificação e resistência', 10, 'Iniciante', 2, 2, 2);

-- TREINOS (agora com dia_semana)
insert into treinos (nome_treino, descricao, dia_semana, id_plano) values
('Treino A - Pernas', 'Enfase em quadríceps e glúteos', 'Segunda', 1),
('Treino B - Peito e Tríceps', 'Fortalecimento superior', 'Terça', 1),
('Treino C - Costas e Bíceps', 'Dorsal e puxadas', 'Quinta', 1),
('Treino D - Ombros e Abdômen', 'Estabilização e força', 'Sexta', 1),
('Treino A - Inferior', 'Pernas e glúteos', 'Segunda', 2),
('Treino B - Superior', 'Braços e costas', 'Quarta', 2);

-- EXERCÍCIOS
insert into exercicios (nome, grupo_muscular, repeticoes, series) values
('Leg Press 45º', 'Pernas', 12, 4),
('Cadeira Extensora', 'Pernas', 15, 3),
('Cadeira Abdutora', 'Glúteos', 15, 3),
('Elevação Pélvica com Barra', 'Glúteos', 12, 4),
('Panturrilha Sentado', 'Panturrilha', 20, 4),
('Supino Reto com Barra', 'Peito', 10, 4),
('Supino Inclinado com Halteres', 'Peito', 10, 3),
('Tríceps Corda', 'Tríceps', 12, 3),
('Crucifixo Máquina', 'Peito', 12, 3),
('Rosca Direta com Barra', 'Bíceps', 10, 3),
('Puxada Alta', 'Costas', 12, 4),
('Remada Curvada', 'Costas', 10, 3),
('Desenvolvimento com Halteres', 'Ombros', 12, 3),
('Elevação Lateral', 'Ombros', 15, 3),
('Abdominal Supra', 'Abdômen', 20, 3);

-- ASSOCIAÇÕES TREINO ↔ EXERCÍCIO
insert into treinos_exercicios values
(1, 1, 1),
(1, 2, 2),
(1, 3, 3),
(1, 4, 4),
(1, 5, 5),
(2, 6, 1),
(2, 7, 2),
(2, 9, 3),
(2, 8, 4),
(3, 11, 1),
(3, 12, 2),
(3, 10, 3),
(4, 13, 1),
(4, 14, 2),
(4, 15, 3),
(5, 1, 1),
(5, 3, 2),
(5, 4, 3),
(5, 5, 4),
(6, 6, 1),
(6, 7, 2),
(6, 10, 3),
(6, 11, 4);

-- FREQUÊNCIA
insert into frequencia (data_aula, presenca, id_aluno) values
('2024-03-01', 'Presente', 1),
('2024-03-03', 'Faltou', 1),
('2024-03-02', 'Presente', 2),
('2024-03-04', 'Presente', 2);

-- CONSULTAS:

-- lista todos os alunos
select * from alunos;

-- lista todas as frequências
select * from frequencia;

-- lista todos os planos de treino
select * from plano_treino;

-- lista todos os treinos
select * from treinos;

-- lista todos os exercícios
select * from exercicios;
-- lista todos os planos com aluno e instrutor
select p.nome_plano, p.objetivo, a.nome as aluno, i.nome as instrutor from plano_treino p join alunos a on a.id_aluno = p.id_aluno join instrutores i on i.id_instrutor = p.id_instrutor;

-- lista treinos de um plano específico
select t.id_treino, t.nome_treino, t.descricao from treinos t join plano_treino p on p.id_plano = t.id_plano where p.id_plano = 1;

-- lista exercícios de um treino na ordem correta
select t.nome_treino, e.nome as exercicio, e.grupo_muscular, e.series, e.repeticoes from treinos_exercicios te join treinos t on t.id_treino = te.id_treino join exercicios e on e.id_exercicio = te.id_exercicio where t.id_treino = 7 order by te.ordem;

-- lista frequência dos alunos
select a.nome, f.data_aula, f.presenca from frequencia f join alunos a on a.id_aluno = f.id_aluno order by a.nome, f.data_aula;

-- lista todos os treinos com o nome do plano correspondente
select t.nome_treino, p.nome_plano from treinos t join plano_treino p on p.id_plano = t.id_plano;

-- lista todos os exercícios agrupados por grupo muscular
select grupo_muscular, count(*) as total from exercicios group by grupo_muscular;


-- lista todos os alunos ordenados pelos dias ativos (mais ativos primeiro)
select nome, dias_ativos from alunos order by dias_ativos desc;

-- lista todos os alunos ordenados pelos treinos concluídos (ranking)
select nome, treinos_concluidos from alunos order by treinos_concluidos desc;

-- mostra o plano completo de um aluno (plano + treinos + exercícios)
select a.nome as aluno, p.nome_plano, t.nome_treino, e.nome as exercicio from alunos a join plano_treino p on p.id_aluno = a.id_aluno join treinos t on t.id_plano = p.id_plano join treinos_exercicios te on te.id_treino = t.id_treino join exercicios e on e.id_exercicio = te.id_exercicio where a.id_aluno = 1;

-- lista todas as frequências de um aluno específico ordenadas da mais recente para a mais antiga
select f.data_aula, f.presenca from frequencia f join alunos a on a.id_aluno = f.id_aluno where a.id_aluno = 1 order by f.data_aula desc;

