import React from 'react'
import "../../styles/About.css"
import Vector204 from "../../images/Vector204.png"
import Group_1 from "../../images/Group_1.png"
import Drmahdi from "../../images/Drmahdi.png"
import Drusef from "../../images/Drusef.png"
import Drsarah from "../../images/Drsarah.png"
import Drfatima from "../../images/Drfatima.png"
// import { Buttonappt } from '../Buttons/Buttonappt'


const About = () => {
  return (
    <>
      <div className='about'>
        <div className='top' style={{ backgroundImage: `url(${Vector204})`}}>
          <div className='intro'>
            <h1 className='H1YY'>Passion for <span className='DentistryY'>Dentistry</span> <br />Since 2015 </h1>
            <div  className='PY'><p>DENTI Clinic was established in 1977, when Professor Hani Khoury returned to Lebanon from France, after finishing his specialty in gum and bone disease, also known as “Periodontics”.</p></div>
            <span className='sida'><button className="Seemore">See More</button></span>
          </div>
          <div>
            <img className='imgRy' src={Group_1} alt="imgRy" />            
          </div>
        </div>
        <h1 className='pBY heading'>MEET OUR <span className='DoctorY'>DOCTORS</span></h1>
        <div className='imagesY'>
          <div className='doctor-card'>
            <span className='ButtonAY'><img className='Drmahdi' src={Drmahdi} alt='DrMahdi' /></span> 
            <p className='center_text'><span className='pdrname'>Dr Mahdi Halloum</span>
              <br /><i className='Harvard'> Orthodontic Treatment</i>
              <br /><i className='Harvard'> Yale Medical School</i>
            </p>
            <span className='ButtonAY'><button className="buttonA Seemoree">Book Appointment</button></span>
          </div>
          <div className='doctor-card'>
            <img className='Drusef' src={Drusef} alt='DrUsef' />
            <p className='center_text'><span className='pdrname'>Dr Youssef Hamadi</span>
              <br /><i className='Harvard'> Orthodontic Treatment</i>
              <br /> <i className='Harvard'>Harvard Medical School</i>
            </p>
            <span className='ButtonAY'>   <button className="buttonA Seemoree">Book Appointment</button></span>
          </div>
          <div className='doctor-card'>
            <img className='Drsarah' src={Drsarah} alt='DrSarah' />
            <p className='center_text'>
              <span className='pdrname'>Dr Sarah Hashouch</span>
              <br /> <i className='Harvard'>Orthodontic Treatment</i>
              <br /> <i className='Harvard'>Oxford Medical School</i>
            </p>
            <span className='ButtonAY'>  <button className="buttonA Seemoree">Book Appointment</button></span>
          </div>
          <div className='doctor-card'>
            <span className='Drfatimaa'><img className='Drfatima' src={Drfatima} alt='DrFatima' /> </span>
            <p className='center_text'><span className='pdrname'>Dr Fatima Bitar</span>
              <br /> <i className='Harvard'>Orthodontic Treatment</i>
              <br /><i className='Harvard'> Harvard Medical School</i>
            </p>
            <span className='ButtonAY'> <button className="buttonA Seemoree">Book Appointment</button></span>
          </div>
        </div>
      </div>
      {/* <Buttonappt/> */}
    </>
  )
}

export default About
