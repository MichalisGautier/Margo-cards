import db from "../models/index.js";
const User = db.User;

const create = (async (req, res, next) => {
    try {
        const { email, firstname, lastname } = req.body;

        // TODO: How do we perform correct validation with Sequelize??
        if (!email || !firstname || !lastname) {
            res.status(400);
            throw new Error("All fields are required.");
        }

        const user = await User.create({ email, firstname, lastname });
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
});

const findAll = (async (req, res, next) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
});

const find = (async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await User.findByPk(id);

        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
});

const update = async (req, res, next) => {
    try {
        const id = req.params.id;

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({ error: "User not found." });
        }

        await user.update(req.body);

        const updatedUser = await User.findByPk(id);

        res.status(200).json(updatedUser);
    } catch (error) {
        next(error);
    }
};

const destroy = async (req, res, next) => {
    try {
        const id = req.params.id;

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({ error: "User not found." });
        }

        await User.destroy({ where: { id: id } })

        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};



export { findAll, create, find, update, destroy };