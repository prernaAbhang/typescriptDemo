const GetFordCarsService = require("../services/get-ford-cars-service");

module.exports.get = async () => {
    const list_length = 100;

    const response = GetFordCarsService.getFordCars(list_length);

    return response;
};
