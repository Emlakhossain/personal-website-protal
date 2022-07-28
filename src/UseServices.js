import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const UseServices = () => {
    const [useServices, setUseServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setUseServices(data))
    }, [])
    return (
        <div>

        </div>
    );
};

export default UseServices;