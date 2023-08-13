import React from 'react'

const Contact = () => {
  return (
    <>
        <section className="contact" id='contact'>
            <h1 className="heading">
                <span>Contact</span> Us
            </h1>
            <div className="row">
            <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1844.8141295456658!2d91.81981029808487!3d22.367661163596356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd93a1425afeb%3A0xe51086f030f0fd52!2sTongsa%20Cafe!5e0!3m2!1sen!2sbd!4v1691915756203!5m2!1sen!2sbd" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <form>
                <h3>Get in touch</h3>
                <div className="inputBox">
                    <span className='fas fa-user'></span>
                    <input type="text" placeholder='name' />
                </div>
                <div className="inputBox">
                    <span className='fas fa-envelope'></span>
                    <input type="email" placeholder='email' />
                </div>
                <div className="inputBox">
                    <span className='fas fa-phone'></span>
                    <input type="number" placeholder='number' />
                </div>
                <input type="submit" value="contact now" className='btn' />
            </form>
            </div>
        </section>
    </>
  )
}

export default Contact
