import db from '../database/db.connection.mjs';

const GradesModel = {
    getStudentsBySection: async (sectionId) => {
        try {
            const query = `
                SELECT
                    u.user_id,
                    u.first_name,
                    u.last_name,
                    u.email,
                    e.status AS enrollment_status
                FROM enrollments e
                JOIN users u ON e.student_user_id = u.user_id
                WHERE e.section_id = ?
            `;

            const [rows] = await db.execute(query, [sectionID]);
            return rows;
        } catch (error) {
            console.error("Error al obtener estudiantes:", error);
            throw error;
        }
    },
};

export default GradesModel;