
// Controlador que maneja las solicitudes relacionadas con los registros de calificaciones
export class GradesLogController {
    constructor({ModelGradesLog}){
        this.model = ModelGradesLog;
    }

    // Controlador para obtener los registros de calificaciones por ID de actividad
    getGradesLogByActivityId = async (req, res) => {
        const { activityId } = req.params;
        try{
            const result = await this.model.getGradesLogByActivityId(activityId);
            if(result.error) return res.status(404).json({error: result.error});
            return res.status(200).json({
                message: result.message,
                grades: result.grades
            });
        }
        catch(error){
            console.error('Error en GradesLogController.getGradesLogByActivityId:', error);
            return res.status(500).json({
                error: `Error del servidor al obtener los registros de 
                calificaciones por ID de actividad.`
            });
        }
    }

    // Controlador para obtener todas las calificaciones
    getAllGradesLog = async (req, res) => {
        try{
            const result = await this.model.getAllGradesLog();
            if(result.error) return res.status(404).json({error: result.error});
            return res.status(200).json({
                message: result.message,
                grades: result.grades
            });
        }
        catch(error){
            console.error('Error en GradesLogController.getAllGradesLog:', error);
            return res.status(500).json({
                error: `Error del servidor al obtener todos los registros de calificaciones.`
            });
        }
    }
}