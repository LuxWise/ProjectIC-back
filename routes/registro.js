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
  const { nombre, usuario, contrasenia, rol } = req.body

  try {
    const result = await postUsuarios(nombre, usuario, contrasenia, rol);
    res.status(200).send(result)
  } catch (err) {
    console.error(err)
    res.status(500).send('Hubo un error al insertar usuario')
  }
})

export default registroRoutes