import React from 'react';
import frame from '../../../images/logos/Frame.png'
import './HeaderMain.css'
const HeaderMain = () => {
    return (
        <div className="">
            <div className='row offset-sm-1  align-items-center'>
                <div className="col-md-4 col-12">
                    <h1 style={{ fontWeight: '800', color: '#222133' }}>Let's Grow Your <br /> Brand To The <br /> Next Level</h1>
                    <p style={{ fontWeight: '600', color: '#6b592a' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque exercitationem nobis praesentium nostrum explicabo soluta!</p>
                    <button className="btn btn-dark">Hire us</button>
                </div>
                <div className="col-md-6 col-12">
                    <img className='img-fluid' src={frame} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;