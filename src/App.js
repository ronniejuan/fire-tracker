import Map from "./Components/Map";
import Loader from "./Components/Loader";
import Header from "./Components/Header";

import {useState, useEffect} from 'react'

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true) //fetching the data
      const response = await fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events")
      const { events } = await response.json() //give us the data, await cause return a promise 

      setEventData(events)
      setLoading(false) // back to false we done fetching before.
    }
    
    fetchEvents() // we call fetchEvents
  },[] )

  
  return (
    <div>
      <Header />
      { !loading ? <Map eventData={eventData} /> : <Loader />}
        {/* if not loading ---> then  show Map component passing eventData as a Prop  , ELSE Loader.*/}
    </div>
  );
}

export default App;
