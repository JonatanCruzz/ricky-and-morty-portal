import { useEffect } from 'react'
import './App.css'
import getRandomNumber from './utils/random.js'
import { useState } from 'react'
import axios from 'axios'
import Location from './components/Location.jsx'
import ResidentList from './components/ResidentList'
import ellipse from '/ellipse.webp';
import nameImage from '/name.webp';


function App() {
  const [location, setLocation] = useState(null)

  useEffect(() => {

    axios.get(`https://rickandmortyapi.com/api/location/${getRandomNumber(126)}`)
      .then(({ data }) => setLocation(data))
      .catch((err) => { console.log(err) })

  }, [])


  return (
    <main className='main px-4 min-h-screen sm:grid-cols-[1fr,auto]'>
      <div className="ellipse-container">
        <img src={ellipse} alt="ellipse" className="ellipse" />
        <img src={nameImage} alt="name" className="name" />
      </div>
      <Location location={location} setLocation={setLocation} />
      <ResidentList residents={location?.residents ?? []} />
    </main>
  )
}

export default App
