import "./contact.scss";
import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';


export default function Contact() {

  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    

    emailjs.sendForm('service_5oheurd', 'template_g478ogl', ref.current, 'Y-9DbPZRp7FPOtFtv')
    .then((result) => {
        console.log(result.text);
        setSuccess(true);
    }, (error) => {
        console.log(error.text);
        setSuccess(false);
    });

  };

  return (
    <div className="contact" id= "contact">

    {/* <div className="left">
      <img src="pictures/plane3.png" />
    </div>  */}

    {/* <div className="left2">
      <img src="pictures/plane3.png" />
    </div>  */}

    <div className="middle">
        <h2>Contact Me</h2>
        <form ref={ref} onSubmit={handleSubmit}>
          <input type="text" placeholder="Write your email here.." name="email"/>
          <textarea placeholder="Write your message here.." name="message" rows={10}></textarea>
          <button type="submit"><b>Send</b></button>
          {success && <strong>Thank you for your message :)</strong>}
        </form>
      </div>
{/* 
    <div className="right">
      <img src="pictures/plane2.png" />
    </div>  */}


    </div>
  )
}
