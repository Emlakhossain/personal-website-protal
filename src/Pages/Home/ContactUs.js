import React from 'react';
import bannerImage from '../../img/contact.jpg';
import './CotactUs.css';

const ContactUs = () => {

    const handleFormSubmit = event => {
        event.preventDefault()
    }
    return (
        <>
            <div class="hero min-h-screen bg-success">
                <div class="contact-img flex-col hero-content lg:flex-row-reverse">
                    <img width={600} src={bannerImage} class="max-w-sm rounded-lg shadow-2xl" />
                    <div className='contact-text'>
                        <h1 class="mb-5 text-5xl font-bold">
                            Hello there
                        </h1>
                        <p class="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <div className='w-3/4 mx-auto my-20 '>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 '>
                    <div className='mx-20'>
                        <h2 className=' font-bold text-start my-10'>SEND A MESSAGE</h2>
                        <h2 className='text-2xl font-bold mb-10'>Let's start talking with our staff to help you.</h2>
                        <p>Hey, gay's are you looking our services and whats you are wanted from us. Please message in here your details then we will replay quickly.</p>
                    </div>

                    <div>
                        <h4 className='mb-5 text-2xl font-bold'>Please Give Your Feedback:</h4>
                        <form onSubmit={handleFormSubmit} >
                            <input type="text" placeholder="Name" class="input input-bordered input-secondary w-full max-w-xs mb-2" required />
                            <input type="text" placeholder="Service Name" class="input input-bordered input-secondary w-full max-w-xs mb-2" required />
                            <input type="email" placeholder="Email" class="input input-bordered input-secondary w-full max-w-xs mb-2" required />
                            <input type="password" placeholder="Password" class="input input-bordered input-secondary w-full max-w-xs mb-2" required />
                            <textarea type="text" placeholder="Message" class="input input-bordered input-secondary w-full max-w-xs mb-2 h-40" required />
                            <button type='submit' class="btn btn-wide w-full max-w-xs">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;