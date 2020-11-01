import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { userInfo } from '../../App';
import Sidebar from '../Sidebar/Sidebar';
import './AddReview.css'
const AddReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userInfo);
    const [review, setReview] = useState([])
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...review };
        newInfo[e.target.name] = e.target.value;
        setReview(newInfo);
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', review.name);
        formData.append('description', review.description);
        formData.append('designation', review.designation);
        fetch('https://enigmatic-dusk-58690.herokuapp.com/addReview', {
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
            <Sidebar review='active'></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0 }}>
                <div className="d-flex justify-content-between">
                    <h5 className="text-brand mt-4">Feedback</h5>
                    <h5 className="text-brand mt-4">{loggedInUser.displayName}</h5>
                </div>
                <div className='mt-3' style={{ backgroundColor: "#f4f7fc", height: '100vh' }}>
                    <div className="p-5">
                        <form onSubmit={handleSubmit} style={{ borderRadius: '15px' }}>

                            <div className="form-group pl-4 pt-4">
                                <label style={{ fontWeight: 700 }} htmlFor="exampleInputEmail1">Your Name</label><br />
                                <input onBlur={handleBlur} type="text" required className="inp-name" name="name" placeholder="Ente Name" />
                            </div>

                            <div className="d-flex">
                                <div className="form-group pl-4">
                                    <label style={{ fontWeight: 700 }} htmlFor="exampleInputPassword1">Designation</label><br />
                                    <textarea rows='4' onBlur={handleBlur} type="text" required className="inp" name="designation" placeholder="Company name/ Designation" />
                                </div>
                                <div className="form-group pl-4">
                                    <label style={{ fontWeight: 700 }} htmlFor="exampleInputPassword1">Icon</label><br />
                                    <input onChange={handleFileChange} type="file" className="inp-file" id="file" required placeholder="Picture" />
                                    <label className='review-level' style={{ fontWeight: 700 }} for="file">
                                        <FontAwesomeIcon icon={faCloudUploadAlt} /><span>Upload a Image</span></label>
                                </div>
                            </div>
                            <div className="form-group pl-4">
                                <label style={{ fontWeight: 700 }} htmlFor="exampleInputPassword1">Desription</label><br />
                                <textarea rows='4' onBlur={handleBlur} type="text" className="inp-descrip" name="description" required placeholder="Enter Description" />
                            </div>
                            <button type="submit" className="btn-send btn-dark ml-4">Send</button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddReview;