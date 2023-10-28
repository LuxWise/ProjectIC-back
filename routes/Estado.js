import express from 'express'
import {
  getEstado,
  postEstado
} from '../database/Estado.js'

const estadoRoutes = express.Router();

estadoRoutes.get('/estado', async (req, res) => {
  const estado = await getEstado(req);
  res.status(200).send(estado);
});

estadoRoutes.post('/estado', async (req, res) => {
  const [nombreEstado] = req.body

  try {
    const result = await postEstado(nombreEstado);
    res.status(200).send(result)
  } catch {
    console.error('Error al insertar estado', err);
    res.status(500).send('Hubo un error al insertar estado')
  }
});

export default estadoRoutes;