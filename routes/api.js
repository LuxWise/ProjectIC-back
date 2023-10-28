import express from 'express';
import estadoRoutes from './Estado.js';
import estudianteRoutes from './Estudiante.js';
import loginRoute from './login.js';

const route = express.Router()

route.use('/', estadoRoutes)
route.use('/', estudianteRoutes)
route.use('/', loginRoute)

export default route;