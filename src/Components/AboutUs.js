import React from 'react';
import AboutImg from '../images/aboutImg.png';

const AboutUs = () => {
  return (
    <>
        <section className='about' id='about'>
            <h1 className='heading'>
                <span>About</span> us
            </h1>
            <div className="row">
                <div className="image">
                    <img src={AboutImg} alt="" />
                </div>
                <div className="content">
                    <h3>What Makes Our Food Special?</h3>
                    <p>A collection of different types of hill food including hill mundi, lakso etc...</p>
                    <a className='btn' href='#'>learn more</a>
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutUs
