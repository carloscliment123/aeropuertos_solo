import * as activityRepo from '../repositories/activityLogRepository.js';

export function logActivity(req, res) {
    const ruta = req.originalUrl.split('?')[0];
    const metodo = req.method;                        
    const userId = req.user.id;

    res.on('finish', async () => {
        try {
            await activityRepo.create({
                userId,
                metodo,
                ruta,
                estadoCod: res.statusCode,            
            });
        } catch (err) {
            console.error('No se pudo registrar la actividad:', err.message);
        }
    });
}