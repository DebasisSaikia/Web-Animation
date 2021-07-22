import React, { useRef, useEffect } from 'react';
import photos from '../data'
import GridItem from './GridItem';
import LocomotiveScroll from 'locomotive-scroll';

const Home = () => {

    const ref = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const centreRef = useRef(null)

    useEffect(() => {
        const scrollElement = new LocomotiveScroll({
            el: ref.current,
            smooth: true,
            smartphone: {
                smooth: true,
            },
            getDirection: true,
            getSpeed: true
        })

    }, [])

    const leftChunk = [...photos].splice(0, 5)

    const middleChunk = [...photos].splice(5, 5)

    const rightChunk = [...photos].splice(10, 5)
    console.log(middleChunk)

    return (
        <div className="main-container" id='main-container' ref={ref} data-scroll-container>
            <div className="grid-wrap">
                <div className="left-column" ref={leftRef}>
                    {leftChunk.map(({ url, description, index }) => {
                        return <GridItem url={url} description={description} key={index} />
                    })}
                </div>
                <div className="middle-column" ref={centreRef}>
                    {middleChunk.map(({ url, description, index }) => {
                        return <GridItem url={url} description={description} key={index} />
                    })}
                </div>
                <div className="right-column" ref={rightRef}>
                    {rightChunk.map(({ url, description, index }) => (
                        <GridItem url={url} description={description} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
