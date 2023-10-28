import { database } from "../config/helppers.js";

export const getEstado = async () => {
  const [rows] = await database.query(
    `
    SELECT idEstado, nombreEstado FROM estado WHERE visible = 1;
    `
  );
  return rows;
}

export const postEstado = async (estado) => {
  const [result] = await database.query(
    `
    INSERT INTO estado (nombreEstado) 
    VALUES (?);
    `, [estado]
  );
  return result;
}
