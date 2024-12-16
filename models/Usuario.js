import { DataTypes } from "sequelize";
import bcrypt from 'bcrypt';
import db from '../config/db.js';

const Usuario = db.define('usuarios', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha: { // Campo con valor por defecto
        type: DataTypes.DATEONLY, // Guarda solo la fecha (formato AAAA-MM-DD)
        allowNull: false,
        defaultValue: DataTypes.NOW // Establece la fecha actual por defecto
    },
    token: {
        type: DataTypes.STRING
    },
    confirmado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    hooks: {
        beforeCreate: async function (usuario) {
            const salt = await bcrypt.genSalt(10);
            usuario.password = await bcrypt.hash(usuario.password, salt);
        }
    },
    scopes: {
        eliminarPassword: {
            attributes: {
                exclude: ['password', 'token', 'confirmado', 'createdAt', 'updatedAt']
            }
        }
    }
});

// Métodos personalizados
Usuario.prototype.verificarPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

export default Usuario;
