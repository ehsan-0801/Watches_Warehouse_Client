import React, { useRef } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './SignIn.css'
import google from '../../images/social/google.png';
import github from '../../images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle, useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import { sendPasswordResetEmail } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../PageTitle/PageTitle';
import axios from 'axios';
const SignIn = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth)

    const emailPasswordLogin = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('https://watch-api-izma.onrender.com/signin', { email });
        localStorage.setItem('accessToken', data.accessToken);
        // console.log(data);
        navigate(from, { replace: true });
    }

    const [signInWithGoogle, googleuser, googleloading, googleerror] = useSignInWithGoogle(auth);
    const navigate = useNavigate();


    let errors;


    if (googleerror || error) {
        errors = <p className='container text-danger bg-custom p-2 border border-2 rounded shadow w-50'>Error: { googleerror?.message }  { error?.message }</p>
    }


    if (googleloading || loading) {
        return <Loading></Loading>;
    }

    if (googleuser) {
        navigate(from, { replace: true });
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email has been sent');
        }
        else {
            toast('please enter your email address');
        }
    }

    // if (user) {

    // }
    return (
        <div style={ { backgroundColor: 'powderblue' } } className="p-5">
            <PageTitle title="Please SignIn"></PageTitle>
            { errors }
            <ToastContainer></ToastContainer>
            <h2 style={ { color: 'burlywood' } } className="text-center fw-bold fs-1">Login Here Please</h2>

            <div className="form mx-auto my-5">
                <Form onSubmit={ emailPasswordLogin } >
                    <Form.Group as={ Row } className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={ 2 }>
                            Email
                        </Form.Label>
                        <Col sm={ 10 }>
                            <Form.Control ref={ emailRef } type="email" placeholder="Email" required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={ Row } className="mb-3" controlId="formHorizontalPassword">
                        <Form.Label column sm={ 2 }>
                            Password
                        </Form.Label>
                        <Col sm={ 10 }>
                            <Form.Control ref={ passwordRef } type="password" placeholder="Password" required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={ Row } className="mb-3">
                        <Col sm={ { span: 10, offset: 2 } }>
                            <Button type="submit" variant="Loginbtn w-100 mx-auto d-block mb-2">Sign in</Button>
                        </Col>
                    </Form.Group>
                </Form>
                <div className="mx-auto d-flex justify-content-center align-items-center">
                    <div className="">
                        <p className="mx-auto text-primary">Exploring First Time?</p>
                    </div>
                    <div className="">
                        <p><Link to="/signup" className='mx-auto btn-signup pe-auto text-decoration-none' >Sign Up please</Link></p>
                    </div>
                </div>
                <div>
                    <h2 className='border-top border-bottom p-3'>You can also sign in with</h2>
                </div>
                <div className="row">
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <button
                            onClick={ () => signInWithGoogle() }
                            className='btn btn-light d-flex mx-auto my-2'>
                            <img style={ { width: '30px' } } src={ google } alt="" />
                            <span className='px-2'>Sign in with Google</span>
                        </button>
                    </div>
                </div>
                <div className="mx-auto d-flex justify-content-center align-items-center">
                    <div className="">
                        <p className="mx-auto">Forget Password?</p>
                    </div>
                    <div className="">
                        <p><button onClick={ resetPassword } className='mx-auto btn-reset pe-auto text-decoration-none' >Please Reset Here</button></p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default SignIn;