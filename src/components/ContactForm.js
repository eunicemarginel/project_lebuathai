import React from 'react';
import { useForm } from 'react-hook-form';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

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
