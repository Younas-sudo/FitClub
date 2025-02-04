import React from 'react'
import './join.css'
import { useRef } from 'react'
import emailjs from  '@emailjs/browser'

const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_naajv9e', 'template_xzzn1fc', form.current, {
                publicKey: 'UTCyYw_o5Cb34ngyX',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };



    return (
        <div className="Join" id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <span className='stroke-text'>
                        READY TO  
                    </span>
                    <span>
                        LEVEL UP
                    </span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className='stroke-text'> WITH US</span>
                </div>

            </div>
            <div className="right-j">
                <form ref={form} className="email-container" onSubmit={sendEmail}>
                    <input type="email" name='user_email' placeholder='Enter Your Email Address to Join'/>
                    <button className='btn btn-j'>Join now</button>

                </form>
            </div>
        </div>
    )
}

export default Join