import "./contact.scss";
import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';


export default function Contact() {

  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    

    emailjs.sendForm('service_5zk72j8', 'template_kxacar5', ref.current, 'MMOXr_KIG3CriR7H4')
    .then((result) => {
        console.log(result.text);
        setSuccess(true);
        e.target.reset();
        
    setTimeout(() => {
          setSuccess(null);
        }, 1000); 
    }, (error) => {
        console.log(error.text);
        setSuccess(false);  
    });
  };

  return (
    <div className="contact" id= "contact">

    <div className="middle">
        <h2>Contact Me</h2>
        <form ref={ref} onSubmit={handleSubmit}>
          <input type="text" placeholder="Write your email here.." name="email"/>
          <textarea placeholder="Write your message here.." name="message" rows={10}></textarea>
          <button type="submit"><b>Send</b></button>
          {success && <strong>Thank you for your message :)</strong>}
        </form>
      </div>

    </div>
  )
}
