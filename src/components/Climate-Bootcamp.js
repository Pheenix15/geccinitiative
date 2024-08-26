import React from 'react';
import { Link } from 'react-router-dom';
import {climateBootcampArray} from './projectArray';
import './Projects.css';

const ClimateBootcamp = () => {

    return (
        <div className="gecci-main-projects">
            <h4 className='heading text-green'>Climate Bootcamp</h4>
            <div className="projectContainer">
                {climateBootcampArray.map((climateBootcampArray) => (
                    <div key={climateBootcampArray.id} >
                        <Link to={climateBootcampArray.url}>
                            <div className="project-array-box">
                                <div className="project-array-img"><img src={climateBootcampArray.image} alt={climateBootcampArray.title} /></div>
                                <div className="project-array-info">
                                    <h5>{climateBootcampArray.title}</h5>
                                    <p><span className="bold">Date:</span>{climateBootcampArray.date}</p>
                                </div>
                            </div>
                            
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ClimateBootcamp;