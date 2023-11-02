import React from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const emailjsUserId = import.meta.env.VITE_REACT_APP_EMAILJS_USER_ID;

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_fxww3rr', 'YOUR_TEMPLATE_ID', e.target, emailjsUserId)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
      })
      .catch((error) => {
        console.error('Email not sent:', error);
      });
  }

  return (
    <div id="Contacts" className='h-full flex flex-col justify-center items-center'>
      <form onSubmit={sendEmail} className='flex flex-col justify-center items-end'>
        <input className='border-black' type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Your Email" />
        <textarea name="message" placeholder="Your Message" />
        <button className="bg-pink-200 rounded-md p-2" type="submit">Send Email</button>
      </form>
    </div>
  );
}

export default ContactForm;
