import { base } from '../config/db.config.js'

const modelName = 'users';

const userSchema = new base.Schema({
    nombre: String,
    password: String,
    email: {
        type: String,
        unique: true
    }
}, {
    collection: 'users'
});

export function model() {
    if (base.models[modelName]) {
        return base.models[modelName];
    }

    return base.models[modelName] || base.model(modelName, userSchema)
}