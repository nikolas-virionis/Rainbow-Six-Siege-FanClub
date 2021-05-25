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
delete from usuario where idUser <> 1;
insert into usuario values (null, 'fulano', 'fulano1', 'fulano@gmail.com', 'fulano123', 3, 2000, 2015);
select carroFav from usuario group by carroFav order by count(carroFav) desc;
select u.carroFav as fkCarro, count(u.carroFav) as qtdFks, c.nomeCarro from carros as c 
		inner join usuario as u 
		on u.carroFav = c.idCarro group by carroFav
        order by count(carroFav) desc;
select * from usuario;
truncate table usuario;
insert into usuario values 
(null, 'Nikolas', 'Nikolas', 'nikolas.virionis@gmail.com', 'Z4x6d000', 1, 2003, 2018),
(null, 'Jorge', 'Jorge', 'nikolas.virionis@gmail.com', 'Z4x6d000', 6, 2003, 2018),
(null, 'Jonas', 'Jonas', 'nikolas.virionis@gmail.com', 'Z4x6d000', 7, 2003, 2018),
(null, 'Fernando', 'Fernando', 'nikolas.virionis@gmail.com', 'Z4x6d000', 4, 2003, 2018),
(null, 'Fernanda', 'Fernanda', 'nikolas.virionis@gmail.com', 'Z4x6d000', 2, 2003, 2018),
(null, 'Renata', 'Renata', 'nikolas.virionis@gmail.com', 'Z4x6d000', 3, 2003, 2018),
(null, 'Roberta', 'Roberta', 'nikolas.virionis@gmail.com', 'Z4x6d000', 4, 2003, 2018),
(null, 'Renato', 'Renato', 'nikolas.virionis@gmail.com', 'Z4x6d000', 6, 2003, 2018),
(null, 'Tiago', 'Tiago', 'nikolas.virionis@gmail.com', 'Z4x6d000', 4, 2003, 2018),
(null, 'Flavia', 'Flavia', 'nikolas.virionis@gmail.com', 'Z4x6d000', 6, 2003, 2018),
(null, 'Flavio', 'Flavio', 'nikolas.virionis@gmail.com', 'Z4x6d000', 4, 2003, 2018),
(null, 'Fabio', 'Fabio', 'nikolas.virionis@gmail.com', 'Z4x6d000', 2, 2003, 2018),
(null, 'Guilerme', 'Guilerme', 'nikolas.virionis@gmail.com', 'Z4x6d000', 7, 2003, 2018),
(null, 'Roberto', 'Roberto', 'nikolas.virionis@gmail.com', 'Z4x6d000', 6, 2003, 2018),
(null, 'Robson', 'Robson', 'nikolas.virionis@gmail.com', 'Z4x6d000', 7, 2003, 2018),
(null, 'Roger', 'Roger', 'nikolas.virionis@gmail.com', 'Z4x6d000', 5, 2003, 2018),
(null, 'Regina', 'Regina', 'nikolas.virionis@gmail.com', 'Z4x6d000', 6, 2003, 2018),
(null, 'Amanda', 'Amanda', 'nikolas.virionis@gmail.com', 'Z4x6d000', 3, 2003, 2018),
(null, 'Alice', 'Alice', 'nikolas.virionis@gmail.com', 'Z4x6d000', 6, 2003, 2018),
(null, 'Augusto', 'Augusto', 'nikolas.virionis@gmail.com', 'Z4x6d000', 5, 2003, 2018),
(null, 'Leonardo', 'Leonardo', 'nikolas.virionis@gmail.com', 'Z4x6d000', 2, 2003, 2018),
(null, 'Vitor', 'Vitor', 'nikolas.virionis@gmail.com', 'Z4x6d000', 1, 2003, 2018),
(null, 'Igor', 'Igor', 'nikolas.virionis@gmail.com', 'Z4x6d000', 7, 2003, 2018),
(null, 'Eduardo', 'Eduardo', 'nikolas.virionis@gmail.com', 'Z4x6d000', 3, 2003, 2018),
(null, 'Isabela', 'Isabela', 'nikolas.virionis@gmail.com', 'Z4x6d000', 3, 2003, 2018),
(null, 'Luiza', 'Luiza', 'nikolas.virionis@gmail.com', 'Z4x6d000', 6, 2003, 2018),
(null, 'Laura', 'Laura', 'nikolas.virionis@gmail.com', 'Z4x6d000', 2, 2003, 2018),
(null, 'Lara', 'Lara', 'nikolas.virionis@gmail.com', 'Z4x6d000', 5, 2003, 2018),
(null, 'Luis', 'Luis', 'nikolas.virionis@gmail.com', 'Z4x6d000', 7, 2003, 2018),
(null, 'Luisa', 'Luisa', 'nikolas.virionis@gmail.com', 'Z4x6d000', 7, 2003, 2018),
(null, 'Nicolle', 'Nicolle', 'nikolas.virionis@gmail.com', 'Z4x6d000', 5, 2003, 2018),
(null, 'Nathan', 'Nathan', 'nikolas.virionis@gmail.com', 'Z4x6d000', 6, 2003, 2018),
(null, 'Olivia', 'Olivia', 'nikolas.virionis@gmail.com', 'Z4x6d000', 2, 2003, 2018),
(null, 'José', 'José', 'nikolas.virionis@gmail.com', 'Z4x6d000', 3, 2003, 2018),
(null, 'Elon', 'Elon', 'nikolas.virionis@gmail.com', 'Z4x6d000', 7, 2003, 2018),
(null, 'Nicolas', 'Nicolas', 'nikolas.virionis@gmail.com', 'Z4x6d000', 6, 2003, 2018),
(null, 'Nikola Tesla', 'Nikola Tesla', 'nikolas.virionis@gmail.com', 'Z4x6d000', 1, 2003, 2018),
(null, 'Abner', 'Abner', 'nikolas.virionis@gmail.com', 'Z4x6d000', 2, 2003, 2018),
(null, 'Nikola', 'Nikolas', 'nikolas.virionis@gmail.com', 'Z4x6d000', 3, 2003, 2018),
(null, 'Nicolas', 'nic', 'nikolas.virionis@gmail.com', 'Z4x6d000', 1, 2003, 2018),
(null, 'Nikolas', 'nik', 'nikolas.virionis@gmail.com', 'Z4x6d000', 7, 2003, 2018),
(null, 'Nikkolas', 'nickk', 'nikolas.virionis@gmail.com', 'Z4x6d000', 1, 2003, 2018),
(null, 'Nickolas', 'nicck', 'nikolas.virionis@gmail.com', 'Z4x6d000', 1, 2003, 2018),
(null, 'Nicholas', 'nich', 'nikolas.virionis@gmail.com', 'Z4x6d000', 2, 2003, 2018),
(null, 'Nikolas', 'jorge1', 'nikolas.virionis@gmail.com', 'Z4x6d000', 3, 2003, 2018),
(null, 'Nikolas', 'jonas1', 'nikolas.virionis@gmail.com', 'Z4x6d000', 4, 2003, 2018),
(null, 'Nikolas', 'jose1', 'nikolas.virionis@gmail.com', 'Z4x6d000', 7, 2003, 2018),
(null, 'Nikolas', 'Aidan', 'nikolas.virionis@gmail.com', 'Z4x6d000', 1, 2003, 2018),
(null, 'Nikolas', 'Jessica', 'nikolas.virionis@gmail.com', 'Z4x6d000', 1, 2003, 2018),
(null, 'Nikolas', 'Jennifer', 'nikolas.virionis@gmail.com', 'Z4x6d000', 1, 2003, 2018),
(null, 'Nikolas', 'Bruce', 'nikolas.virionis@gmail.com', 'Z4x6d000', 1, 2003, 2018),
(null, 'Nikolas', 'RObert', 'nikolas.virionis@gmail.com', 'Z4x6d000', 1, 2003, 2018),
(null, 'Nikolas', 'Carlos', 'nikolas.virionis@gmail.com', 'Z4x6d000', 5, 2003, 2018),
(null, 'Nikolas', 'Clovis', 'nikolas.virionis@gmail.com', 'Z4x6d000', 5, 2003, 2018),
(null, 'Nikolas', 'Chris', 'nikolas.virionis@gmail.com', 'Z4x6d000', 5, 2003, 2018),
(null, 'Nikolas', 'Christian', 'nikolas.virionis@gmail.com', 'Z4x6d000', 5, 2003, 2018),
(null, 'Nikolas', 'Robson1', 'nikolas.virionis@gmail.com', 'Z4x6d000', 7, 2003, 2018),
(null, 'Nikolas', 'nick11', 'nikolas.virionis@gmail.com', 'Z4x6d000', 6, 2003, 2018),
(null, 'Nikolas', 'nick12', 'nikolas.virionis@gmail.com', 'Z4x6d000', 7, 2003, 2018),
(null, 'Elon Musk', 'Elon Musk', 'elonmusk@tesla.com', 'Z4x6d000', 7, 1971, 2003);