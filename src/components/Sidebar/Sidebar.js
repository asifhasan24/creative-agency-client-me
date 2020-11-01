
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faShoppingCart, faConciergeBell, faCartPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logos/logo.png'
import { userInfo } from '../../App';
const Sidebar = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(userInfo);
    const [admins, setAddmins] = useState([])
    useEffect(() => {
        fetch('https://enigmatic-dusk-58690.herokuapp.com/admins')
            .then(res => res.json()
                .then(data => setAddmins(data)))
    }, [])
    const findAdmin = admins.find(admin => loggedInUser.email === admin.email)
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <img className='mb-3' height='50px' src={logo} alt="" />
                </li>
                {
                    !findAdmin ?
                        <div>
                            <li>
                                <Link to="/customerOrder/5f88985209224e1cbc7b5f3c" className={props.PlaceOrder ? props.PlaceOrder : 'text-dark'}>
                                    <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/customerServicesList" className={props.customerService ? props.customerService : 'text-dark'}>
                                    <FontAwesomeIcon icon={faConciergeBell} /> <span>Service List</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/review" className={props.review ? props.review : 'text-dark'}>
                                    <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                                </Link>
                            </li>
                        </div> :
                        <div>
                            <li>
                                <Link to="/adminServicesList" className={props.adminService ? props.adminService : 'text-dark'}>
                                    <FontAwesomeIcon icon={faConciergeBell} /> <span>Service List</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/Addservices" className={props.addService ? props.addService : 'text-dark'}>
                                    <FontAwesomeIcon icon={faCartPlus} /> <span>Add service</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/makeAdmin" className={props.addAdmin ? props.addAdmin : 'text-dark'}>
                                    <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                                </Link>
                            </li>
                        </div>

                }
            </ul>

        </div>
    );
};

export default Sidebar;
