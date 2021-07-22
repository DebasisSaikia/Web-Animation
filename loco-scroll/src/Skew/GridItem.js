import React from 'react';
import './styles.css'

const GridItem = ({ url, description }) => {
    return (
        <div className="grid-item">
            <img className="grid-item-media" src={url} alt={description} />
            <p>{description}</p>
        </div>
    )
}

export default GridItem
