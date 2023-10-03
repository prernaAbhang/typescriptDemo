import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import CarDetails from "./CarDetails";
import Paginator from "./Paginator";

const FordCars = ({ data }) => {
    console.log(data);

    const [carList, setCarList] = useState([]);
    const [page, setPage] = useState(1);

    const pageSize = data.length < 6 ? data.length : 6;
    const noOfPages = data.length < 6 ? 1 : data.length / 6;

    useEffect(() => {
        let carData = [];

        for (let index = pageSize * page - pageSize; index < pageSize * page; index++) {
            carData.push(data[index]);
        }

        setCarList(carData);
    }, [page]);

    return (
        <div className="bg-secondary bg-opacity-10 h-100">
            <div className="container my-5 ">
                <div className="row gy-3">
                    {carList.map((carData, index) => {
                        return <CarDetails carData={carData} />;
                    })}

                    <div className="mt-5 d-flex justify-content-center">
                        <Paginator
                            onClick={(pageNumber) => {
                                setPage(pageNumber);
                            }}
                            totalRecords={data.length}
                            pageSize={pageSize}
                            currentPage={page}
                            paginatorSize={noOfPages}
                        />
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default FordCars;
