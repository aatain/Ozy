import React from 'react';

const Events = props => {
    console.log(props.event)
    return (
        <div className='event col-md-4 mt-4' style={{width: "18em"}}>
            <img className="event-logo img-fluid img-thumbnail mb-2" alt="Responsive image" src={props.event.logo !== null ? props.event.logo.url : ''} />
            <div class="card-body">
                <h2 className="text-center event-title card-title">{props.event.name.text}</h2>
                <p className='lead text-info'>Event Information:</p>
                <p className='card-text'>{props.event.description.text !== null ? props.event.description.text.substring(0, 300) : ''}...</p>
                <p className='subcategory badge'>#{props.event.subcategory_id}</p>
                <p className='DataTime badge'>Date & Time: {props.event.start.local}</p>
                <a href={props.event.url} target="_blank">Get Tickets</a>
            </div>
        </div>
    )
}

export default Events;