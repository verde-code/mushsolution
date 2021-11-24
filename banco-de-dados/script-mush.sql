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
email varchar (45),
senha varchar (45),
cargo varchar (45),
cpf varchar (45),
fk_Empresa int,
foreign key (fk_empresa) references Empresa(idEmpresa)
) auto_increment = 1000;




insert into Funcionario (nomeFuncionario, sobrenomeFuncionario, celular,email, senha, cargo, cpf, fk_Empresa)
values 
('Jorge', 'Silva', 11678905432, 'Jorge.silva@bandtec.com.br', '@B12345c', 'Gerente', '37087456787', 1),
('Renata', 'Souza', 11973300488,  'renata.melo@bandtec.com.br', 'Coco@3454','PO', 23456788903,2),
('Pedro', 'Nascimento', 11955223315,'pedro.nascimento@bandtec.com.br', 'cogubr@1111','Encarregado', 456788906453, 3),
('Mariana', 'Costa',119087645432, 'Mariana.costa@bandtec.com.br', '@D12345k' ,'Analista', 4567890675443, 4);

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
tipoSensor varchar(45),
fk_Estufa int,
foreign key (fk_Estufa) references Estufa(idEstufa)
) auto_increment = 3000;

insert into Sensor (tipoSensor, fk_Estufa)
values
('DHT11', 2000),
('DHT11',2001),
('DHT11',2002),
('DHT11',2003);

select * from Sensor;

create table Registro(
idRegistro int primary key auto_increment,
temperatura float,
umidade float,
tipoAlerta char(8),
check (tipoAlerta = 'Moderado' or tipoAlerta= 'Alto' or tipoAlerta = 'Critico'),
dataHora datetime,
fk_Sensor int,
foreign key (fk_Sensor) references Sensor(idSensor)
) auto_increment = 4000;

select * from Registro;

insert into  Registro( temperatura, umidade, tipoAlerta, dataHora, fk_Sensor)
values
('22.34','80', 'Alto', '2021-05-09 14:00', 3000),
('22.33','89', 'Alto', '2021-08-09 12:00',3001),
('24.55','88', 'Moderado', '2021-06-15 11:30',3002),
('30', '90', 'Critico', '2021-10-14 08:45',3003);


create table acesso (
idAcesso int primary key auto_increment,
fk_Estufa int,
foreign key (fk_Estufa) references Estufa(idEstufa),
fk_Funcionario int,
foreign key (fk_Funcionario) references Funcionario(idFuncionario),
dataHoraAcesso datetime,
tipoCargo varchar (45)) auto_increment 5000;

insert into  acesso(fk_Estufa ,fk_Funcionario , dataHoraAcesso, tipoCargo)
values
(2000,1000,  '2021-05-09 14:00', 'gerente'),
(2001,1001,  '2021-05-09 14:00', 'atendente'),
(2002,1002,  '2021-05-09 14:00', 'recepcionista'),
(2003,1003, '2021-05-09 14:00', 'gerente comercial');




select * from sensor
     left join Registro on fk_Sensor=idSensor;
     

select * from Estufa
    inner join Empresa on fk_Empresa=idEmpresa;
    
    
select * from Funcionario
     right join Empresa on fk_empresa=idEmpresa;
     
     
     
select * from Funcionario
         join Empresa on fk_empresa=idEmpresa
              where nomeEmpresa = 'maxmush';