CREATE DATABASE ejemplo_db;

USE ejemplo_db;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL
);

INSERT INTO usuarios (nombre) VALUES ('Usuario 1');
INSERT INTO usuarios (nombre) VALUES ('Usuario 2');
