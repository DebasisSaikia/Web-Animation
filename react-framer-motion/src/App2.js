import React, { useState, useRef, useEffect } from 'react'
import About from './components/pages/About'
import Featured from './components/pages/Featured'
import Gallery from './components/pages/Gallery'
import Header from './components/pages/Header'
import Navbar from './components/pages/Navbar/index'

const App2 = () => {
    const [loader, setLoader] = useState(true)
    const [timer, setTimer] = useState(3);

    const screen = useRef(null);

    const clear = () => {
        window.clearInterval(screen.current);
        setLoader(false)
    }

    useEffect(() => {
        screen.current = window.setInterval(() => {
            setTimer(timer => timer - 1)
        }, 1000)
    }, [])

    // runs when timer changes
    useEffect(() => {
        if (timer === 0) {
            clear()
        }
    }, [timer])

    return (
        <>
            {loader ? (<div className="loader-container l-wrap">
                <h1>Portfolio</h1>
                <h2>Debasis</h2>
            </div>) : (
                <div className="main-container">
                    <Navbar />
                    <Header />
                    <Featured />
                    <About />
                    <Gallery />
                </div>
            )}

        </>
    )
}

export default App2
