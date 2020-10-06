import React from 'react';

const Volunteer = (props) => {
    const {name, email, date, event} = props.eventVolunteer;
    return (
        <div className="row">
            <div className="col-md-3">
                <p>{name}</p>
            </div>
            <div className="col-md-3">
                <p>{email}</p>
            </div>
            <div className="col-md-3">
                <p>{date}</p>
            </div>
            <div className="col-md-3">
                <p>{event}</p>
            </div>
        </div>
    );
};

export default Volunteer;