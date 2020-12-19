import React from 'react';
import { Link } from 'react-router-dom';
import './EventCard.css';

const EventCard = (props) => {
    const { title, img } = props.eventCard;
    return (
        <Link className="col-md-3 mt-4" to="/login">
            <div className="card">
                <img className="card-img-top" src={img} alt="Card image" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                </div>
            </div>
        </Link>
    );
};

export default EventCard;