import React from 'react';

const Client = ({ client }) => {
    const { img, name, Message, Rating } = client;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>Message:{Message}</p>
                <p>Rating:{Rating}</p>
            </div>
        </div>
    );
};

export default Client;