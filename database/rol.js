import { database } from "../config/helppers.js";

export const getRol = async () => {
  const [rows] = await database.query(
    `
    SELECT idRol, tipoRol FROM rol WHERE visible = 1 ;    
    `
  );
  return rows;
}