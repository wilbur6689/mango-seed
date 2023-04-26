import React, { useState } from 'react';
import '../stylesheets/App.css';
import '../stylesheets/OperatingHours.css';
import '../stylesheets/contact-form.css';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_last_name: '',
    user_phone: '',
    user_email: '',
    subject: '',
    user_class: '',
    message: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const { user_name, user_last_name, user_phone, user_email, subject, user_class, message } = formData;

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send email with form data using API or server
    console.log(formData);
    emailjs.sendForm('service_faqc0kr', 'template_vrk4nrc', event.target, 'IgvuMPPCjfCH3cf8j')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });

    setFormData({
      user_name: '',
      user_last_name: '',
      user_phone: '',
      user_email: '',
      subject: '',
      user_class: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="about-section">
        <div className="operating-hours-container">
          <div className="operating-hours-heading">
            <h3>Operating Hours</h3>
          </div>
          <div className="operating-hours">
            <div className="operating-hours-day">
              <p>Monday</p>
              <p>8:00 AM - 5:00 PM</p>
            </div>
            <div className="operating-hours-day">
              <p>Tuesday</p>
              <p>8:00 AM - 5:00 PM</p>
            </div>
            <div className="operating-hours-day">
              <p>Wednesday</p>
              <p>8:00 AM - 5:00 PM</p>
            </div>
            <div className="operating-hours-day">
              <p>Thursday</p>
              <p>8:00 AM - 5:00 PM</p>
            </div>
            <div className="operating-hours-day">
              <p>Friday - Sunday</p>
              <p>Closed</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="contact-form-container">
        <p>Here you can contact us with any questions.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="user_name">First Name</label>
            <input
              type="text"
              className="form-control"
              id="user_name"
              name="user_name"
              value={user_name}
              onChange={e => handleInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="user_last_name">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="user_last_name"
              name="user_last_name"
              value={user_last_name}
              onChange={e => handleInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="user_phone">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              id="user_phone"
              name="user_phone"
              value={user_phone}
              onChange={e => handleInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="user_email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="user_email"
              name="user_email"
              aria-describedby="emailHelp"
              value={user_email}
              onChange={e => handleInputChange(e)}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              className="form-control"
              id="subject"
              name="subject"
              value={subject}
              onChange={e => handleInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="user_class">Class Interest</label>
            <select
              className="form-control"
              id="user_class"
              name="user_class"
              value={user_class}
              onChange={e => handleInputChange(e)}
            >
                <option value="">Choose a class</option>
                <option value="Preschool">Preschool</option>
                <option value="Kindergarten">Kindergarten</option>
                <option value="day-school">day-school</option>
              </select>
          </div>
          <div className="form-group">
          <label htmlFor="comment">Comment:</label>
            <input
              type="textarea"
              className="form-control"
              id="message"
              name="message"
              value={message}
              onChange={e => handleInputChange(e)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );

  return (
    <div className="wrapper">
      <body className='App-body'>
      </body>
    </div>
  );
}

export default Contact;


            
            
