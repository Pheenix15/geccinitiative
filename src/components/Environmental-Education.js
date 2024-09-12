import React from 'react';
import { Link } from 'react-router-dom';
import {environmentalEducationArray} from './projectArray';
import './Projects.css';

const EnvironmentalEducation = () => {

    return (
        <div>
            <section className="main-project-hero  environmental-education">
                <div className="project-name">
                    <h2>ENVIRONMENTAL EDUCATION</h2>
                </div>
            </section>
            <div className="gecci-main-projects">
                <h4 className='heading text-green'>Environmental Education</h4>
                <div className="projectContainer">
                    {environmentalEducationArray.map((environmentalEducationArray) => (
                        <div key={environmentalEducationArray.id} >
                            <Link to={environmentalEducationArray.url}>
                                <div className="project-array-box">
                                    <div className="project-array-img"><img src={environmentalEducationArray.image} alt={environmentalEducationArray.title} /></div>
                                    <div className="project-array-info">
                                        <h5>{environmentalEducationArray.title}</h5>
                                    </div>
                                </div>
                                
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default EnvironmentalEducation;