import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const storedCounter = localStorage.getItem('counter');
    const newCounter = storedCounter ? parseInt(storedCounter, 10) + 1 : 1;

    setCounter(newCounter);
    localStorage.setItem('counter', newCounter);
  }, [])

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Page visited counter</h1>
      <p>This page has been visited {counter} times.</p>
    </div>
  )
}

export default App
