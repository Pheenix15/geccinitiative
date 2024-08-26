import React from 'react';
import { Link } from 'react-router-dom';
import {natureLabProjectArray} from './projectArray';
import './Projects.css';

const NatureLabProject = () => {

    return (
        <div className="gecci-main-projects">
            <h4 className='heading text-green'>Nature Lab Projects</h4>
            <div className="projectContainer">
                {natureLabProjectArray.map((natureLabProjectArray) => (
                    <div key={natureLabProjectArray.id} >
                        <Link to={natureLabProjectArray.url}>
                            <div className="project-array-box">
                                <div className="project-array-img"><img src={natureLabProjectArray.image} alt={natureLabProjectArray.title} /></div>
                                <div className="project-array-info">
                                    <h5>{natureLabProjectArray.title}</h5>
                                </div>
                            </div>
                            
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NatureLabProject;