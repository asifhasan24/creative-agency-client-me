import React, { useEffect, useState } from 'react';
import slack from '../../../images/logos/slack.png'
import google from '../../../images/logos/google1.png'
import uber from '../../../images/logos/uber.png'
import netflix from '../../../images/logos/netflix.png'
import airbnb from '../../../images/logos/airbnb.png'
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import gif from '../../../images/loading.gif'
import './Services.css'
const Services = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('https://enigmatic-dusk-58690.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setService(data))

    }, [])
    return (
        <div>
            <div className="row justify-content-center offset-sm-1">
                <div className="col-12 col-sm-6 col-md-2">
                    <img className='mr-5 mt-3' height='50px' src={slack} alt="" />
                </div>
                <div className="col-12 col-sm-6 col-md-2">
                    <img className='mr-5 mt-3' height='50px' src={google} alt="" />
                </div>
                <div className="col-12 col-sm-6 col-md-2">
                    <img className='mr-4 mt-3' height='50px' src={uber} alt="" />
                </div>
                <div className="col-12 col-sm-6 col-md-2">
                    <img className='mr-4 mt-3' height='50px' src={netflix} alt="" />
                </div>
                <div className="col-12 col-sm-6 col-md-2">
                    <img className='mr-4 mt-3' height='50px' src={airbnb} alt="" />
                </div>

            </div>
            <div className="text-center mt-5 pt-5">
                <h1 style={{ color: '#404040' }}>Provide awesome <span className="text-color">services</span></h1>
            </div>

            <div className='d-flex justify-content-center'>
                <div className="row w-75">
                    {!service.length && <img src={gif} alt="" />
                    }
                    {
                        service.map(info => <ServiceDetails info={info}></ServiceDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;