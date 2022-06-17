import "./about.css";
import hikick from "../../image/hikick.jpg";
import ryan2 from "../../image/ryan2.jpg"
import ryan3 from "../../image/ryan3.jpg"

const About = () => {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://cdn.pixabay.com/photo/2017/12/11/23/52/coding-3013602_960_720.jpg" 
                    alt="" 
                    className="a-img"
                    />
                </div>
            </div>
        <div className="a-right">
            <h1 className="a-title">About me</h1>
            <p className="a-sub">
                I studied web development in e-commerce for 2 years. 
                <br/>
                As a person im 
                easy going and laidback. I enjoy sports and being active when I have the chance.
            </p>
            
            <div className="a-award">
                <img src={hikick} alt="" className="a-award-img" />
                <img src={ryan3} alt="" className="a-award-img" />
                <img src={ryan2} alt="" className="a-award-img" />
                {/* <div className="a-award-texts">
                    <h4 className="a-award-title">International designer</h4>
                    <p className="a-award-desc">Im still a junior developer who enjoys learning.</p>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default About