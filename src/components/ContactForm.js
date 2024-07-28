import React from 'react';
import { useForm } from 'react-hook-form';
import '../styles/ContactForm.css';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    emailjs.send(
      'service_2oouyls',  // Service ID from EmailJS
      'template_contact us', // Template ID from EmailJS
      data,
      'Lebua Thai Gmail'      // User ID from EmailJS
    ).then((response) => {
      console.log('Email sent successfully', response.status, response.text);
    }).catch((error) => {
      console.error('Failed to send email', error);
    });
  };

  return (
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
  );
};

export default ContactForm;
