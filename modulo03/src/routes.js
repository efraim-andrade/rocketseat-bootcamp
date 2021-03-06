import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import authMiddleware from './app/middlewares/auth';

import FileController from './app/controllers/FileController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ProviderController from './app/controllers/ProviderController';
import ScheduleController from './app/controllers/ScheduleController';
import AvailableController from './app/controllers/AvailableController';
import AppointmentController from './app/controllers/AppointmentController';
import NotificationController from './app/controllers/NotificationController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/providers', ProviderController.index);
routes.get('/providers/:providerId/available', AvailableController.index);
routes.get('/appointments', AppointmentController.index);
routes.get('/schedule', ScheduleController.index);
routes.get('/notifications', NotificationController.index);

routes.post('/appointments', AppointmentController.store);
routes.post('/files', upload.single('file'), FileController.store);

routes.put('/users', UserController.update);
routes.put('/notifications/:id', NotificationController.update);

routes.delete('/appointments/:id', AppointmentController.delete);

export default routes;
