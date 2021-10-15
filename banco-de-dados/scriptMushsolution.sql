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

insert into Empresa (nomeEmpresa, cnpj, senha, celular, email) 
values 
('maxmush', 12345678901234, '@A091234b', 11234567890, 'Maxmush@gmail.com'),
('CocoBambu', 35234534523412, 'Coco@123', 1156653434, 'cocobambu@gmail.com' ),
('Cogumelos BR', 45234123523453, 'Cogu!332', 1125304055, 'cogubr@hotmail.com' ),
('Cogumelo Chuang', 43456788990909, 'Chuang#2345', 11976543345, 'chuang@outlook.com');

select * from Empresa;

create table Funcionario(
idFuncionario int primary key auto_increment,
nomeFuncionario varchar(45),
sobrenomeFuncionario varchar(45),
celular varchar(45),
cargo varchar (45),
cpf varchar (45),
login varchar (45),
senha varchar (45),
fk_Empresa int,
foreign key (fk_empresa) references Empresa(idEmpresa)
) auto_increment = 1000;

insert into Funcionario (nomeFuncionario, sobrenomeFuncionario, celular, cargo, cpf, login, senha, fk_Empresa)
values 
('Jorge', 'Silva', 11678905432, 'Gerente', 56789754321, 'Jorge.silva@maxmush.com.br', '@B12345c', 1),
('Renata', 'Souza', 11973300488, 'PO', 23456788903, 'renata.melo@cocobambu.com', 'Coco@3454',2),
('Pedro', 'Nascimento', 11955223315, 456788906453,'Encarregado', 'pedro.nascimento@cogumelosbr.com', 'cogubr@1111',3),
('Mariana', 'Costa',119087645432, 'Analista', 4567890675443,'Mariana.costa@chuang.com', '@D12345k' , 4);

select * From Funcionario;

update Funcionario set cargo = 'Encarregado' where idFuncionario = 1002;

update Funcionario set cpf = '34567890987' where idFuncionario = 1002;

create table Estufa(
idEstufa int primary key auto_increment,
nomeEstufa varchar(45),
localEstufa varchar(45),
fk_Empresa int,
foreign key (fk_empresa) references Empresa(idEmpresa)
) auto_increment = 2000;

insert into Estufa (nomeEstufa, localEstufa, fk_Empresa)
values 
('A', 'Direita', 1),
('B','esquerda', 2),
('C','esquerda', 3),
('D','Sudoeste', 4);

select * from Estufa;

create table Sensor(
idSensor int primary key auto_increment,
nomeSensor varchar(45),
fk_Estufa int,
foreign key (fk_Estufa) references Estufa(idEstufa)
) auto_increment = 3000;

insert into Sensor (nomeSensor, fk_Estufa)
values
('A1', 2000),
('B3',2001),
('A2',2002),
('B4',2003);

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

insert into  Registro( temperatura, alerta, dataHora, fk_Sensor)
values
('22.34', 'Alto', '2021-05-09 14:00', 3004),
('22.33', 'Alto', '2021-08-09 12:00',3005),
('24.55', 'Moderado', '2021-06-15 11:30',3006),
('30', 'Critico', '2021-10-14 08:45',3007);

select * from Registro;