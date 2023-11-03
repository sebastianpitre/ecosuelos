DROP DATABASE bd_ecosuelos2;
CREATE DATABASE bd_ecosuelos2;

USE bd_ecosuelos2;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  correo VARCHAR(255) NOT NULL
);

CREATE TABLE pedidos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  producto VARCHAR(255) NOT NULL,
  cantidad INT NOT NULL,
  usuario_id INT,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

INSERT INTO usuarios (id, nombre, correo) VALUES (1, 'usuario1', 'sapitre@gmail.com');
INSERT INTO usuarios (id, nombre, correo) VALUES (2, 'medasjopo', 'sapitre@gmail.com');
