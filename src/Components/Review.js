import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Review = () => {
  return (
    <>
        <Container>
            <section className='review' id='review'>
                <h1 className="heading">
                    customer <span>review</span>
                </h1>
                <div className="ratio ratio-21x9">
                    <iframe src="https://www.youtube.com/embed/3j2q-ifqRKg" title="YouTube video" allowfullscreen></iframe>
                </div>
            </section>
        </Container>
    </>
  )
}

export default Review
