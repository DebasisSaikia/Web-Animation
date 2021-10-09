import React from 'react'
import './sheader.css';

export default function SectionHeader({ title }) {
    return (
        <h6 className='section-header' data-scroll-section>
            {title}
        </h6>
    )
}