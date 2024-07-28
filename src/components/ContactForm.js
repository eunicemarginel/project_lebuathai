import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../styles/ContactForm.css';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const onSubmit = (data) => {
    emailjs.send(
      'service_2oouyls',  // Service ID from EmailJS
      'template_contact_us', // Template ID from EmailJS (use underscores instead of spaces)
      data,
      'Byf2QoRp1ipifz7D7'      // User ID from EmailJS
    ).then((response) => {
      console.log('Email sent successfully', response.status, response.text);
      setMessage('Thank you for reaching out! We will get back to you soon.');
      setIsError(false);
      reset();  // Reset the form fields after successful submission
    }).catch((error) => {
      console.error('Failed to send email', error);
      setMessage('There was an issue sending your message. Please try again later.');
      setIsError(true);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <div className="form-group">
          <label>Name</label>
          <input {...register('name', { required: true })} className={errors.name ? 'input-error' : ''} />
          {errors.name && <span className="error-message">This field is required</span>}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input {...register('email', { required: true })} className={errors.email ? 'input-error' : ''} />
          {errors.email && <span className="error-message">This field is required</span>}
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea {...register('message', { required: true })} className={errors.message ? 'input-error' : ''} />
          {errors.message && <span className="error-message">This field is required</span>}
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      {message && (
        <div className={isError ? 'error-message-container' : 'success-message-container'}>
          {message}
        </div>
      )}
    </div>
  );
};

export default ContactForm;