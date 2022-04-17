import React from 'react';
import useFirebase from '../hooks/useFirebase';
import './Products.css'

const Products = () => {
    const {user} = useFirebase();
    return (
        <div className='body_tag'>
            <h2>knock knock ! who is there</h2>
            <h5>{user? user.displayName : 'Nobody is there right now'}</h5>
        </div>
    );
};

export default Products;