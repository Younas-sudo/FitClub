import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'

const Hero = () => {
    return (
        <div className="hero">
            <div className="left-h">
                <Header />
                {/* The best ad */}
                <div className="the-best-ad">
                    <div></div>
                    <span>the best fitness club in the town</span>
                </div>
                {/* hero heading */}
                <div className="hero-text">
                    <div>
                        <sapn className='stroke-text'>Shape </sapn>
                        <sapn>Your</sapn>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div>
                        <span>in here we will help you to shape and build your ideal body and live up your life to fullest</span>
                    </div>
                </div>
                {/* Figure */}

                <div className="figures">
                    <div><span>140+</span><span>expert coaches</span></div>
                    <div><span>+978</span><span>members joined</span></div>
                    <div><span>+50</span><span>fitness program</span></div>
                </div>
                <div className="hero-button">
                    <buttons className="btn">Get Started</buttons>
                    <buttons className="btn">Learn more</buttons>
                </div>
            </div>

            {/* Buttons */}


            <div className="right-h">
                <button className='btn'>Join now</button>
                <div className="heart-rate"><img src={heart} alt="" />
                    <span>Heart Rate</span><span>116 bpm</span>
                </div>
                {/* Hero images */}

                <img src={hero_image} alt="" className='hero-image' />
                <img src={hero_image_back} alt="" className='hero-image-back' />

                {/* Calories */}
                <div className="calories">
                    
                    <img src={calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero