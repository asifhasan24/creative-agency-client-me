import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="bg-footer mt-5 pt-5">
            <div className='row   offset-sm-1'>
                <div className="col-12 col-md-6 mt-5">
                    <h2>Let us handle your <br /> project,professionally</h2>
                    <small style={{ color: '#967c3a' }}>With well written codes,we build amazing apps for all <br /> platform,mobile and web apps in general.</small>
                </div>
                <div className="col-12 mt-5 col-md-6 ">
                    <input type="text" placeholder='Your Email Adress' name="" id="" className="inp-footer" /><br /><br />
                    <input type="text" placeholder='Your Name' name="" id="" className="inp-footer" /><br /><br />
                    <textarea type="text" placeholder='Your Message' name="" id="" rows='3' className='inp-message' /><br /><br />
                    <button className="btn btn-dark">Send</button>
                </div>
            </div>
            <div style={{ opacity: '.6' }} className="text-center mt-3">
                <small>copyright orangr labs 2020</small>
            </div>
        </div>
    );
};

export default Footer;