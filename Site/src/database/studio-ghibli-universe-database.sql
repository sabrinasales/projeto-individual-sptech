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
describe Usuario;

