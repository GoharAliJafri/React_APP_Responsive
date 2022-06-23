import React from 'react'
import './Contact.css';

const Contact = () => {
  return (
    <div>
         <div class="cont container">
            <div class="contact-text">
                <h1>Contact Us</h1>
                <p>Drop your inquiry here and our experts will get back to you.</p>
                <h6>Address</h6>
                <p class="address">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, rerum.
                </p>
                <h6>Email</h6>
                <p class="mail">contactus@gmail.com</p>
            </div>
            <div class="contact-form">
                <form>
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" required />
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" required />
                    <label for="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="5" required />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
