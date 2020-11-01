import React, { useContext, useEffect, useState } from 'react';
import { userInfo } from '../../App';
import Sidebar from '../Sidebar/Sidebar';
import gif from '../../images/loading2.gif'
import './CustomerStatus.css'
const CustomerStatus = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userInfo);
    const [orders, setOrders] = useState([]);
    const [loading, SetLoading] = useState(true);
    useEffect(() => {
        fetch('https://enigmatic-dusk-58690.herokuapp.com/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                SetLoading(false)
            })
    }, [])
    return (
        <section className="container-fluid row">
            <Sidebar customerService='active'></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0 }}>
                <div className="d-flex justify-content-between">
                    <h5 className="text-brand mt-4">Customer Status</h5>
                    <h5 className="text-brand mt-4">{loggedInUser.displayName}</h5>
                </div>
                <div className='mt-5' style={{ backgroundColor: "#f4f7fc", height: '100vh' }}>
                    <div className="p-5">
                        <div className='row ml-3'>
                            {
                                orders.map(order => {
                                    return [
                                        <div class="col-12 col-md-4 mt-3 border" style={{ borderRadius: '15px', backgroundColor: 'white' }}>
                                            <div className="d-flex justify-content-between pl-4 pt-4">
                                                <img height='40px' className='rounded img fluid' src={`data:image/png;base64,${order.image.img}`} alt="" />
                                                <button className={`${order.status}-status`}>{order.status}</button>
                                            </div>
                                            <div class="card-body">
                                                <h5 class="card-title">{order.title}</h5>
                                                <p class="card-text">{order.description}</p>
                                            </div>
                                        </div>
                                    ]
                                })
                            }
                        </div>
                        {loading && <img src={gif} alt="" />}


                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomerStatus;