import React, { useContext, useEffect } from 'react';
import './Admin.css';
import logo from '../../images/logos/Group 1329.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Volunteer from '../Volunteer/Volunteer.js';

const Admin = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('https://safe-crag-34346.herokuapp.com/volunteers')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    return (
        <div className="admin">
            <div className="container">
                <div className="header">
                    <nav class="navbar">
                        <Link className="navbar-brand" to="/">
                            <img className="logo" src={logo} alt="Logo" />
                        </Link>
                        <div className="header-title mr-auto ml-5">
                            <h3>Volunteer register list</h3>
                        </div>
                    </nav>
                </div>
                <div className="row mt-5 mb-4">
                    <div className="col-md-3">
                        <strong>Name</strong>
                    </div>
                    <div className="col-md-3">
                        <strong>Email ID</strong>
                    </div>
                    <div className="col-md-3">
                        <strong>Registration date</strong>
                    </div>
                    <div className="col-md-3">
                        <strong>Volunteer list</strong>
                    </div>
                </div>
                <div className="user">
                    {
                        user.map(eventVolunteer => <Volunteer eventVolunteer={eventVolunteer}></Volunteer>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Admin;