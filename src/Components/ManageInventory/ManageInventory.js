import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useWatch from '../../Hooks/useWatch';
import PageTitle from '../PageTitle/PageTitle';
import './ManageInventory.css';
const ManageInventory = () => {
    // const [watches, setWatches] = useState([]);
    const [watches, setWatches] = useWatch();

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

    return (
        <div id="Inventory" className="container-fluid watchsection my-5">
            <PageTitle title="Manage Inventory"></PageTitle>
            <div className='container'>
                <div className="row">
                    <div className="d-flex align-items-center">
                        <h1 className='text-center my-5 text-color mx-auto'>ALL ITEMS HERE</h1>
                        <div className=""><Link to='/insertwatch'><button className='btn btn-outline-primary'>Add Items</button></Link></div>
                    </div>
                    <div className="watch-container">
                        {
                            watches.map(watch => <div className='watch'>
                                <img className='w-100' src={ watch.img } alt="" />
                                <h2>{ watch.name }</h2>
                                <p>Price: { watch.price }</p>
                                <p>Stock: { watch.quantity }</p>
                                <p>Sold: { watch.SoldAmount }</p>
                                <p>Supplier: { watch.SupplierName }</p>
                                <p><small>{ watch.description }</small></p>
                                <button className='btnDelete' onClick={ () => handleDelete(watch._id) }>Delete</button>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageInventory;