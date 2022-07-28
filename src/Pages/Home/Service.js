import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, img, price, ourService, name } = service;

    const producthandler = (event) => {

    }
    return (
        <div class="card w-96 bg-base-100 text-center shadow-xl mb-20">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-start">
                <h2 class="card-title">{name}</h2>
                <p>{ourService}</p>
                <p>Budget:${price}</p>
                <div class="card-actions">
                    <Link onClick={producthandler(_id)} to="/product/:id"> <button class="btn btn-warning w-60">Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;