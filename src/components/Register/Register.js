import React, { useContext, useState } from 'react';
import './Register.css';
import logo from '../../images/logos/Group 1329.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

const Register = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [loggedInDetail, setLoggedInDetail] = useState({ date: '', description: '', event: '' });
    const eventDetail = (event) => {
        setLoggedInDetail({ ...loggedInDetail, [event.target.name]: event.target.value })
    }
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleAddVolunteer = (event) => {
        event.preventDefault();
        const volunteer = { ...loggedInUser, ...loggedInDetail }
        fetch('https://safe-crag-34346.herokuapp.com/addVolunteer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(volunteer)
        })
            .then(res => res.json())
            .then(data => {
                history.push("/event");
            })
    }

    return (
        <div className="register my-5 ">
            <div className="container">
                <div className="register-header text-center">
                    <Link to="/">
                        <img src={logo} style={{ width: '202.81px' }} alt="login-header-logo" />
                    </Link>
                </div>
                <div className="create-account-form mt-5">
                    <div className="p-5">
                        <h2 className="register-title">Register as a Volunteer</h2>
                        <form onSubmit={handleAddVolunteer} className="mt-4" method="post">
                            <input className="form-control" defaultValue={loggedInUser.name} type="text" placeholder="Full Name" name="name" id="" />
                            <input className="form-control" defaultValue={loggedInUser.email} type="text" placeholder="Username and Email" name="email" id="" />
                            <input className="form-control" value={loggedInDetail.date} onChange={(event) => eventDetail(event)} type="date" placeholder="Date" name="date" id="" />
                            <input className="form-control" value={loggedInDetail.description} onChange={(event) => eventDetail(event)} type="text" placeholder="Description" name="description" id="" />
                            <input className="form-control" value={loggedInDetail.event} onChange={(event) => eventDetail(event)} type="text" placeholder="Event Name" name="event" id="" />
                            <button className="btn btn-register btn-block" type="submit">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;