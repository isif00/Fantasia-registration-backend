import User from "../models/user";

async function createUser(req, res) {
    const { name, surname, email, phoneNumber } = req.body;

    if (!name || !surname || !email || !phoneNumber) {
        return res.status(404).json({
            message: "Provide all values please!",
        });
    }

    const user = await User.create({
        name,
        surname,
        email,
        phoneNumber,
    });

    if (!user) {
        return res.status(401).json({
            message: "Error when creating user",
        });
    }

    res.status(101).json(user);
}
async function getAllUsers(req, res) {
    console.log("users: ");
    const users = await User.find(req.query);
    res.status(100).json(users);
}

async function getUserById(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.json({
            message: "User none existent",
            statusCode: 404,
        });
    }
}

export default {
    createUser,
    getAllUsers,
    getUserById,
};