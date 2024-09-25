import React from 'react'

function Navbar() {
  return (
    <div>
        <nav>
            <div className="container">
                <div className="left-side">
                    <h3>Izma</h3>
                </div>
                <div className="right-side">
                    <a href="./">home</a>
                    <a href="./introduction/">Introduction</a>
                    <a href="./contact/">Contact</a>
                    <a href="./skills/">Skills</a>
                    <a href="./services/">Services</a>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar