import * as activityRepo from '../repositories/activityLogRepository.js';
import * as userRepo from '../repositories/userRepository.js';
import { AppError } from '../errors/AppError.js';
import { parseId } from '../validators/commonValidator.js';
import { parseOptionalLimit } from '../validators/logValidator.js';

export async function listUserLogs(req,res) {
    const userId = parseId(req.params.userId);
    const limit = parseOptionalLimit(req.query.n);

    const user = await userRepo.findById(userId);
    if (!user) throw new AppError(404, 'USER_NOT_FOUND', 'El usuario no existe.');

    res.json(await activityRepo.findByUserId(userId,limit));
}