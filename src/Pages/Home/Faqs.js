import React from 'react';

const Faqs = () => {
    return (
        <div>
            <h2 className='text-3xl text-center font-bold my-20 underline'>FAQS</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5 mx-auto ml-20'>
                <div className='w-3/4'>
                    <div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                        <input type="checkbox" class="peer" />
                        <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            what will benefit to you by this web site?
                        </div>
                        <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            <p>This website help to you about knowing our all statements thats my total work experiences.</p>
                        </div>
                    </div>
                    <div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                        <input type="checkbox" class="peer" />
                        <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            What type of services in here?
                        </div>
                        <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            <p>There are many type of services in here as like full stack development, Font end developments, Landing pages, Personal website and Graphic design.</p>
                        </div>
                    </div>
                    <div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                        <input type="checkbox" class="peer" />
                        <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            How can i know about your budgets?
                        </div>
                        <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            <p>Yes you can want to know whats type of budge in here. Please go to pricing page and see details.. </p>
                        </div>
                    </div>
                    <div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                        <input type="checkbox" class="peer" />
                        <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            What about your payment policy?
                        </div>
                        <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            <p>I have 3 types of payments get way systems are available as like VISA CARD, Bkash, Peyonner.</p>
                        </div>
                    </div>
                </div>
                <div className='w-3/4'>
                    <div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                        <input type="checkbox" class="peer" />
                        <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            What about your services for clients?
                        </div>
                        <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            <p>Yes, we have many difference type of services for you. First of all we have web development, digital marketing and SEO services are available. </p>
                        </div>
                    </div>
                    <div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                        <input type="checkbox" class="peer" />
                        <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            Are you expert of those services?
                        </div>
                        <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            <p>Yup, we have expertise following services at least 2years to 10 years. don't worry about it.</p>
                        </div>
                    </div>
                    <div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                        <input type="checkbox" class="peer" />
                        <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            How can i get service from you?
                        </div>
                        <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            <p>Already we have way to order any services you can click on Buy now button and flow this instructions. hopefully you may get service. </p>
                        </div>
                    </div>
                    <div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                        <input type="checkbox" class="peer" />
                        <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            Have any clime opportunity to you?
                        </div>
                        <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            <p>Yes, if you have face any problems you can clime our customer feedback side.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faqs;