import React from 'react';
import blogImg1 from '../../img/service.png'
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <>
            <h2 className='text-white font-bold text-center py-10'>Blog</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto justify-items-center py-10'>
                <div className="card w-96 bg-slate-100 shadow-xl mb-4">
                    <figure><img src={blogImg1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Why you would be a front end developer?
                        </h2>
                        <p><span className='text-read'>Author: </span>Imran Ahmed</p>
                        <p className='items-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rerum magni maxime qui fugit dolor quam sint quis facilis at.</p>
                        <a className='text-info' href="">Learn More..</a>
                    </div>
                </div>
                <div className="card w-96 bg-slate-100 shadow-xl mb-4">
                    <figure><img src={blogImg1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Why React Js is the best for you?
                        </h2>
                        <p><span className='text-red'>Author: </span>Imran Ahmed</p>
                        <p className='items-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rerum magni maxime qui fugit dolor quam sint quis facilis at.</p>
                        <a className='text-info' href="">Learn More..</a>
                    </div>
                </div>
                <div className="card w-96 bg-slate-100 shadow-xl mb-4">
                    <figure><img src={blogImg1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Why you would be a front end developer?
                        </h2>
                        <p><span className='text-red'>Author: </span>Imran Ahmed</p>
                        <p className='items-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rerum magni maxime qui fugit dolor quam sint quis facilis at.</p>
                        <a className='text-info' href="">Learn More..</a>
                    </div>
                </div>
                <div className="card w-96 bg-slate-100 shadow-xl mb-4">
                    <figure><img src={blogImg1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Why you would be a front end developer?
                        </h2>
                        <p><span className='text-red'>Author: </span>Imran Ahmed</p>
                        <p className='items-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rerum magni maxime qui fugit dolor quam sint quis facilis at.</p>
                        <a className='text-info' href="">Learn More..</a>
                    </div>
                </div>
                <div className="card w-96 bg-slate-100 shadow-xl mb-4">
                    <figure><img src={blogImg1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Why you would be a front end developer?
                        </h2>
                        <p><span className='text-red'>Author: </span>Imran Ahmed</p>
                        <p className='items-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rerum magni maxime qui fugit dolor quam sint quis facilis at.</p>
                        <a className='text-info' href="">Learn More..</a>
                    </div>
                </div>
                <div className="card w-96 bg-slate-100 shadow-xl mb-4">
                    <figure><img src={blogImg1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Why you would be a front end developer?
                        </h2>
                        <p><span className='text-red'>Author: </span>Imran Ahmed</p>
                        <p className='items-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rerum magni maxime qui fugit dolor quam sint quis facilis at.</p>
                        <a className='text-info' href="">Learn More..</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blogs;