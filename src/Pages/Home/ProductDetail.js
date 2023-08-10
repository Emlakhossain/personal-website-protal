import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ props }) => {
    const { name, id } = useParams();
    console.log(props);

    return (
        <div>
            <h1>product:{name}</h1>
        </div>
    );
};

export default ProductDetail;