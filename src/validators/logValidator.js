import { AppError } from "../errors/AppError.js";

export function parseOptionalLimit(value){
    if(value === undefined) return null;
    if(typeof value !== 'string' || !/^[1-9]\d*$/.test(value)) {
        throw new AppError(422, 'VALIDATION_ERROR','Los datos enviados no son válidos.', {
            n: 'n debe ser un entero positivo.',
        });
    }
    return Number(value);
}