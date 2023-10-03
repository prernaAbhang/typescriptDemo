/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import droplet from "../public/images/droplet.svg";
import Image from "next/image";
import { DropletFill, Hdd } from "react-bootstrap-icons";

const CarDetails = ({ carData }) => {
    return (
        <div className="col-sm-6 col-md-4 col-lg-4">
            <div className="card">
                <img className="card-img-top" src={`https://server.cocoche.com.ar/${carData.url}`} alt="Card image cap" />
                <div className="bg-info small text-light py-1">
                    <span className="ms-2">
                        <Hdd color="white" size={12} />
                    </span>
                    <span className="ms-1">{carData.doors} Puertas</span>
                    <span className="ms-3">
                        <DropletFill color="white" size={12} />
                    </span>
                    <span className="ms-1">{carData.fuelType}</span>
                </div>
                <div className="card-body">
                    <h5 className="card-title">${carData.cost}</h5>
                    <p className="card-text text-info overflow-hidden" style={{ height: "50px" }}>
                        {carData.title}
                    </p>
                    <p className="card-text overflow-hidden" style={{ height: "50px" }}>
                        <small className="text-muted">{carData.placeDescription}</small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;
