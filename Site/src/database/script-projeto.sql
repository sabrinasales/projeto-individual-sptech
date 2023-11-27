-- Criando banco de dados do projeto UniverseGhibli
create database UniverseGhibli;
-- Selecionando banco de dados
use UniverseGhibli;

-- Criando tabela Usuario, de login e cadastro
create table Usuario (
idUsuario int primary key auto_increment,
nomeUsuario varchar(55),
email varchar(55),
senha varchar(55)
) auto_increment = 100;

-- Exibindo a tabela e sua estrutura
select * from Usuario;
select * from Pontuacao;
describe Usuario;

insert into Usuario values
(null, 'Sabrina', 'sabrina@admin.com', 'senha123');

create table Pontuacao (
idPontuacao int primary key auto_increment,
totalCorretas int,
totalIncorretas int,
fkUsuario int,
foreign key (fkUsuario) references Usuario (idUsuario)
);



SELECT idUsuario, nomeUsuario, email FROM Usuario WHERE email='chris.hamai@admin.com' AND senha ='senha123';


SELECT
  SUM(totalCorretas) AS total_pontos_corretos,
  SUM(totalIncorretas) AS total_pontos_incorretos
FROM
  Pontuacao
WHERE
 fkUsuario = 1;

