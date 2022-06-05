import React from 'react'
import "./intro.css"
import Me from "../../image/ryan24.png"

const intro = () => {
  return (
    <div className="i">
        <div className="i-left">
            <div className='i-left-wrapper'>
                <h2 className='i-intro'>Hello, My name is</h2>
                <h1 className='i-name'>Ryan-Phillips Iserhills Cornelio</h1>
                <div className="i-title">
                  <div className="i-title-wrapper">
                    <div className="i-title-item">Web developer</div>
                    <div className="i-title-item">UI / UX Designer</div>
                    <div className="i-title-item">Photographer</div>
                    <div className="i-title-item">Writer</div>
                    <div className="i-title-item">Contents Creator</div>
                  </div>
                </div>
                <div className='i-desc'>
                <p>
                  I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services & online stores.
                </p>
                </div>
                <svg 
                width="75"
                height="75"
                stroke="black"
                viewBox="0 0 75 75" 
                className="i-scroll"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"></path></svg>
            </div>
        </div>
        <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className='i-img'/>

        </div>
    </div>
  )
}

export default intro