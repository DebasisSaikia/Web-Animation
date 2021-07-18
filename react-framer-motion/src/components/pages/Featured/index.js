import React from 'react';
import './featured.css'

const Featured = () => {
    return (
        <section className="featured-section" >
            <div className="featured-row-layout">
                <h6>Creative</h6>
                <img src='https://images.unsplash.com/photo-1626573500527-d715eee61161?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' alt="featured1" />
            </div>
            <div className='featured-column-layout'>
                <h6>Product</h6>
                <img src='https://images.unsplash.com/photo-1626605886469-2c139308db4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=313&q=80' alt="featured2" />
            </div>
        </section>
    )
}

export default Featured
