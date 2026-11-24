import {pool} from '../config/database.js';

export async function create({userId, metodo, ruta, estadoCod}) {
    await pool.query(
        'INSERT INTO activity_logs (user_id, metodo, ruta, estado_cod) VALUES (?,?,?,?)',
        [userId, metodo, ruta, estadoCod]
    );
}

export async function findByUserId(userId,limit) {
    const base = `SELECT id, user_id AS userId, tiempo, metodo, ruta, estado_cod AS estadoCod
    FROM activity_logs
    WHERE user_id = ?
    ORDER BY id DESC`;
    if (limit){
        const [rows] = await pool.query(`${base} LIMIT ?`, [userId, limit]);
        return rows;
    }
    const [rows] = await pool.query(base, [userId]);
    return rows;
}