import React, { useRef } from 'react'
import "./contact.css"
import Phone from "../../image/phone.png"
import Email from "../../image/email.png"
import Address from "../../image/address.png"
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();

    const handleSubmit = (e)=>{
        e.preventDefault();

        emailjs.sendForm('service_73gdwjn', 'template_5ceqyz3', formRef.current, '5W1Y5ag_ec8NtBokO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    }

  return (
    <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className='c-title'>Let's discuss your project</h1>
                    <div className='c-info'>
                        <div className='c-info-item'>
                            <img
                            src={Phone}
                            alt=""
                            className='c-icon' />
                                +46 760 58 12 67
                        </div>
                        <div className='c-info-item'>
                            <img
                            src={Email}
                            alt=""
                            className='c-icon' />
                                ryan.cornelio@gmail.com
                        </div>
                        <div className='c-info-item'>
                            <img
                            src={Address}
                            alt=""
                            className='c-icon' />
                                Hällebergsgatan 22
                                442 54 YTTERBY
            </div>
                    </div>
            </div>
            <div className="c-right">
                <p className='c-desc'>
                    <b>What's your story?</b> Get in touch. Always available for freelancing
                    if the right project comes along. me.
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" name="user_name"  />
                    <input type="text" placeholder="Subject" name="user_subject"  />
                    <input type="text" placeholder="Email" name="user_email"  />
                    <textarea rows="5" placeholder="Message" name="message" />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact