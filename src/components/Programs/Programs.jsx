import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
const Programs = () => {
    return (
        <div className="Programs" id="programs">
            {/* Header */}
            <div className="programs-header">
                <spam className='stroke-text'>Explore our</spam>
                <spam>Programs</spam>
                <spam className='stroke-text'>to shape you</spam>
            </div>
            <div className="programs-categories">
                {programsData.map((program, index) => (
                    <div className="category" key={index}>
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="join-now"><span>Join Now</span><img src={RightArrow} alt="" /></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Programs