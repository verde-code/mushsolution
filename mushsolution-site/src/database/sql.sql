-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/* para sql server - remoto - produção */





/* para workbench - local - desenvolvimento */
-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'bandtec';
-- FLUSH PRIVILEGES;
-- Comando para resolver erro de acesso ao banco

create database Mushsolution;

use Mushsolution;

create table Empresa (
idEmpresa int primary key auto_increment,
nomeEmpresa varchar(45),
cnpj varchar(45),
senha varchar(45),
celular varchar(45),
email varchar (45)
);


create table Funcionario(
idFuncionario int primary key auto_increment,
nomeFuncionario varchar(45),
sobrenomeFuncionario varchar(45),
celular varchar(45),
cpf varchar (45) unique,
login varchar (45),
senha varchar (45),
fk_Empresa int,
foreign key (fk_empresa) references Empresa(idEmpresa)
) auto_increment = 1000;



create table Estufa(
idEstufa int primary key auto_increment,
nomeEstufa varchar(45),
localEstufa varchar(45),
fk_Empresa int,
foreign key (fk_empresa) references Empresa(idEmpresa)
) auto_increment = 2000;

select * from Estufa;

create table Sensor(
idSensor int primary key auto_increment,
nomeSensor varchar(45),
fk_Estufa int,
foreign key (fk_Estufa) references Estufa(idEstufa)
) auto_increment = 3000;


select * from Sensor;

create table Registro(
idRegistro int primary key auto_increment,
temperatura float,
alerta char(8),
check (alerta = 'Moderado' or alerta = 'Alto' or alerta = 'Critico'),
dataHora datetime,
fk_Sensor int,
foreign key (fk_Sensor) references Sensor(idSensor)
) auto_increment = 4000;
