import React from 'react';

export function Icons({ items }) {
    return <>

        <div className="col-lg-4">
            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex"><i className={items.style}></i></div>
                <h3>{items.name}</h3>
                <p className="lead mb-0">{items.summary}</p>
            </div>
        </div>
    </>
}
