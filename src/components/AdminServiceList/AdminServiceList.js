import React, { useContext, useEffect, useState } from 'react';
import { userInfo } from '../../App';
import Sidebar from '../Sidebar/Sidebar';
import ServiceDataTable from './ServiceDataTable/ServiceDataTable';

const AdminServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userInfo);
    const [orderList, setOrderList] = useState([])
    const [loading, SetLoading] = useState(true);
    useEffect(() => {
        fetch('https://enigmatic-dusk-58690.herokuapp.com/orderList')
            .then(res => res.json())
            .then(data => {
                setOrderList(data)
                SetLoading(false)
            })
    }, [])
    return (
        <div className="container-fluid row" >
            <Sidebar adminService='active'></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: '#f4f7fc', height: '100vh' }}>
                <div className="d-flex justify-content-between">
                    <h5 className="text-brand">Services List</h5>
                    <h5 className="text-brand">{loggedInUser.displayName}</h5>
                </div>
                <ServiceDataTable loading={loading} orderList={orderList}></ServiceDataTable>
            </div>
        </div>
    );
};

export default AdminServiceList;