import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './WatchDetails.css'
const WatchesDetails = () => {
    const { id } = useParams();
    const [watch, setWatch] = useState({});
    useEffect(() => {
        const url = `https://watch-api-izma.onrender.com/items/${id}`;
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setWatch(data));

    }, []);

    const addQuantity = (event) => {
        event.preventDefault();
        console.log(addQuantity);
        let UpdatedWatchQuantity = parseFloat(+watch.quantity) + parseFloat(event.target.watchQuantity.value);
        let newWatch = {
            name: watch.name,
            description: watch.description,
            img: watch.img,
            price: watch.price,
            userId: watch.userId,
            SupplierName: watch.SupplierName,
            quantity: UpdatedWatchQuantity,
            SoldAmount: watch.SoldAmount
        }
        console.log(newWatch);
        setWatch(newWatch);
        // const url = ;
        fetch(`https://watch-api-izma.onrender.com/items/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newWatch)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                event.target.reset();
                toast('Stock Updated')
            })
    }
    const ReduceQuantity = () => {
        console.log(ReduceQuantity);
        let UpdatedWatchQuantity = parseInt(+watch.quantity) - 1;
        let UpdatedWatchSoldAmount = parseInt(+watch.SoldAmount) + 1;
        let newWatch = {
            name: watch.name,
            description: watch.description,
            img: watch.img,
            price: watch.price,
            userId: watch.userId,
            SupplierName: watch.SupplierName,
            quantity: UpdatedWatchQuantity,
            SoldAmount: UpdatedWatchSoldAmount
        }
        console.log(newWatch);
        setWatch(newWatch);
        // const url = ;
        fetch(`https://watch-api-izma.onrender.com/items/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newWatch)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast('1 piece sold')
            })
    }

    return (

        <div className="p-3 bgCustom">
            <ToastContainer></ToastContainer>
            <div className='container'>
                <div className="row">
                    <div className='col-md-6 p-4'>
                        <img className='w-100' src={ watch.img } alt="watch" />
                    </div>
                    <div className='col-md-6 p-4'>
                        <div>
                            <h2 className='text-start'>Product Name: <span className='text-secondary'> { watch.name }</span></h2>
                            <p className='text-start fs-4 fw-bold'>PRICE:<span>{ watch.price } Bdt</span></p>
                            <p className='text-start fs-5'>Supplier:<span>{ watch.SupplierName } Bdt</span></p>
                            <p className='text-start fs-5'>Available:<span>{ watch.quantity } </span></p>
                            <p className='text-start fs-5'>Sold:<span>{ watch.SoldAmount } </span></p>
                            <p className='text-start fs-5'>Product Detail:</p>
                            <p className='text-start fs-6'>{ watch.description }</p>
                            <form onSubmit={ addQuantity } className='text-start border border-3 w-50 p-3'>
                                <input type="number" className='py-2' name="watchQuantity" placeholder="Add To Stock" />
                                <input type="submit" value="ADD" className="btn btn-primary w-full" />
                            </form>
                            <button onClick={ () => ReduceQuantity() } className="btn btn-primary">Delivered</button>

                        </div>
                    </div>
                </div>

            </div>

            {/* <Table striped bordered hover variant="secondary" className="container">
                <thead>
                    <tr>
                        <th>Details About Watch</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img className="tableimg" src={ watch.img } alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td><span className="text-dark fw-bold">PRODUCT ID: </span>{ watch._id }</td>
                    </tr>
                    <tr>
                        <td><span className="text-dark fw-bold">NAME: </span>{ watch.name }</td>
                    </tr>
                    <tr>
                        <td>{ watch.description }</td>
                    </tr>
                    <tr>
                        <td><span className="text-dark fw-bold">PRICE: </span>{ watch.price }</td>
                    </tr>
                    <tr>
                        <td><span className="text-dark fw-bold">SUPPLIER: </span>{ watch.SupplierName }</td>
                    </tr>

                    <tr>
                        <td><span className="text-dark fw-bold">STOCK: </span>{ watch.quantity }</td>
                    </tr>
                    <tr>
                        <td><span className="text-dark fw-bold">SOLD: </span>{ watch.SoldAmount }</td>
                    </tr>
                    <tr>
                        <td>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={ () => ReduceQuantity() } className="btn btn-primary">Delivered</button>
                        </td>
                    </tr>
                </tbody>
            </Table> */}
        </div>
    );
};

export default WatchesDetails;