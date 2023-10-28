import { database } from "../config/helppers.js";

export const getEstudiante = async () => {
  const [rows] = await database.query(
    `
    SELECT idEstudiente, nombreEstudiente, idGrupo FROM estudientes WHERE visible = 1;
    `
  );
  return rows;
}

export const postEstudiente = async (codigo, nombre, grupo) => {
  const [result] = await database.query(
    `
    INSERT INTO estudientes (idEstudiente, nombreEstudiente, idGrupo) 
    VALUES (?,?,?);
    `, [codigo, nombre, grupo]
  );
  return result;
}

export const putEstudiante = async (nombre, grupo, codigo) => {
  const [result] = await database.query(
    `
    UPDATE estudientes SET nombreEstudiente = ?, idGrupo = ?
    WHERE idEstudiente = ?
    `, [nombre, grupo, codigo]
  );
  return result;
}
