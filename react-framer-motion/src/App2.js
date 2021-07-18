import React from 'react'
import About from './components/pages/About'
import Featured from './components/pages/Featured'
import Header from './components/pages/Header'
import Navbar from './components/pages/Navbar/index'

const App2 = () => {
    return (
        <div className="main-container">
            <Navbar />
            <Header />
            <Featured />
            <About />
        </div>
    )
}

export default App2
