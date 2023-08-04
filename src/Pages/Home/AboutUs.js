import React from 'react';
import aboutImg from '../../img/about-img.png';
import './AboutUs.css';
import { Link } from 'react-router-dom';

const AboutUs = () => {


    return (
        <div className='w-3/4 mx-auto mb-40'>

            <div className="hero min-h-screen bg-base-200 mt-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className="about-img" width={400} src={aboutImg} alt="" />
                    <div>
                        <h1 className="text-5xl font-bold">About</h1>
                        <p className="py-6">
                            Hello Every one, We are a team and we will be a pert of your thinking how to grow your business and policy. So please never forget us. If you think and remind us then we will grow and advise to you for promoting your business.
                            Hello Every one, We are a team and we will be a pert of your thinking how to grow your business and policy. So please never forget us. If you think and remind us then we will grow and advise to you for promoting your business.
                            Hello Every one, We are a team and we will be a pert of your thinking how to grow your business and policy. So please never forget us. If you think and remind us then we will grow and advise to you for promoting your business.
                        </p>
                        <Link to="/about"><button className="btn btn-primary">Learn More..</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;