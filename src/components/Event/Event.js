import React, { useState } from 'react';
import './Event.css';
import eventPhoto from '../../images/extraVolunteer.png';

const Event = (props) => {
    const {event, date, _id} = props.eventDetail;
    return (
        <div className="col-md-6 mt-4">
            <div className="d-flex justify-content-center">
                <div className="event-photo">
                    <img className="card-img-top" src={eventPhoto} style={{width: '194px', height: '173px'}} alt="Card image" />
                </div>
                <div className="event-detail ml-3">
                    <h3 className="event-name">{event}</h3>
                    <h5 className="event-date">{date}</h5>
                    <button className="btn btn-primary ml-5 px-5 mt-4">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default Event;