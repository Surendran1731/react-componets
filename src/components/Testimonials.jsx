import React from 'react';

export function Testimonials({ contact }) {
  return <>
    <div className="col-lg-4">
      <div className="testimonial-item mx-auto mb-5 mb-lg-0">
        <img className="img-fluid rounded-circle mb-3"
          src={contact.src} alt={contact.name2} />
        <h5>{contact.name2}</h5>
        <p className="font-weight-light mb-0">{contact.content}</p>
      </div>
    </div>
  </>
}

