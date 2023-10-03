import axios, { AxiosError } from "axios";

module.exports.getFordCars = async (list_length: number) => {
    const response = await fetchCarsData(list_length);

    if (response && response.carList) {
        const filteredCarsData = response.carList;
        // const filteredCarsData = response.carList.filter((car: any) => car.brandDescription === "FORD");
        return filteredCarsData;
    } else {
        return "Some error occurred!";
    }
};

const fetchCarsData = (list_length: number) => {
    return axios
        .get(`http://server.cocoche.com.ar/car_listing_presentation?list_length=${list_length}`)
        .then((res) => res.data)
        .catch((error: AxiosError) => {
            console.error(`There was an error with ${error.config.url}.`);
            console.error(error.toJSON());
        });
};
