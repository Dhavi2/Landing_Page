import React from "react";
import "../Styles/Footer.css"
const Footer = () => {
  return (
   <>
  <div className="footerContainer">
     <div className="navfooter">
<div className="footer-section">
        <h3>SEE WHAT’S COMING</h3>
        <p>Get your updates direct from us</p>

        <div className="subscribe-box">
          <input
            type="email"
            placeholder="Email Address"
          />
          <button>SUBSCRIBE</button>
        </div>
      </div>
   </div>
   <div className="bottomfooter">
       <div className="footer-col">
      <h4>VEHICLES</h4>
      <ul>
        <li>RANGE ROVER</li>
        <li>DISCOVERY</li>
        <li>DEFENDER</li>
        <li>SV</li>
      </ul>
    </div>

    <div className="footer-col">
      <h4>FLEET & BUSINESS</h4>
      <ul>
        <li>DIPLOMATIC SALES</li>
        <li>FIND ME A SUV</li>
        <li>BOOK A TEST DRIVE</li>
        <li>KEEP ME INFORMED</li>
        <li>BUILD YOUR OWN</li>
      </ul>
    </div>

    <div className="footer-col">
      <h4>OWNERSHIP</h4>
      <ul>
        <li>OWNERSHIP SERVICES</li>
        <li>INCONTROL</li>
        <li>SOFTWARE UPDATES</li>
        <li>LOCATE RETAILER</li>
        <li>ONLINE SERVICE BOOKING</li>
      </ul>
    </div>

    <div className="footer-col">
      <h4>EXPERIENCE</h4>
      <ul>
        <li>DRIVING EXPERIENCES</li>
        <li>TRAVEL</li>
      </ul>
    </div>

    <div className="footer-col">
      <h4>ABOUT US</h4>
      <ul>
        <li>JLR</li>
        <li>SUSTAINABILITY</li>
        <li>CSR POLICY</li>
        <li>CSR PROJECTS</li>
        <li>CSR COMMITTEE</li>
        <li>ANNUAL RETURN</li>
        <li>VEHICLE RECALL</li>
        <li>CODE OF CONDUCT</li>
        <li>SUPPLIER CODE</li>
        <li>ANTI BRIBERY POLICY</li>
      </ul>
    </div>

    <div className="footer-col">
      <h4>JOIN THE CONVERSATION</h4>
      <ul>
        <li>INSTAGRAM</li>
        <li>YOUTUBE</li>
        <li>FACEBOOK</li>
        <li>X</li>
        <li>LINKEDIN</li>
      </ul>
    </div>
   </div>
  </div>
   </>
  );
};

export default Footer;
