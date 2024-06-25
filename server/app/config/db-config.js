export const dbConfig = {
    DB: process.env.DB_NAME,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    HOST: process.env.DB_HOST,
    DIALECT: process.env.DB_DIALECT || 'mysql',
    PORT: process.env.DB_PORT || 3306,
    POOL: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}