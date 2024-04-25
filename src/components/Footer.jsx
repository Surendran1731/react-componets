import React from 'react';

export function Footer({ details }) {
  return <>
    <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
      <ul className="list-inline mb-2">
        <li className="list-inline-item"><a href="#!">{details.name}</a></li>
        
      </ul>

    </div>
    

  </>
}
