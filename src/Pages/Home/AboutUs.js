import React from 'react';

const AboutUs = () => {

    const handleFormSubmit = event => {
        event.preventDefault()
    }
    return (
        <div className='w-3/4 mx-auto mb-40'>
            <h2 className='text-3xl font-bold text-start my-20'>About Us</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 '>
                <div>
                    <h2>Welcome to my we site. I am JS web application developer last 2 years. If you visit my web site then you can known to all my services and our works capacity. </h2>
                    <div>
                        <video src="https://www.youtube.com/watch?v=B0aVOE4dV8o"></video>
                    </div>
                </div>

                <div>
                    <h4 className='mb-5'>Please Give Your Feedback:</h4>
                    <form onSubmit={handleFormSubmit} >
                        <input type="text" placeholder="Name" class="input input-bordered input-secondary w-full max-w-xs mb-2" required />
                        <input type="email" placeholder="Email" class="input input-bordered input-secondary w-full max-w-xs mb-2" required />
                        <input type="password" placeholder="Password" class="input input-bordered input-secondary w-full max-w-xs mb-2" required />
                        <textarea type="text" placeholder="Message" class="input input-bordered input-secondary w-full max-w-xs mb-2 h-40" required />
                        <button type='submit' class="btn btn-wide w-full max-w-xs">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;