import express from 'express'
import {
  getEstudiante,
  postEstudiente,
  putEstudiante
} from '../database/Estudiante.js';

const estudianteRoutes = express.Router();

estudianteRoutes.get('/estudiante', async (req, res) => {
  const estudiante = await getEstudiante(req);
  res.status(200).send(estudiante);
});

estudianteRoutes.post('/estudiante', async (req, res) => {
  const [idEstudiente, nombreEstudiente, idGrupo] = req.body

  try {
    const result = await postEstudiente(idEstudiente, nombreEstudiente, idGrupo);
    res.status(200).send(result)
  } catch {
    console.error('Error al insertar estado', err);
    res.status(500).send('Hubo un error al insertar estado')
  }
});

estudianteRoutes.put('/estudiante/:id', async (req, res) => {
  const idEstudiente = req.params;
  const [nombreEstudiente, idGrupo] = req.body;

  try {
    const result = await putEstudiante(nombreEstudiente, idGrupo, idEstudiente);
    res.status(200).send(result)
  } catch {
    console.error('Error al actualizar estado', err);
    res.status(500).send('Hubo un error al actualizar estado')
  }
});

export default estudianteRoutes;
