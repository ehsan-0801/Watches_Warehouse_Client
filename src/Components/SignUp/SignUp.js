import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import Avatar from '../../images/user.png';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import PageTitle from '../PageTitle/PageTitle';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signup = () => {
    const [check, setCheck] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    const navigate = useNavigate();

    let errors;
    if (error) {
        errors = <p className='text-danger bg-custom p-2 border border-2 rounded'>Error: { error?.message }  </p>
    }

    if (loading) {
        return <Loading></Loading>
    }
    const navigateSignin = () => {
        navigate('/signin');
    }
    if (user) {
        console.log('user:', user);
    }
    const handleSignUp = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const ConfirmPassword = e.target.Cpassword.value;
        await createUserWithEmailAndPassword(email, password);
        toast("Email sent !!! Please verify")
    }
    return (
        <div className="signupPage">
            <PageTitle title="Please SignUp"></PageTitle>
            <form action="" className="container signUpform my-5" onSubmit={ handleSignUp }>
                <img className="formImage" src={ Avatar } alt="" />
                <h2>User Sign Up</h2>
                <div className="my-3 row">
                    <div className="col-md-4">
                        <label htmlFor="">Username</label>
                    </div>
                    <div className="col-md-8">
                        <input className="w-100" type="text" name="name" id="" placeholder="Username" required />
                    </div>
                </div>
                <div className="my-3">
                    <div className="my-3 row">
                        <div className="col-md-4">
                            <label htmlFor="">Email</label>
                        </div>
                        <div className="col-md-8">
                            <input className="w-100" type="email" name="email" id="" placeholder="Email" required />
                        </div>
                    </div>
                </div>
                <div className="my-3">
                    <div className="my-3 row">
                        <div className="col-md-4">
                            <label htmlFor="">Password</label>
                        </div>
                        <div className="col-md-8">
                            <input className="w-100" type="password" name="password" id="" placeholder="Password" required />
                        </div>
                    </div>
                </div>
                <div className="my-3">
                    <div className="my-3 row">
                        <div className="col-md-4">
                            <label htmlFor="">Confirm Password</label>
                        </div>
                        <div className="col-md-8">
                            <input className="w-100" type="password" name="Cpassword" id="" placeholder="Confirm Password" required />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6">
                        <input onClick={ () => setCheck(!check) } type="checkbox" name="terms" id="terms" />
                        <label className={ `ps-2 ${check ? 'text-success' : 'text-primary'}` } htmlFor="terms">Terms and Conditions</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6">
                        <input
                            disabled={ !check }
                            className='w-50 mx-auto btn btn-primary mt-2'
                            type="submit"
                            value="Register"
                        />
                    </div>
                </div>
                <p>Already have an account? <Link to="/signin" className='text-primary pe-auto text-decoration-none' onClick={ navigateSignin }>Please Login</Link> </p>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Signup;