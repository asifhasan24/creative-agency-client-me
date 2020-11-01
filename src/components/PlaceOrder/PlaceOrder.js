import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { userInfo } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

import Sidebar from '../Sidebar/Sidebar';
import './PlaceOrder.css'
const PlaceOrder = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userInfo);
    const { _id } = useParams()
    const [order, setOrder] = useState({})
    useEffect(() => {
        fetch(`https://enigmatic-dusk-58690.herokuapp.com/services/${_id}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])
    const handleSubmit = (e) => {
        const newOrder = { ...loggedInUser, _id: loggedInUser.email + order._id, title: order.title, description: order.description, image: order.image, status: 'Done' }
        fetch('https://enigmatic-dusk-58690.herokuapp.com/Addorders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        e.preventDefault();
    }
    return (
        <section className="container-fluid row">
            <Sidebar PlaceOrder='active'></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0 }}>
                <div className="d-flex justify-content-between">
                    <h5 className="text-brand mt-4">Order</h5>
                    <h5 className="text-brand mt-4">{loggedInUser.displayName}</h5>
                </div>
                <div className='mt-3' style={{ backgroundColor: "#f4f7fc", height: '100vh' }}>
                    <div className="p-5">
                        <form onSubmit={handleSubmit} style={{ borderRadius: '15px' }}>

                            <div className="form-group pl-4 pt-4">
                                <input type="text" className="inp-order" value={loggedInUser.displayName} name="name" />
                            </div>

                            <div className="form-group pl-4">
                                <input type="email" className="inp-order" value={loggedInUser.email} />
                            </div>
                            <div className="form-group pl-4">
                                <input type="text" className="inp-order" value={order.title} />
                            </div>
                            <div className="form-group pl-4">
                                <textarea type="text" className="inp-details" rows='4' value={order.description} />
                            </div>
                            <div className="d-flex">
                                <div className="form-group pl-4">
                                    <input type="text" className="inp-price" value='$25' />
                                </div>
                                <div className="form-group">
                                    <div className='ml-5 btn-image '>
                                        <FontAwesomeIcon icon={faCloudUploadAlt} /> <span>Upload a Image</span>
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="btn-order btn-dark ml-4">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlaceOrder;