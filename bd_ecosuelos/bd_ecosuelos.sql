DROP DATABASE bd_ecosuelos;
CREATE DATABASE bd_ecosuelos;

USE bd_ecosuelos;

CREATE TABLE datos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  dato1 VARCHAR(255) NOT NULL,
  dato2 VARCHAR(255) NOT NULL,
  dato3 VARCHAR(20) NOT NULL
);

CREATE TABLE pedidos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  producto VARCHAR(255) NOT NULL,
  cantidad INT NOT NULL,
  datos_id INT,
  FOREIGN KEY (datos_id) REFERENCES datos(id)
);
