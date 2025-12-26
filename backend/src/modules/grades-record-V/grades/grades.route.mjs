import {Router} from 'express';
import {GradesLogController} from './grades.controller.mjs';
import {GradesLogModel} from './grades.model.mjs';

// Configuración de las rutas para los registros de calificaciones
const router = Router();
const gradesController = new GradesLogController({ModelGradesLog: GradesLogModel});

// Ruta para obtener los registros de calificaciones por ID de actividad
router.get('/activity/:activityId', gradesController.getGradesLogByActivityId);
// Ruta para obtener todas las calificaciones
router.get('/all', gradesController.getAllGradesLog);

export const GradesLogRoutes = router;