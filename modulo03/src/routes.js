import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import authMiddleware from './app/middlewares/auth';

import FileController from './app/controllers/FileController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ProviderController from './app/controllers/ProviderController';
import ScheduleController from './app/controllers/ScheduleController';
import AppointmentController from './app/controllers/AppointmentController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/providers', ProviderController.index);
routes.get('/appointments', AppointmentController.index);
routes.get('/schedule', ScheduleController.index);

routes.post('/appointments', AppointmentController.store);
routes.post('/files', upload.single('file'), FileController.store);

routes.put('/users', UserController.update);

export default routes;
