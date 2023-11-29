import express from 'express'
import { getUsuarios, postUsuarios } from '../database/registro.js';

const registroRoutes = express.Router();


registroRoutes.get('/registro', async (req, res) => {

  try {
    const usuario = await getUsuarios();
    res.status(200).send(usuario)
  } catch {
    res.status(500).send('Hubo un error al realizar el get')
  }
})

registroRoutes.post('/registro', async (req, res) => {
  const { nombre, apellido, codigo, correo, contrasenia, rol } = req.body

  const firtsletter = (str) => {
    let letras = str.split('')
    return letras[0]
  }
  const firtsName = (str) => {
    let letras = str.split(' ')
    return letras[0]
  }

  const nombreUsuario = nombre + ' ' + apellido;
  const usuario = firtsletter(nombre) + firtsName(apellido)

  try {
    const result = await postUsuarios(nombreUsuario, usuario, codigo, correo, contrasenia, rol);
    res.status(200).send(result)
  } catch (err) {
    console.error(err)
    res.status(500).send('Hubo un error al insertar usuario')
  }
})

export default registroRoutes