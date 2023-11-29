import { database } from "../config/helppers.js";

export const getUsuarios = async () => {
  const [rows] = await database.query(
    `
    SELECT usuarios.nombreUsuario, 
    usuarios.usuario, usuarios.contrasenia, rol.tipoRol 
    FROM usuarios
    INNER JOIN 	rol ON rol.idRol = usuarios.idRol
    WHERE usuarios.visible = 1;
    `
  );
  return rows;
}

export const postUsuarios = async (nombre, usuario, codigo,
  correo, contrasenia, rol) => {
  const [result] = await database.query(
    `
    INSERT INTO usuarios (nombreUsuario, usuario, codigo, correo, contrasenia, idRol) 
    VALUES (?, ?, ?, ?, ?, ?);
    `, [nombre, usuario, codigo,
    correo, contrasenia, rol]
  );
  return result;
}
