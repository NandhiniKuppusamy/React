import React from "react";
import "./secondpage.css";
import volunt from "../volunt.jpg";
import ss from "../ss.jpg";
import suit from "../suit.jpg";



function sample(){
return (
  <div>
      <img src={volunt} className="photo"  alt="volunt.JPG" />     

      <h3 class="heading">Volunt<span style={{fontFamily:'cursive'}}>e</span>asy</h3> 

 <div className="container">
    <h2 class="nexone">Join as an <span style={{color: 'mediumorchid '}}> Organisation </span>or <span style={{color: 'mediumorchid '}}> Volunteer </span> </h2>

 <div>
    <p class="leftalign"><br/><img src={ss} className="leftscan"  alt="ss.jpg"/><br/>I'm an <span class="highlight">Organisation</span> <br/>looking for Volunteers </p></div>
    <p class="rightalign"><br/><img src={suit} className="rightscan"  alt="suit.jpg"/><br/>I'm a <span class="highlight">Volunteer</span> <br/>looking for Assignments </p>
  <div className="foot">
      <h3>Already have a account? <span style={{color: 'mediumorchid '}}>Log In </span> </h3>
  </div>
</div>   
</div>
    
    );
  }
    



export default sample;