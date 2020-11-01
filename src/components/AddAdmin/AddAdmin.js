import React, { useContext, useState } from 'react';
import { userInfo } from '../../App';
import './AddAdmin.css'
import Sidebar from '../Sidebar/Sidebar';

const AddAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userInfo);
    const [admin, setAdmin] = useState([])
    const handleBlur = (e) => {
        const newAdmin = { ...admin }
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin);
    }
    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('email', admin.email);
        fetch('https://enigmatic-dusk-58690.herokuapp.com/addAdmin', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
        e.preventDefault();
    }
    return (
        <section className="container-fluid row">
            <Sidebar addAdmin='active'></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0 }}>
                <div className="d-flex justify-content-between">
                    <h5 className="text-brand mt-4">Add Admin</h5>
                    <h5 className="text-brand mt-4">{loggedInUser.displayName}</h5>
                </div>
                <div className='mt-3' style={{ backgroundColor: "#F4FDFB", height: '100vh' }}>
                    <div className="p-5">
                        <form onSubmit={handleSubmit} className='bg-light' style={{ borderRadius: '15px' }}>
                            <input onBlur={handleBlur} type="text" className="inp-title" name="email" required placeholder="Enter email" />
                            <button className="btn-add">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );

};

export default AddAdmin;