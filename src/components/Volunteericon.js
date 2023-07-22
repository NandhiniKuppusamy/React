  import React from 'react';
import './Volunteericon.css';
import logo4 from '../logo4.png';
import logo5 from '../logo5.png';
import logo6 from '../logo6.png';
import logo7 from '../logo7.png';
const Volunteerico = ()=>{
    return (
        <div className="volunteerico">
            <p>
            <span className="volunt">Volunt</span>eering <b>made</b> <span className="volunt" >easy</span> <span/>
            </p>
            <br></br>
            <br></br>
            <p className="para">Unlock your full <span className="potential">potential</span> and make a real <br></br>&nbsp;difference in the world by <span className="potential">volunteering</span><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;your skills</p>
            <br></br>
            <div className="voluntee">
            <p className="newpara">
                <h3>Volunteer</h3> 
                <br>
                </br>
                <span>Grow yourself and access to a wide range volunteering <br></br>&nbsp;&nbsp; opportunities that match your interest and schedule
                </span>
                 <img style={{marginLeft:0, marginTop:100, width:740, height:200}} src={logo5}></img>
                <br></br>
                <br></br>
                <br></br>
                <div className="get" style={{textAlign: 'center', fontSize:15, color: 'white'}}>Get Started</div>
                <br></br>
                <h2 style={{textAlign:'center', marginLeft:60}}>Organsations</h2>
                <span style={{fontSize:14, marginLeft:60}}>Find skills volunteers for assignements</span>
                </p>
                <img style={{marginLeft:325, marginTop:-240, width:740, height:220}} src={logo6}></img>
            </div>
            <div>
            <h2 className="get1">About</h2>
            <p style={{marginLeft:20, marginTop:'50px', fontSize:15}}>&nbsp;&nbsp;&nbsp;&nbsp;Welcome to our platform, a company that was founded with the goal of making the world a better <br></br> 
                &nbsp;&nbsp;place by increasing volunteerism. Our mission is to connect volunteers with organisations that are <br></br><span style={{marginLeft:140}}> making a positive impact in their communities and beyond.</span>
                <br></br><span style={{marginLeft:20}}>We believe that volunteering is one of the most poweful ways to make a positive impact in the</span><br></br> 
                <span>&nbsp;&nbsp;world. It allows individuals to give back to their communities, gairl new skills, and build meaningful</span>
                        <br></br>
                <span style={{marginLeft:70}}>relaionships with others who share their passion for creating positive change.</span>
                <br></br>
                <span style={{margin:20}}>Our platform is designed to make volunteering easier and more accessible than ever before. We</span>
                <br></br>
                <span style={{margin:20}}>work with a wide range of organisations, from large charities to small grassroots initiatives, to</span>
                <br></br>
                <span style={{margin:16}}>help them find the volunteers they need to achieve their goals. We also offer a range of tools and</span>
                <br></br>
                <span style={{margin:15}}>resources to help volunteers find opportunities that match their interest and skills, and to make</span>
                <br></br>
                <span style={{marginLeft:194}}>the most of their volunteering experience.</span>
                <br></br>
                <span style={{marginLeft:'12px'}}>At the heart of everything we do is our commitment to making a differrencde in the world. We believe</span>
                <br></br>
                <span style={{marginLeft:'20px'}}>that by connecting volunteers with organisations that are working to create positive change, we</span>
                <br></br>
                <span style={{marginLeft:'20px'}}>can we can help to build stronger, more resilient communities and make a lasting impact on the</span>
                <br></br>
                <span style={{marginLeft:'280px'}}>world around us.</span>
                <br></br>
                <span style={{marginLeft:'20px'}}>Thank you for joining us on this journey, and for you commitment to making the world a better</span>
                <br></br>
                <span style={{marginLeft:'170px'}}>place through Volunteasy, volunteering made easy!
                <br></br>
                <br></br>
                </span>
                <img className='img1' style={{marginBottom:'100cm',width:730, height:110}} src={logo7}></img>
                </p>
            </div>        
        </div>     
)
}
export default Volunteerico;