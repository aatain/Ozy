import React from 'react';

const Events = props => {
    console.log(props, 'eventssss')
    return (
        <div className='events' style={{ textAlign: 'center' }}>
            <img className="img eventLogo" src={props.event.logo !== null ? props.event.logo.url : ''} />
            <h2>{props.event.name.text}</h2>
            <p className='text-info'>Event Information:</p>
            <p>{props.event.description.text !== null ? props.event.description.text.substring(0,300) : ''}...</p>
            <p className='DataTime'>Date & Time: {props.event.start.local}</p>
            <a href={props.event.url} target="_blank">Get Tickets</a>
        </div>
    )
}

export default Events;