import React from 'react';

export function ImageShowcases({ images }) {

  return <>
    <div className="row g-0">
      <div className={images.foo ? "col-lg-6 order-lg-2 text-white showcase-img" : "col-lg-6 text-white showcase-img"}
        style={{ backgroundImage: `url(${images.src})` }}></div>
      <div className="col-lg-6 order-lg-1 my-auto showcase-text">
        <h2>{images.name}</h2>
        <p className="lead mb-0">{images.para}</p>
      </div>
    </div>
  </>
}
