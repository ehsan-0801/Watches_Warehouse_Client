import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import PageTitle from '../../PageTitle/PageTitle';
import './Insertwatch.css'
const Insertwatch = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    console.log(user)
    const onSubmit = data => {
        console.log(data);
        const url = `https://watch-api-izma.onrender.com/items`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                window.alert('Watch Added Successfully')
                console.log(result);
            })
    };
    return (
        <div className='itemsaddingpage'>
            <PageTitle title="Add Items Page"></PageTitle>
            <form className='w-50 mx-auto d-flex flex-column ItemsForm' onSubmit={ handleSubmit(onSubmit) }>
                <h2>Adding Watch to the Inventory</h2>
                <input className='mb-2' placeholder='Name' { ...register("name") } />
                <textarea className='mb-2' placeholder='Please Write something About Product' { ...register("description") } />
                <input className='mb-2' placeholder='Price' type="number" { ...register("price") } />
                <input className='mb-2' placeholder='Quantity' type="number" { ...register("quantity") } />
                <input className='mb-2' placeholder='Supplier Name' { ...register("SupplierName") } />
                <input className='mb-2' value={ user.uid } type="text" placeholder='userId' readOnly { ...register("userId") } />
                <input className='mb-2' placeholder='Already Sold' type="number" { ...register("SoldAmount") } />
                <input className='mb-2' placeholder='Image Link' type="text" { ...register("img") } />
                <input type="submit" className="btn" value="Insert" />
            </form>
        </div>
    );
};

export default Insertwatch;