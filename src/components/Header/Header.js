import React from 'react';
import './Header.css';
import logo from '../../images/logos/Group 1329.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
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
                        <Link className="nav-link ml-4" to="/event">Events</Link>
                        <Link className="nav-link ml-4" to="/">Blog</Link>
                        </div>
                        <Link className="btn btn-register ml-4 px-5" to="/register">Register</Link>
                        <Link className="btn btn-admin ml-4 px-5" to="/admin">Admin</Link>
                    </div>
                </div>
            </nav> 
        </div>
    );
};

export default Header;