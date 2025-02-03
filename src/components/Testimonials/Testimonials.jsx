import React from 'react'
import './Testimonials.css'
import { testimonialsData } from '../../data/testimonialsData'
import { useState } from 'react'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'

const Testimonials = () => {
    const [selected, setSelected] = useState(0)
    const tLength = testimonialsData.length

    return (
        <div className="testimonials">
            <div className="left-t">
                <span>Testimonials</span><span className='stroke-text'>What they</span><span>Say About Us</span>
                <span id='test-review'>

                    {testimonialsData[selected].review}
                </span>
                <span >
                    <span id='test-name'>
                        {testimonialsData[selected].name}
                    </span>
                    <span id='status'>
                        - {testimonialsData[selected].status}
                    </span>
                </span>
            </div>
            <div className="right-t">

                <div>

                </div>
                <div></div>
                <img src={testimonialsData[selected].image} alt="" />
                <div className="arrows">
                    <img src={leftArrow} alt="" onClick={() => {
                        selected === 0 ? setSelected(tLength - 1) : setSelected((prev) => prev - 1)
                    }} />

                    <img src={rightArrow} alt="" onClick={() => {
                        selected === (tLength - 1) ? setSelected(0) : setSelected((prev) => prev + 1)
                    }} />
                </div>


            </div>
        </div>
    )
}

export default Testimonials