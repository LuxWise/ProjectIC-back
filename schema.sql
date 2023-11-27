-- Active: 1694611473560@@127.0.0.1@3306@projectci
CREATE DATABASE IF NOT EXISTS projectCI;
USE projectCI;
-----------------------------------------------
-- informacion
-----------------------------------------------
CREATE TABLE IF NOT EXISTS Estado (
  idEstado INT AUTO_INCREMENT PRIMARY KEY,
  nombreEstado VARCHAR(150) NOT NULL,
  visible BOOLEAN DEFAULT 1
);
-----------------------------------------------
-- Insert en tablas de informacion
-----------------------------------------------
INSERT INTO Estado (nombreEstado)
VALUES ('Proceso'),
  ('Detenido'),
  ('Finalizado');
-----------------------------------------------
-- tipos de usuario
-----------------------------------------------
CREATE TABLE IF NOT EXISTS JefeArea(
  idJefeArea INT AUTO_INCREMENT PRIMARY KEY,
  nombreJefeArea VARCHAR(150) NOT NULL,
  codigoJefeArea INT NOT NULL,
  visible BOOLEAN DEFAULT 1
);
CREATE TABLE IF NOT EXISTS Profesor(
  idProfesor INT AUTO_INCREMENT PRIMARY KEY,
  nombreProfesor VARCHAR(150) NOT NULL,
  codigoProfesor INT NOT NULL,
  visible BOOLEAN DEFAULT 1
);
CREATE TABLE IF NOT EXISTS Estuadientes(
  idEstudiente INT AUTO_INCREMENT PRIMARY KEY,
  nombreEstudiente VARCHAR(150) NOT NULL,
  codigoEstdiente INT NOT NULL,
  visible BOOLEAN DEFAULT 1
);
CREATE TABLE IF NOT EXISTS ProfesoresProyecto(
  idProfeProyecto INT AUTO_INCREMENT PRIMARY KEY,
  idProfesores INT NOT NULL,
  visible BOOLEAN DEFAULT 1,
  FOREIGN KEY (idProfesores) REFERENCES Profesor(idProfesor)
);
CREATE TABLE IF NOT EXISTS EstudiantesProyecto(
  idEstuProyecto INT AUTO_INCREMENT PRIMARY KEY,
  idEstudiente INT NOT NULL,
  visible BOOLEAN DEFAULT 1,
  FOREIGN KEY (idEstudiente) REFERENCES Estuadientes(idEstudiente)
);
CREATE TABLE IF NOT EXISTS Proyectos(
  idProyecto INT AUTO_INCREMENT PRIMARY KEY,
  nombreProyecto VARCHAR(150) NOT NULL,
  tematicaProyecto VARCHAR(150) NOT NULL,
  FechaProyecto DATE NOT NULL,
  idEstado INT NOT NULL,
  idProfesor INT NOT NULL,
  idEstudientes INT NOT NULL,
  visible BOOLEAN DEFAULT 1,
  FOREIGN KEY (idEstado) REFERENCES Estado(idEstado),
  FOREIGN KEY (idProfesor) REFERENCES Profesor(idProfesor),
  FOREIGN KEY (idEstudientes) REFERENCES EstudiantesProyecto(idEstuProyecto)
);
------------------------------------------------------------------------------------
-- Creacion de tabla de usuarios por cada rol
------------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS Rol (
  idRol INT AUTO_INCREMENT PRIMARY KEY,
  tipoRol VARCHAR(150) NOT NULL,
  visible BOOLEAN NOT NULL DEFAULT 1
);
CREATE TABLE IF NOT EXISTS Usuarios(
  idUsuario INT AUTO_INCREMENT PRIMARY KEY,
  nombreUsuario VARCHAR(150) NOT NULL,
  usuario VARCHAR(150) NOT NULL,
  codigo VARCHAR(100) NOT NULL,
  correo VARCHAR(500) NOT NULL,
  contrasenia VARCHAR(150) NOT NULL,
  idRol INT NOT NULL,
  INDEX (idRol),
  visible BOOLEAN NOT NULL DEFAULT 1,
  FOREIGN KEY (idRol) REFERENCES Rol(idRol)
);
-----------------------------------------------------------
--  Insertar los roles 
-----------------------------------------------------------
INSERT INTO rol (tipoRol)
VALUES ('alumno'),
  ('profesor'),
  ('jefe de area');