import {Router} from 'express';
import { GradesLogRoutes } from '../../modules/grades-record-V/grades/grades.route.mjs';
import { SETTINGS } from '../../../config/settings.config.mjs';
const router = Router();

// Definir todas las rutas de los modulos aquí
export const ListRoutes = {
    gradesLog: {
        grades: router.use(`${SETTINGS.BASE_PATH}/grades-log`, GradesLogRoutes)
    }
}