import React, { useEffect, useState } from 'react';
import Client from './Client';

const ClientsFeedback = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        fetch('clients.json')
            .then(res => res.json())
            .then(data => setClients(data))
    }, [])
    return (
        <div>
            <h2 className='text-3xl text-center font-bold my-20'>Happy Clients:</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ml-10 mb-20'>
                {
                    clients.map(client => <Client
                        key={client.id}
                        client={client}
                    ></Client>)
                }
            </div>
        </div>
    );
};

export default ClientsFeedback;