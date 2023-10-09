import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="container-fluid mx-auto footer">
            <p>Copyright©{ (new Date().getFullYear()) }</p>
        </div>
    );
};

export default Footer;