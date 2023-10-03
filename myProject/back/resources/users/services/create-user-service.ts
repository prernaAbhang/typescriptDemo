import User from "../../../models/user";
const Random = require("random-number");
const moment = require("moment");

module.exports.createUser = async (userData: any) => {
    try {
        const id = generateUserId();
        const dbResponse = await User.create({
            id,
            name: userData.name,
            phone: userData.phone,
            email: userData.email,
            createdAt: Date.now(),
        });

        return {
            id,
            createdAt: moment(dbResponse.createdAt).format("DD-MM-YYYY"),
        };
    } catch (error) {
        console.log(error);
        return "Failed to create the user";
    }
};

const generateUserId = () => {
    return Random.generator({
        min: 1000000000,
        max: 9999999999,
        integer: true,
    })();
};
