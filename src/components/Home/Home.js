import React, { useEffect, useState } from 'react';
import './Home.css';
import Header from '../Header/Header';
import EventCard from '../EventCard/EventCard';

const Home = () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('https://safe-crag-34346.herokuapp.com/tasks')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])
    return (
        <div className="home text-center mb-5">
            <div className="container">
                <Header></Header>
                <div className="hero mt-5">
                    <h1 className="hero-title">I grow by helping people in need.</h1>
                    <div className="input-group mt-4">
                        <input type="text" className="form-control p-4" placeholder="Search...." />
                        <button className="btn-search px-4" type="button">Search</button>
                    </div>
                </div>
                <div className="row mt-5">
                    {
                        tasks.map(eventCard => <EventCard eventCard={eventCard}></EventCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;