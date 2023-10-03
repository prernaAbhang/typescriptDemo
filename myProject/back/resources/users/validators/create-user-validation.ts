import User, { UserMap } from "../../../models/user";
import database from "../../../models/database";

module.exports.validate = async (details: any) => {
    UserMap(database);
    const emailRegex = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");

    if (!details.name) return { status: false, message: "Please provide user's name!" };

    if (!details.email) return { status: false, message: "Please provide user's email id!" };

    if (!details.email.match(emailRegex)) return { status: false, message: "Please provide valid email id!" };

    if (!details.phone) return { status: false, message: "Please provide user's phone number!" };

    const emailIdExists = await User.findOne({ where: { email: details.email }, attributes: ["id"] });
    if (emailIdExists) return { status: false, message: "Email id already exists!" };

    return { status: true, message: "validated" };
};
