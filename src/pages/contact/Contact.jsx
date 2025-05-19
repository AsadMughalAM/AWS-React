import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className='contact'>
    <form action="https://formspree.io/f/xjkwldpd" method='POST'>
<input type="text" placeholder='Enter your name..' />
<input type="email" placeholder='Enter your email..' />
<textarea name="message" placeholder='Message'></textarea>
<button>Submit</button>
    </form>
    </div>
  )
}

export default Contact