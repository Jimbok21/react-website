import React, { useRef, useState, useEffect } from 'react'
import emailjs from 'emailjs-com';
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { BsMessenger } from 'react-icons/bs'

//sends the email
const Contact = (props) => {
  const [successBool, setsuccessBool] = useState('');
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_gjh8fqp', 'template_7xe2w0a', form.current, 'h02fC6NGz4EenZilh')
      .then((result) => {
        console.log("lemon");
        //sets the mail sent to success
        setsuccessBool('SUCCESS');
      }, (error) => {
        console.log("lime");
      });

    e.target.reset();

  };

  //resets success to normal again after 5 seconds
  useEffect(() => {
    if (successBool === 'SUCCESS') {
      setTimeout(() => {
        setsuccessBool('');
      }, 5000);
    }
  }, [successBool]);


  const renderAlert = () => (
    <div className="success_message">
      <p>Message submitted successfully</p>
    </div>
  )

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>jimmykells2101@gmail.com</h5>
            <a href="mailto:jimmykells2101@gmail.com" target={"_blank"} rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+44 7743 485842</h5>
            <a href="https://api.whatsapp.com/send?phone=+447743485842" target={"_blank"} rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsMessenger className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Jimmy Kells</h5>
            <a href="https://m.me/jimmy.kells.75" target={"_blank"} rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail} >
          {successBool && renderAlert()}
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
      
    </section>
  )
}

export default Contact
