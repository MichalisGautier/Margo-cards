import { dbConfig } from "../config/db-config.js";
import Sequelize from "sequelize";
import UserModel from "./user.model.js";

const { DB, USER, PASSWORD, HOST, DIALECT, PORT, POOL } = dbConfig;

export const sequelizeConnection = new Sequelize(DB, USER, PASSWORD, {
    host: HOST,
    dialect: DIALECT,
    port: PORT,
    pool: {
        max: POOL.max,
        min: POOL.min,
        acquire: POOL.acquire,
        idle: POOL.idle
    }
});

// Initialize models
const models = {
    User: UserModel(sequelizeConnection),
};

const db = {
    ...models,
    sequelizeConnection
};

export default db;