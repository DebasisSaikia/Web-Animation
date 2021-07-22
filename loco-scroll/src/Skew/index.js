import React, { useRef, useEffect } from 'react';
import photos from '../data'
import GridItem from './GridItem';
import LocomotiveScroll from 'locomotive-scroll';


// smooth screw
const clamp = (value, min, max) => value <= min ? max : value >= max ? max : value

const Home = () => {

    const ref = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const centreRef = useRef(null)
    const scrollRef = useRef({
        cache: 0,
        current: 0
    })

    useEffect(() => {
        const scrollElement = new LocomotiveScroll({
            el: ref.current,
            smooth: true,
            multiplier: 1,
            smartphone: {
                smooth: true,
            },
            getDirection: true,
            getSpeed: true
        })

        scrollElement.on('scroll', (obj) => {
            scrollRef.current.current = obj.scroll.y;
            const distance = scrollRef.current.current - scrollRef.current.cache;
            scrollRef.current.cache = scrollRef.current.current

            // leftRef.current.style.transform = `skewY(${clamp(distance, -10, 10)}deg)`
            leftRef.current.style.transform = `skewY(${distance}deg)`

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
