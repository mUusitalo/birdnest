import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Radar from './components/Radar';
import { DRONE_API_URL } from './utils/config';
import { Drone } from './types';
import { fetchDrones } from './utils/drones';

function App() {
  const [drones, setDrones] = useState<Drone[]>([])
  const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null)
  
  const fetchDroneInformation = async () => {
    try {
      const response = await fetchDrones()
      setDrones(response)
    } catch(e) {
      console.error(e)
    }
  }

  useEffect(() => {
    const id = setInterval(fetchDroneInformation, 1000)
    setIntervalId(id)
    
    return () => {
      clearInterval(id)
    }
  }, [])

  return (
    <div className="App">
      <p>Terveeee</p>
      <Radar drones={drones} />
    </div>
  );
}

export default App;
