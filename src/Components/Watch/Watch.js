import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './Watch.css'
const Watch = ({ watch }) => {
    const { _id, name, img, description, price, quantity, SoldAmount, SupplierName } = watch;
    const navigate = useNavigate();

    const navigateWatchDetails = _id => {
        navigate(`/inventory/${_id}`);
    }
    return (
        <div className="card px-4 pt-3 mb-3" style={ { width: "25rem" } }>
            <img src={ img } className="card-img-top" style={ { height: "20rem" } } alt="..." />
            <div className="card-body">
                <h5 className="card-title">{ name }</h5>
                <div className="d-flex justify-content-between px-4">
                    <p className="">price: { price }</p>
                    <p className="">Quantity: { quantity }</p>
                </div>
                <div className="d-flex justify-content-between px-4">
                    <p className="">Sold: { SoldAmount }</p>
                    <p className="">Provider: { SupplierName }</p>
                </div>
                <button onClick={ () => navigateWatchDetails(_id) } className="btn btn-primary">Update</button>
            </div>
        </div>

    );
};

export default Watch;