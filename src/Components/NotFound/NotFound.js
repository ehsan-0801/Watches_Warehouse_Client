import React from 'react';
import notfound from '../../images/Notfound.jpg';
const NotFound = () => {
    return (
        <div style={ { backgroundColor: 'powderblue' } } className="p-5">
            <div className="container my-3 p-5">
                <img src={ notfound } alt="" />
            </div>
        </div>
    );
};

export default NotFound;