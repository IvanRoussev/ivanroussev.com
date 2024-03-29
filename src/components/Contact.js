import { message } from 'antd';

function Contact() {
  const submitedForm = () => {
    const successMessage = `Successfully Sent message to Ivan `;
    message.success(successMessage);
  };

  return (
    <div className='contact-container' id='contact'>
      <div className='contact-form'>
        <h1 className='title-contact'>Contact Me</h1>

        <form action='https://formspree.io/f/xgejbbpd' method='POST'>
          <input
            type='text'
            name='first'
            placeholder='First Name'
            autoComplete='off'
            required
          />
          <input
            type='text'
            name='last'
            placeholder='Last Name'
            autoComplete='off'
            required
          />
          <input
            type='email'
            name='email'
            placeholder='Email Address'
            autoComplete='off'
            required
          />
          <textarea
            rows='5'
            cols='60'
            name='message'
            placeholder='Send me a message'
            autoComplete='off'
            required
          ></textarea>
          <button
            className='contact-form-button'
            type='submit'
            onlick={submitedForm}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
