/* eslint-disable max-classes-per-file */
export class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 400;
    }
}
export class ServiceError extends Error {
    constructor(message, sc) {
        super(message);
        this.statusCode = sc;
    }
}
