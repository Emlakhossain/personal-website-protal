import React from 'react';

const Project = ({ project }) => {
    const { name, ourService, price, img } = project;

    return (
        <div class="card w-96 bg-base-100 shadow-xl mb-20 hover:outline">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p className='text-start'>{ourService}</p>

            </div>
        </div>
    );
};

export default Project;