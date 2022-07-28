import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Services from './Services';
import Slider from './Slider';
import UseService from './UseService';

const OurService = () => {
    const [useServices, setUseServices] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setUseServices(data))
    }, [])
    return (
        <>
            <Slider></Slider>
            <h2 className='text-orange text-3xl font-bold text-center my-20'>Our Services</h2>
            <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    useServices.map(service => <UseService
                        useService={service._id}
                        service={service}
                    ></UseService>)
                }
            </div>
        </>
    );
};

export default OurService;