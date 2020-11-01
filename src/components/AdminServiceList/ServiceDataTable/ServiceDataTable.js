import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import './ServiceDataTable.css'
import gif from '../../../images/loading2.gif'
const ServiceDataTable = ({ orderList, loading }) => {
    const handlePending = (find, id, index) => {
        const value = document.getElementById(find).innerText;
        document.getElementById(`value${index}`).innerText = value;
        if (document.getElementById(`value${index}`).innerText === 'Done') {
            document.getElementById(`value${index}`).style.color = '#58b984'
        }
        if (document.getElementById(`value${index}`).innerText === 'Pending') {
            document.getElementById(`value${index}`).style.color = '#ff5858'
        }
        if (document.getElementById(`value${index}`).innerText === 'On-going') {
            document.getElementById(`value${index}`).style.color = '#ffc14b'
        }
        const product = { status: value }
        fetch(`https://enigmatic-dusk-58690.herokuapp.com/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)

        })
    }
    return (
        <table className="table table-borderless bg-table">
            <thead className='table-header'>
                <tr>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Email ID</th>
                    <th className="text-secondary" scope="col">Service</th>
                    <th className="text-secondary" scope="col">Project Details</th>
                    <th className="text-secondary" scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    orderList.map((order, index) =>

                        <tr>
                            <td>{order.displayName}</td>
                            <td>{order.email}</td>
                            <td>{order.title}</td>
                            <td>{order.description}</td>
                            <td>
                                <Dropdown>
                                    <Dropdown.Toggle className={order.status} variant="none" id={`value${index}`}>
                                        {order.status}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item id={`Done${index}`} onClick={() => handlePending(`Done${index}`, `${order._id}`, `${index}`)}>Done</Dropdown.Item>
                                        <Dropdown.Item id={`pending${index}`} onClick={() => handlePending(`pending${index}`, `${order._id}`, `${index}`)}>Pending</Dropdown.Item>
                                        <Dropdown.Item id={`going${index}`} onClick={() => handlePending(`going${index}`, `${order._id}`, `${index}`)} >On-going</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                    )
                }
            </tbody>
            {loading && <img width='100px' src={gif} alt="" />}
        </table>
    );
};

export default ServiceDataTable;