import React from 'react'
import  landrover from "../assets/discovery.webp";
import defender from "../assets/land_rover_defender_90.jpg";
import RRnew from "../assets/RRnew.webp";
import octa  from "../assets/octa.jpeg"
import '../Styles/Cardstyle.css'
const Card = () => {
  return (
<div className="containerImg">

    <div className="card" style={{  width: "25%",
    }}>
  <img src={landrover} className="card-image" style={{
    width: "100%",
    height: "200px",
    objectFit: "cover"
  }}  alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Discovery</h5>
    <p className="card-Price">Price from:  ₹ 12 600 000*
</p>
   <p className="card-text">Seven-seat sophistication.
</p>
   <div className="explore-btn-wrapper">
      <a href="#" className="btn btn-dark">EXPLORE</a>
    </div>
  </div>
</div>
{/* second card */}
 <div className="card" style={{  width: "25%",
      }}>
  <img src= { defender}  className="card-image"  style={{
    width: "100%",
  
    objectFit: "cover"
  }}  alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Defender</h5>
    <p className="card-Price">Price from: ₹ 10 033 000*</p>
    <p className="card-text">Load up. Go anywhere. An impressive loadspace, with up to seven seats.
</p>
   <div className="explore-btn-wrapper">
      <a href="#" className="btn btn-dark">EXPLORE</a>
    </div>
  
  </div>
</div>
{/*range Rover*/}
<div className="card" style={{  width: "25%",
     }}>
  <img src= {RRnew}  className="card-image" style={{
    width: "100%",
    objectFit: "cover"
  }}  alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Range Rover</h5>
      <p className="card-Price">Price from: ₹ 23 100 000*</p>
    <p className="card-text">Some quick example text to build on the
       card title and make up the bulk of the card’s content.</p>
   <div className="explore-btn-wrapper">
      <a href="#" className="btn btn-dark">EXPLORE</a>
    </div>
  </div>
</div>

{/*octa*/}
<div className="card"  style={{  width: "25%",  }}>
  <img src= {octa}  className="card-image" style={{
    width: "100%",
    objectFit: "cover"
  }}  alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Defender Octa</h5>
    <p className="card-text">For adventures of extreme proportions. The most powerful Defender ever made.</p>
   <div className="explore-btn-wrapper">
      <a href="#" className="btn btn-dark">EXPLORE</a>
    </div>
  </div>
</div>

</div>
  )
}

export default Card
