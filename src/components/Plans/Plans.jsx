import React from 'react'
import './Plans.css'
import { plansData } from '../../data/plansData'
import tick from '../../assets/tick.png'
const Plans = () => {
    return (
        <div className="plans-container">
            <div className="blur plans-blur-1"></div>
            <div className="blur plans-blur-2"></div>
            <div className="programs-header">
                <span className='stroke-text'>READY TO START</span><span>YOUR JOURNEY</span><span className='stroke-text'>NOW WITH US</span>
            </div>
            {/*  Plans Card */}
            <div className="plans">
                {plansData.map((plan, index) => (
                    <div key={index} className='plan'>
                        {plan.icon}
                        <span>{plan.name}</span><span>$ {plan.price}</span>


                        <div className="features">
                            {plan.features.map((feature, index) => (
                                <div className="feature" key={index}>
                                    <img src={tick} alt="" />
                                    <span> {feature}</span>
                                </div>
                            ))}
                        </div>

                    </div>
                ))}

            </div>
        </div>
    )
}


export default Plans