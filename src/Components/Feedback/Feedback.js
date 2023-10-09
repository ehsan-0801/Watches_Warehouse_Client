import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
const Feedback = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://watch-api-izma.onrender.com/feedback`;
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
        <div className="container">
            <form className='w-50 mx-auto d-flex flex-column ItemsForm' onSubmit={ handleSubmit(onSubmit) }>
                <h2>Send Us Your valuable Feedback</h2>
                <input className='mb-2' placeholder='email' { ...register("email") } />
                <textarea className='mb-2' placeholder='Send Us Your Feedback' { ...register("description") } />
                <input type="submit" className="btn" value="Send" />
            </form>
        </div>
    );
};

export default Feedback;