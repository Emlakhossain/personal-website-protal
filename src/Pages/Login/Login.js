import React from 'react';

const Login = () => {
    return (
        <div class="hero min-h-screen  bg-base-200 ">
                  <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h2 className='text-2xl font-bold text-center mt-10'>Please Login</h2>
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" class="input input-bordered" required/>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" class="input input-bordered" required/>
                            <label class="label">
                                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className='text-center'>--------------or---------------</div>
                        <div className='flex gap-4 m-10'>
                            <div><button className='btn btn-success'>Logging With Google</button></div>
                            <div><button className='btn btn-success'>Logging With Facebook</button></div>
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default Login;