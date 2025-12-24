import GradesModel  from "./grades.model.mjs";

export const getSectionGrades = async (req, res) => {
    try {
        const { sectionId } = req.params;
        if (!sectionId) {
            return res.status(400).json({ message: "Falta el ID de la sección" });
        }

        const students = await GradesModel.getStudentsBySection(sectionId);
        if (students.length === 0) {
            return res.status(404).json({ message: "No se encontraron estudiantes para esta sección" });
        }

        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: "Error interno del servidor" });
    }
};