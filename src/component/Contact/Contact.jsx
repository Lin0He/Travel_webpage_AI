import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <section className='contact-container' id='contact'>
      <div className='contact-box'>
        <h2>Contact Us</h2>
        <div class="form-group">
            <input type="text"  placeholder="Name..." />
        </div>
        <div class="form-group">
            <input type="email"  placeholder="Email..."/>
        </div>
        <div class="form-group">
            <textarea id="message" rows="4" placeholder="Message..."></textarea>
        </div>
        <button className='button-main' type="submit">Send</button>
      </div>


    <div className='footer'>
      <div className='footer-content'>
        <div className='footer-column'>
          <h3>Business</h3>
          <a href='#employ' data-section="Employ">Employ</a>
          <a href='#health-care' data-section="Health Care">Health Care</a>
        </div>
        <div className='footer-column'>
          <h3>Resource</h3>
          <a href='#maps' data-section="Maps">Maps</a>
          <a href='#visitor-site' data-section="Visitor Site">Visitor Site</a>
        </div>
        <div className='footer-column'>
          <h3>Partner</h3>
          <a href='#tech-support' data-section="Tech Support">Tech Support</a>
          <a href='#company' data-section="Company">Company</a>
        </div>
        <div className='footer-column'>
          <h3>Community</h3>
          <a href='#blog' data-section="Blog">Blog</a>
          <a href='#vlog' data-section="Vlog">Vlog</a>
          <a href='#video' data-section="Video">Video</a>
        </div>
      </div>
      <div className='footer-copywrite'>
      <p>&copy; 2024 Produced by Lin He for demo. All rights reserved.</p>
    </div>
    </div>
    </section>
  )
}

export default Contact