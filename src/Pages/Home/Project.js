import React from 'react';
import { Link } from 'react-router-dom';

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
               <Link to="/pricing"> <button className='btn btn-warning w-60  '>View Detail</button></Link>
            </div>
            
        </div>
    );
};

export default Project;