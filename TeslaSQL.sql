CREATE DATABASE teslafanclub;
USE teslafanclub;
CREATE TABLE usuario (
	idUser INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    username VARCHAR(45),
    email VARCHAR(60),
    senha VARCHAR(16),
    carroFav INT,
    anoNasc INT,
    anoInicio INT,
    FOREIGN KEY(carroFav) REFERENCES carros(idCarro)
);
CREATE TABLE carros (
	idCarro INT PRIMARY KEY,
    nomeCarro VARCHAR(45),
    aceleração0_100 DECIMAL(4,2),
    aceleração400m DECIMAL(5,2),
    vMax INT,
    chargeRange INT,
    peso DECIMAL(7,2),
    potencia INT
);
INSERT INTO carros VALUES 
(1, 'Model S', 1.99, 9.23, 320, 624, 2162, 1020),
(2, 'Model 3', 3.1, 11.6, 260, 504, 1844, 480),
(3, 'Model X', 2.5, 9.9, 261, 544, 2445, 1020),
(4, 'Model Y', 3.5, 12.4, 248, 485, 2003, 456),
(5, 'Roadster', 1.9, 8.8, 400, 1000, 1305, 1020),
(6, 'Semi', 20, NULL, 130, 810, 11340, 1000),
(7, 'Cybertruck', 4.5, 10.8, 200, 480, 2950, 800);
SELECT * FROM carros;
-- DELETE FROM usuario WHERE idUser <> 1;
SELECT carroFav FROM usuario GROUP BY carroFav ORDER BY count(carroFav) DESC;
SELECT u.carroFav AS fkCarro, count(u.carroFav) AS qtdFks, c.nomeCarro FROM carros AS c 
		INNER JOIN usuario AS u ON u.carroFav = c.idCarro 
        GROUP BY carroFav ORDER BY count(carroFav) DESC;
SELECT * FROM usuario;
INSERT INTO usuario VALUES 
(NULL, 'Nikolas', 'nick', 'nikolas.virionis@gmail.com', 'Z4x6d000', 1, 2003, 2018),
(NULL, 'Jorge', 'Jorge', 'jorge@gmail.com', 'Z4x6d000', 6, 2003, 2018),
(NULL, 'Jonas', 'Jonas', 'jonas@gmail.com', 'Z4x6d000', 7, 2003, 2018),
(NULL, 'Fernando', 'Fernando', 'fernando@gmail.com', 'Z4x6d000', 4, 2003, 2018),
(NULL, 'Fernanda', 'Fernanda', 'fernanda@gmail.com', 'Z4x6d000', 2, 2003, 2018),
(NULL, 'Renata', 'Renata', 'renata@gmail.com', 'Z4x6d000', 3, 2003, 2018),
(NULL, 'Roberta', 'Roberta', 'roberta@gmail.com', 'Z4x6d000', 4, 2003, 2018),
(NULL, 'Renato', 'Renato', 'renato@gmail.com', 'Z4x6d000', 6, 2003, 2018),
(NULL, 'Tiago', 'Tiago', 'tiago@gmail.com', 'Z4x6d000', 4, 2003, 2018),
(NULL, 'Flavia', 'Flavia', 'flavia@gmail.com', 'Z4x6d000', 6, 2003, 2018),
(NULL, 'Flavio', 'Flavio', 'flavio@gmail.com', 'Z4x6d000', 4, 2003, 2018),
(NULL, 'Fabio', 'Fabio', 'fabio@gmail.com', 'Z4x6d000', 2, 2003, 2018),
(NULL, 'Guilerme', 'Guilerme', 'guilerme@gmail.com', 'Z4x6d000', 7, 2003, 2018),
(NULL, 'Roberto', 'Roberto', 'roberto@gmail.com', 'Z4x6d000', 6, 2003, 2018),
(NULL, 'Robson', 'Robson', 'robson@gmail.com', 'Z4x6d000', 7, 2003, 2018),
(NULL, 'Roger', 'Roger', 'roger@gmail.com', 'Z4x6d000', 5, 2003, 2018),
(NULL, 'Regina', 'Regina', 'regina@gmail.com', 'Z4x6d000', 6, 2003, 2018),
(NULL, 'Amanda', 'Amanda', 'amanda@gmail.com', 'Z4x6d000', 3, 2003, 2018),
(NULL, 'Alice', 'Alice', 'alice@gmail.com', 'Z4x6d000', 6, 2003, 2018),
(NULL, 'Augusto', 'Augusto', 'augusto@gmail.com', 'Z4x6d000', 5, 2003, 2018),
(NULL, 'Leonardo', 'Leonardo', 'leonardo@gmail.com', 'Z4x6d000', 2, 2003, 2018),
(NULL, 'Vitor', 'Vitor', 'vitor@gmail.com', 'Z4x6d000', 1, 2003, 2018),
(NULL, 'Igor', 'Igor', 'igor@gmail.com', 'Z4x6d000', 7, 2003, 2018),
(NULL, 'Eduardo', 'Eduardo', 'eduardo@gmail.com', 'Z4x6d000', 3, 2003, 2018),
(NULL, 'Isabela', 'Isabela', 'isabela@gmail.com', 'Z4x6d000', 3, 2003, 2018),
(NULL, 'Luiza', 'Luiza', 'luiza@gmail.com', 'Z4x6d000', 6, 2003, 2018),
(NULL, 'Laura', 'Laura', 'laura@gmail.com', 'Z4x6d000', 2, 2003, 2018),
(NULL, 'Lara', 'Lara', 'lara@gmail.com', 'Z4x6d000', 5, 2003, 2018),
(NULL, 'Luis', 'Luis', 'luis@gmail.com', 'Z4x6d000', 7, 2003, 2018),
(NULL, 'Luisa', 'Luisa', 'luisa@gmail.com', 'Z4x6d000', 7, 2003, 2018),
(NULL, 'Nicolle', 'Nicolle', 'nicolle@gmail.com', 'Z4x6d000', 5, 2003, 2018),
(NULL, 'Nathan', 'Nathan', 'nathan@gmail.com', 'Z4x6d000', 6, 2003, 2018),
(NULL, 'Olivia', 'Olivia', 'olivia@gmail.com', 'Z4x6d000', 2, 2003, 2018),
(NULL, 'José', 'José', 'josé@gmail.com', 'Z4x6d000', 3, 2003, 2018),
(NULL, 'Elon', 'Elon', 'elon@gmail.com', 'Z4x6d000', 7, 2003, 2018),
(NULL, 'Nicolas', 'Nicolas', 'nicolas@gmail.com', 'Z4x6d000', 6, 2003, 2018),
(NULL, 'Nikola Tesla', 'Nikola Tesla', 'nikola.tesla@gmail.com', 'Z4x6d000', 1, 2003, 2018),
(NULL, 'Abner', 'Abner', 'abner@gmail.com', 'Z4x6d000', 2, 2003, 2018),
(NULL, 'Nikola', 'Nikolas', 'nikolas@gmail.com', 'Z4x6d000', 3, 2003, 2018),
(NULL, 'Nicolas', 'nic', 'nic@gmail.com', 'Z4x6d000', 1, 2003, 2018),
(NULL, 'Nikolas', 'nik', 'nik@gmail.com', 'Z4x6d000', 7, 2003, 2018),
(NULL, 'nickk', 'nickk', 'nickk@gmail.com', 'Z4x6d000', 1, 2003, 2018),
(NULL, 'nicck', 'nicck', 'nicck@gmail.com', 'Z4x6d000', 1, 2003, 2018),
(NULL, 'nich', 'nich', 'nich@gmail.com', 'Z4x6d000', 2, 2003, 2018),
(NULL, 'jorge1', 'jorge1', 'jorge1@gmail.com', 'Z4x6d000', 3, 2003, 2018),
(NULL, 'jonas1', 'jonas1', 'jonas1@gmail.com', 'Z4x6d000', 4, 2003, 2018),
(NULL, 'jose1', 'jose1', 'jose1@gmail.com', 'Z4x6d000', 7, 2003, 2018),
(NULL, 'Aidan', 'Aidan', 'aidan@gmail.com', 'Z4x6d000', 1, 2003, 2018),
(NULL, 'Jessica', 'Jessica', 'jessica@gmail.com', 'Z4x6d000', 1, 2003, 2018),
(NULL, 'Jennifer', 'Jennifer', 'jennifer@gmail.com', 'Z4x6d000', 1, 2003, 2018),
(NULL, 'Bruce', 'Bruce', 'bruce@gmail.com', 'Z4x6d000', 1, 2003, 2018),
(NULL, 'Robert', 'Robert', 'robert@gmail.com', 'Z4x6d000', 1, 2003, 2018),
(NULL, 'Carlos', 'Carlos', 'carlos@gmail.com', 'Z4x6d000', 5, 2003, 2018),
(NULL, 'Clovis', 'Clovis', 'clovis@gmail.com', 'Z4x6d000', 5, 2003, 2018),
(NULL, 'Chris', 'Chris', 'chris@gmail.com', 'Z4x6d000', 5, 2003, 2018),
(NULL, 'Christian', 'Christian', 'christian@gmail.com', 'Z4x6d000', 5, 2003, 2018),
(NULL, 'Robson1', 'Robson1', 'robson1@gmail.com', 'Z4x6d000', 7, 2003, 2018),
(NULL, 'nick11', 'nick11', 'nick11@gmail.com', 'Z4x6d000', 6, 2003, 2018),
(NULL, 'nick12', 'nick12', 'nick12@gmail.com', 'Z4x6d000', 7, 2003, 2018),
(NULL, 'Elon Musk', 'ElonMusk', 'elonmusk@tesla.com', 'Z4x6d000', 7, 1971, 2003);