import { send } from 'emailjs-com';
import { useState } from 'react';
// import emailjs from '@emailjs/browser';
import '../Styles/contact.css';

function Contact() {
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_gb1k1ip',
      'template_km7fqh3',
      toSend,
      'FSuyWLnv635mC3f30'
    )
      .then((response) => {
        console.log('Success!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED!', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value })
  };


  return (
    <div className="form-container">
      <form className='form-container' onSubmit={onSubmit}>
        <input
          className='name-input'
          type='text'
          name='from_name'
          placeholder='Name'
          value={toSend.from_name}
          onChange={handleChange}
          required
        />
        <input
          className='email-input'
          type='text'
          name='reply_to'
          placeholder='E-mail'
          value={toSend.reply_to}
          onChange={handleChange}
          required
        />
        <input
          className='message-input'
          type='text'
          name='message'
          placeholder='Message'
          value={toSend.message}
          onChange={handleChange}
          required
        />
        <button className='about-form-btn' type='submit'>submit</button>
      </form>
    </div>
  );
};

export default Contact;