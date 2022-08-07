import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data.slice(0, 3)))
    }, [])
    return (
        <div className=''>
            <h2 className='text-3xl text-center font-bold my-20'>Our Services</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ml-20'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>

            <div class="hero">
                <div class="text-center hero-content">
                    <div class="max-w-md">

                        <Link to="/ourService"><button class="btn btn-outline">View more services</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;