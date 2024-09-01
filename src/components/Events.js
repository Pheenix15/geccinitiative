import React from 'react';
import { Link } from 'react-router-dom';
import {eventsArray} from './projectArray';
import './Projects.css';

const Events = () => {

    return (
        <div className="gecci-main-projects">
            <h4 className='heading text-green'>Past/Upcoming Events</h4>
            <div className="projectContainer">
                {eventsArray.map((eventsArray) => (
                    <div key={eventsArray.id} >
                        <Link to={eventsArray.url}>
                            <div className="project-array-box">
                                <div className="project-array-img"><img src={eventsArray.image} alt={eventsArray.title} /></div>
                                <div className="project-array-info">
                                    <h5>{eventsArray.title}</h5>
                                    <p><span className="bold">Date:</span>{eventsArray.date}</p>
                                </div>
                            </div>
                            
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Events;