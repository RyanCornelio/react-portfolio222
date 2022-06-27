import React from 'react'
import "./contact.css"
import Phone from "../../image/phone.png"
import Email from "../../image/email.png"
import Address from "../../image/address.png"

const Contact = () => {
  return (
    <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left"></div>
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
            <div className="c-right"></div>
        </div>
    </div>
  )
}

export default Contact