import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'
import { motion } from 'framer-motion'
import CountUp from 'react-countup';
const Hero = () => {

    const mobile = window.innerWidth <= 768 ? true : false;
    const transition = { type: 'spring', duration: 3 }

    return (
        <div className="hero">
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                {/* The best ad */}
                <div className="the-best-ad">
                    <motion.div
                        initial={{ left: mobile? '178px' : '300px' }}
                        whileInView={{ left: '8px' }}
                        transition={transition}
                    >
                    </motion.div>
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
                    <div><span><CountUp start={0} end={140} duration={3} /> +</span><span>expert coaches</span></div>
                    <div><span>+<CountUp start={0} end={978} duration={3} /></span><span>members joined</span></div>
                    <div><span>+<CountUp start={0} end={50} duration={3} /></span><span>fitness program</span></div>
                </div>
                <div className="hero-button">
                    <buttons className="btn">Get Started</buttons>
                    <buttons className="btn">Learn more</buttons>
                </div>
            </div>

            {/* Buttons */}


            <div className="right-h">
                <button className='btn'>Join now</button>
                <motion.div
                    transition={transition}
                    initial={{ right: '-1rem' }}
                    whileInView={{ right: '4rem' }}
                    className="heart-rate"><img src={heart} alt="" />
                    <span>Heart Rate</span><span>116 bpm</span>
                </motion.div>
                {/* Hero images */}

                <img src={hero_image} alt="" className='hero-image' />
                <motion.img initial={{right: '11rem' }} whileInView={{right : '20rem'}} transition={transition} src={hero_image_back} alt="" className='hero-image-back' />

                {/* Calories */}
                <motion.div
                    transition={transition}
                    initial={{ right: '37rem' }}
                    whileInView={{ right: '28rem' }}
                    className="calories">

                    <img src={calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>

                </motion.div>
            </div>
        </div>
    )
}

export default Hero