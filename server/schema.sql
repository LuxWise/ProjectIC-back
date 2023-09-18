-- Active: 1694997867399@@127.0.0.1@3306@projectci
CREATE DATABASE IF NOT EXISTS projectCI;
USE projectCI;
CREATE TABLE IF NOT EXISTS JefeArea(
  idJefeArea INT AUTO_INCREMENT PRIMARY KEY,
  nombreJefeArea VARCHAR(150) NOT NULL,
  codigoJefeArea INT NOT NULL
);
CREATE TABLE IF NOT EXISTS Profesor(
  idProfesor INT AUTO_INCREMENT PRIMARY KEY,
  nombreProfesor VARCHAR(150) NOT NULL,
  codigoProfesor INT NOT NULL
);
CREATE TABLE IF NOT EXISTS Estuadientes(
  idEstudiente INT AUTO_INCREMENT PRIMARY KEY,
  nombreEstudiente VARCHAR(150) NOT NULL,
  codigoEstdiente INT NOT NULL
);
CREATE TABLE IF NOT EXISTS ProfesoressProyecto(
  idProfeProyecto INT AUTO_INCREMENT PRIMARY KEY,
  idProfesores INT NOT NULL,
  FOREIGN KEY (idProfesores) REFERENCES Estuadientes(idProfesor)
);
CREATE TABLE IF NOT EXISTS EstudiantesProyecto(
  idEstuProyecto INT AUTO_INCREMENT PRIMARY KEY,
  idEstudiente INT NOT NULL,
  FOREIGN KEY (idEstudiente) REFERENCES Estuadientes(idEstudiente)
);
CREATE TABLE IF NOT EXISTS EstadoProyecto(
  idEsatdo INT AUTO_INCREMENT PRIMARY KEY,
  estadoProyecto VARCHAR(150) NOT NULL
);
CREATE TABLE IF NOT EXISTS Proyectos(
  idProyecto INT AUTO_INCREMENT PRIMARY KEY,
  nombreProyecto VARCHAR(150) NOT NULL,
  tematicaProyecto VARCHAR(150) NOT NULL,
  FechaProyecto DATE NOT NULL,
  idEstado INT NOT NULL,
  idProfesor INT NO NULL,
  idEstudientes INT NOT NULL,
  FOREIGN KEY (idEstado) REFERENCES (),
  FOREIGN KEY (idProfesor) REFERENCES Profesor(idProfesor),
  FOREIGN KEY (idEstudientes) REFERENCES EstudiantesProyecto(idEstuProyecto)
);
CREATE TABLE IF NOT EXISTS Cuenta(
  idCuenta INT AUTO_INCREMENT PRIMARY KEY,
  tipoCuenta VARCHAR(150) NOT NULL
);
CREATE TABLE IF NOT EXISTS Usuario(
  idUsuario INT AUTO_INCREMENT PRIMARY KEY,
  usuario VARCHAR(150) NOT NULL,
  contrasenia VARCHAR(150) NOT NULL,
  idCuenta INT NOT NULL,
  INDEX (idCuenta),
  FOREIGN KEY (idCuenta) REFERENCES Cuenta(idCuenta)
);