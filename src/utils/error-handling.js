/* eslint-disable max-classes-per-file */
export class ServiceError extends Error {
    constructor(message, sc) {
        super(message);
        this.statusCode = sc;
    }
}
