import React, { useContext, useState } from 'react';
import { userInfo } from '../../App';
import Sidebar from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import './AddServices.css'
const AddServices = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userInfo);
    const [info, setInfo] = useState([]);
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleSubmit = (e) => {
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);

        fetch('https://enigmatic-dusk-58690.herokuapp.com/addServices', {
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
        e.preventDefault()
    }
    return (
        <section className="container-fluid row">
            <Sidebar addService='active'></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0 }}>
                <div className="d-flx justify-content-between">
                    <h5 className="text-brand mt-4">Add Services</h5>
                    <h5 className="text-brand mt-4">{loggedInUser.displayName}</h5>
                </div>
                <div className='mt-3' style={{ backgroundColor: "#f4f7fc", height: '100vh' }}>
                    <div className="p-5">
                        <form onSubmit={handleSubmit} className='bg-white' style={{ borderRadius: '15px' }}>
                            <div className="d-flex">
                                <div className="form-group pl-4 pt-4">
                                    <label style={{ fontWeight: 700 }} htmlFor="exampleInputEmail1">Service Title</label><br />
                                    <input onBlur={handleBlur} type="text" required className="inp-title" name="title" placeholder="Enter title" />
                                </div>
                                <div className="form-group pl-4 pt-4">
                                    <label style={{ fontWeight: 700 }} htmlFor="exampleInputPassword1">Icon</label><br />
                                    <input onChange={handleFileChange} required type="file" className="input-file" id="file" placeholder="Picture" />
                                    <label className='file-level' style={{ fontWeight: 700 }} for="file">
                                        <FontAwesomeIcon icon={faCloudUploadAlt} /><span>Upload a Image</span></label>
                                </div>
                            </div>
                            <div className="form-group pl-4">
                                <label style={{ fontWeight: 700 }} htmlFor="exampleInputPassword1">Description</label><br />
                                <textarea rows='4' required onBlur={handleBlur} type="text" className="inp-des mb-2" name="description" placeholder="Enter Designation" />
                            </div>

                            <div className="d-flex justify-content-end">
                                <button type="submit" className="btn-submit m-2">Submit</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddServices;