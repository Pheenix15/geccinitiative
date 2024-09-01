import React from 'react';
import { Link } from 'react-router-dom';
import {communityEngagementArray} from './projectArray';
import './Projects.css';

const CommunityEngagement = () => {

    return (
        <div className="gecci-main-projects">
            <h4 className='heading text-green'>Community Engagement</h4>
            <div className="projectContainer">
                {communityEngagementArray.map((communityEngagementArray) => (
                    <div key={communityEngagementArray.id} >
                        <Link to={communityEngagementArray.url}>
                            <div className="project-array-box">
                                <div className="project-array-img"><img src={communityEngagementArray.image} alt={communityEngagementArray.title} /></div>
                                <div className="project-array-info">
                                    <h5>{communityEngagementArray.title}</h5>
                                </div>
                            </div>
                            
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CommunityEngagement;