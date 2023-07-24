import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import UseService from './UseService';
import service from '../../img/service.png';
import './OurService.css';
import { Link } from 'react-router-dom';
import Slider from './Slider';

const OurService = () => {
    const [useServices, setUseServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setUseServices(data))
    }, []);
    return (
        <div>
            <div className='service-container grid grid-cols-1 gap-10 lg:grid-cols-2'>
                <div className='flex items-center p-10 sm:text-center'>

                    <h2 className='text-2xl font-bold'><Link to="/ourService">Service</Link> | <Link to="/">Home</Link></h2>
                </div>
                <div>
                    <img src={service} alt="" />
                </div>
            </div>
            <h2 className='text-orange text-3xl font-bold text-center my-20'>WHAT WE OFFER</h2>
            <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ml-20'>

                <Slider></Slider>
                <h2 className='text-orange text-3xl font-bold text-center my-20'>Our Services</h2>
                <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>

                    {
                        useServices.map(service => <UseService
                            useService={service._id}
                            service={service}
                        ></UseService>)
                    }
                </div>
            </div>
        </div>
    );
};
export default OurService;