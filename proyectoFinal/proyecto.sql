SET NAMES 'latin1';
DROP DATABASE IF EXISTS proyecto;
CREATE DATABASE IF NOT EXISTS proyecto DEFAULT CHARACTER SET utf8;
USE proyecto;

CREATE TABLE alumnos(
id					INTEGER NOT NULL AUTO_INCREMENT,
nombre				VARCHAR(45) NOT NULL,
ap_pat				VARCHAR(45) NOT NULL,
ap_mat				VARCHAR(45) NOT NULL,
edad				INTEGER(4) NOT NULL,
no_cuenta			VARCHAR(12) NOT NULL,
email				VARCHAR(45) NOT NULL,
telefono			VARCHAR(10) NOT NULL,
carrera				VARCHAR(45) NOT NULL,
PRIMARY KEY (id)
)DEFAULT CHARACTER SET utf8;

INSERT INTO alumnos (id,nombre,ap_pat,ap_mat,edad,no_cuenta,email,telefono,carrera) VALUES (1,"Leonardo","Garibay","Diaz",18,"319115118","leo@gmail.com","5565375801","ICO");
SELECT * FROM alumnos;