const CreateUserValidation = require("../validators/create-user-validation");
const CreateUserService = require("../services/create-user-service");

module.exports.create = async (userData: any) => {
    const validationResult = await CreateUserValidation.validate(userData);

    if (validationResult.status) {
        const response = await CreateUserService.createUser(userData);
        return response;
    } else {
        return validationResult.message;
    }
};
