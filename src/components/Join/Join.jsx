import React, { useRef, useState } from 'react';
import './join.css';
import emailjs from '@emailjs/browser';

const Join = () => {
    const form = useRef();
    const [successMessage, setSuccessMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_naajv9e', 'template_xzzn1fc', form.current, {
                publicKey: 'UTCyYw_o5Cb34ngyX',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setSuccessMessage("Thanks for joining! 🎉");
                    form.current.reset(); // Clear the form after submission

                    // Hide success message after 3 seconds
                    setTimeout(() => {
                        setSuccessMessage("");
                    }, 3000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <div className="Join" id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <span className='stroke-text'>READY TO</span>
                    <span> LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className='stroke-text'> WITH US</span>
                </div>
            </div>

            <div className="right-j">
                <form ref={form} className="email-container" onSubmit={sendEmail}>
                    <input type="email" name='user_email' placeholder='Enter Your Email Address' required />
                    <button className='btn btn-j' type="submit">Join now</button>
                </form>

                {/* Success Message */}
                {successMessage && <div className="success-message">{successMessage}</div>}
            </div>
        </div>
    );
}

export default Join;
