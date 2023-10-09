import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import PageTitle from '../PageTitle/PageTitle';
const MyItems = () => {
    const [user] = useAuthState(auth);
    // console.log(user);
    const [watches, setWatches] = useState([]);

    const handleDelete = watchId => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://watch-api-izma.onrender.com/items/${watchId}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = watches.filter(watch => watch._id !== watchId);
                    setWatches(remaining);
                })
        }
    }
    useEffect(() => {
        fetch("https://watch-api-izma.onrender.com/items")
            .then(res => res.json())
            .then(data => setWatches(data));
    }, [])

    return (
        <div className="container my-2 p-5">
            <PageTitle title="My Items"></PageTitle>
            <h2 className="text-primary fs-1 fw-bold">Only My Items Here</h2>
            <div className="watch-container">
                {
                    watches.filter(watch => watch.userId === user.uid).map(watch =>
                        <div className='watch'>
                            <img className='w-100' src={ watch.img } alt="" />
                            <h2>{ watch.name }</h2>
                            <p>Price: { watch.price }</p>
                            <p>Quantity: { watch.quantity }</p>
                            <p>Supplier: { watch.SupplierName }</p>
                            <p><small>{ watch.description }</small></p>
                            <button className='btnDelete' onClick={ () => handleDelete(watch._id) }>Delete</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyItems;