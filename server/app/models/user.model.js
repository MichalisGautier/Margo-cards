import Sequelize from "sequelize";

const UserModel = (dbSequelize) => {
    return dbSequelize.define("User", {
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        firstname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastname: {
            type: Sequelize.STRING,
            allowNull: false
        },
    });
};

export default UserModel;