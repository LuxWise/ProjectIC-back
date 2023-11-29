import express from 'express'
import { getRol } from '../database/rol.js'

const rolRoutes = express.Router()

rolRoutes.get('/rol', async (req, res) => {
  try {
    const rol = await getRol();
    res.status(200).send(rol)
  } catch {
    res.status(500).send('Hubo un error')
  }
})

export default rolRoutes