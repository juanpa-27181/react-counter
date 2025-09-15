import React, { useState, useEffect } from 'react'

function App() {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(true)

  useEffect(() => {
    let timer
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1)
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [isRunning])

  // convertir a formato de dígitos
  const formatNumber = (num) => String(num).padStart(6, "0").split("")

  const digits = formatNumber(seconds)

  return (
    <div className="container">
      <div className="counter">
        <span className="icon">
            <i class="fa-regular fa-clock"></i>
        </span>
        {digits.map((digit, index) => (
          <span key={index} className="digit">{digit}</span>
        ))}
      </div>
      <button 
        onClick={() => setIsRunning(!isRunning)} 
        className={isRunning ? "stop" : "start"}
      >
        {isRunning ? "Stop" : "Start"}
      </button>
    </div>
  )
}

export default App
