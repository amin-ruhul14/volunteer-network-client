import React, { useContext, useEffect, useState } from 'react';
import './EvenTasks.css';
import logo from '../../images/logos/Group 1329.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Event from '../Event/Event';

const EvenTasks = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [event, setEvent] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/volunteers')
        .then(res => res.json())
        .then(data => setEvent(data))
    }, [])
    return (
        <div className="even-tasks">
            <div className="container">
                <div className="header">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="navbar-brand" to="/">
                            <img className="logo" src={logo} alt="Logo"/>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="navbar-nav ml-auto">
                            <Link className="nav-link ml-4" to="/">Home</Link>
                            <Link className="nav-link ml-4" to="/">Donation</Link>
                            <Link className="nav-link ml-4" to="/">Events</Link>
                            <Link className="nav-link ml-4" to="/">Blog</Link>
                            <p className="user-name ml-4 py-2">{loggedInUser.name}</p>
                            </div>
                        </div>
                    </nav> 
                </div>
                <div className="row mt-5">
                    {
                        event.map(eventDetail => <Event eventDetail={eventDetail}></Event>)
                    }
                </div>
            </div>
        </div>
    );
};

export default EvenTasks;