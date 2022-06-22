import React from 'react';

const Project = ({ project }) => {
    const { name, ourService, price } = project;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{ourService}</p>
                <p>Price:{price}</p>

            </div>
        </div>
    );
};

export default Project;