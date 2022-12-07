import { Schema } from 'mongoose';

export class CoreSchema extends Schema {
    constructor(schema, options) {
        super(
            {
                ...schema,
                deletedAt: {
                    type: Date,
                },
            },
            { ...options, timestamps: true },
        );
    }
}
