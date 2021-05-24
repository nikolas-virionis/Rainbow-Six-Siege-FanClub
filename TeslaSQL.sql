CREATE DATABASE teslafanclub;
USE teslafanclub;
create table usuario (
	idUser int primary key auto_increment,
    nome varchar(45),
    username varchar(45),
    email varchar(60),
    senha varchar(16),
    carroFav int,
    anoNasc int,
    anoInicio int,
    foreign key(carroFav) references carros(idCarro)
);
create table carros (
	idCarro int primary key,
    nomeCarro varchar(45),
    aceleração0_100 decimal(4,2),
    aceleração400m decimal(5,2),
    vMax int,
    chargeRange int,
    peso decimal(7,2),
    potencia int
);
INSERT INTO carros VALUES 
(1, 'Model S', 1.99, 9.23, 320, 624, 2162, 1020),
(2, 'Model 3', 3.1, 11.6, 260, 504, 1844, 480),
(3, 'Model X', 2.5, 9.9, 261, 544, 2445, 1020),
(4, 'Model Y', 3.5, 12.4, 248, 485, 2003, 456),
(5, 'Roadster', 1.9, 8.8, 400, 1000, 1305, 1020),
(6, 'Semi', 20, null, 130, 810, 11340, 1000),
(7, 'Cybertruck', 4.5, 10.8, 200, 480, 2950, 800);
select * from carros;
insert into usuario values (null, 'fulano', 'fulano1', 'fulano@gmail.com', 'fulano123', 3, 2000, 2015);
select carroFav from usuario group by carroFav order by count(carroFav) desc;
select u.carroFav as fkCarro, count(u.carroFav) as qtdFks, c.nomeCarro from carros as c 
		inner join usuario as u 
		on u.carroFav = c.idCarro group by carroFav
        order by count(carroFav) desc;
select * from usuario;