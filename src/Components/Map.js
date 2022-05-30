import GoogleMapReact from 'google-map-react'
import { LocationMarker, LocationVolcano, LocationStorm} from './LocationMarker'
import { useState } from 'react'
import LocationInfoBox from './LocationInfoBox'


const NATURAL_EVENT_WILDFIRE = 8;
const NATURAL_EVENT_VOLCANO = 12;
const NATURAL_EVENT_STORM = 15;



const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map((ev, index) => {
        if(ev.categories[0].id === NATURAL_EVENT_WILDFIRE) {  // categories event with the single object (ID, TITLE)
            return <LocationMarker
             key={index} 
             lat={ev.geometries[0].coordinates[1]} 
             lng={ev.geometries[0].coordinates[0]} 
             onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
              />
        }
        return null
    })

   

    const VOLCANO = eventData.map((ev, index) => {
        if(ev.categories[0].id === NATURAL_EVENT_VOLCANO) {  // categories event with the single object (ID, TITLE)
            return <LocationVolcano 
            key={index} 
            lat={ev.geometries[0].coordinates[1]} 
            lng={ev.geometries[0].coordinates[0]} 
            onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
             />
        }
        return null
    })

    const Storm = eventData.map((ev, index) => {
        if(ev.categories[0].id === NATURAL_EVENT_STORM) {  // categories event with the single object (ID, TITLE)
            return <LocationStorm 
            key={index} 
            lat={ev.geometries[0].coordinates[1]} 
            lng={ev.geometries[0].coordinates[0]} 
            onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
             />
        }
        return null
    })
  return (
    <div className='map'>
              <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCXa0y48MbiVcp21I2iXUsnk_UZvs1txnQ' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {VOLCANO}
                {Storm}
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  )
}
Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map
