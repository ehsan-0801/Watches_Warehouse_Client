import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Watch from '../Watch/Watch';
import './Watches.css'
const Watches = () => {

    const [watches, setWatches] = useState([]);

    useEffect(() => {
        fetch("https://watch-api-izma.onrender.com/items")
            .then(res => res.json())
            .then(data => setWatches(data));
    }, [])

    return (
        <div id="Inventory" className="container-fluid watchsection my-5">
            <div className='container'>
                <div className="row">
                    <h1 className='text-center my-5 text-color'>Inventory Items</h1>
                    <div className="watches-container">
                        {
                            watches.map(watch => <Watch
                                key={ watch._id }
                                watch={ watch }
                            >
                            </Watch>).slice(0, 6)
                        }
                    </div>
                    <div className="my-3">
                        <Link to="/manageInventory">
                            <button className="btn btn-primary">
                                Manage Inventory
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Watches;