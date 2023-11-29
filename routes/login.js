import express from 'express';
import dotenv from 'dotenv';
import mysql from "mysql2";
import jwt from 'jsonwebtoken';

const loginRoute = express.Router();

dotenv.config();

const database = mysql
  .createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
  })

loginRoute.post('/login', (req, res) => {
  const { usuario, contrasenia } = req.body;

  database.query(
    'SELECT * FROM usuarios WHERE usuario = ? AND  contrasenia = ?',
    [usuario, contrasenia],
    (err, result) => {
      if (err)
        return res.json({ Messege: 'server error' })
      if (result.length > 0) {
        const nombre = result[0].nombreUsuario
        const rol = result[0].rol
        const id = result[0].id
        const token = jwt.sign({ nombre, rol, id }, "Stack", { expiresIn: '1h' });
        return res.json({ Status: 'exito', Token: token, Nombre: nombre })

      } else {
        return res.json({ Messege: 'Usuario no existe' })
      }
    }
  );
})

export default loginRoute