import {Icon} from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'
import Location from '@iconify/icons-mdi/volcano'
import Storm from '@iconify/icons-mdi/storm'


export const LocationMarker = ({onClick}) => {
  return (
    <div className='location-marker' onClick={onClick}>
        <Icon icon={locationIcon} className="location-icon" />
    </div>
    
  )
}


export const LocationVolcano = ({onClick}) => {
  return (
    <div className='volcano-iconn' onClick={onClick}>
        <Icon icon={Location} className="volcano-icon" />
    </div>
    
  )
}

export const LocationStorm = ({onClick}) => {
  return (
    <div className='volcano-iconn' onClick={onClick}>
        <Icon icon={Storm} className="volcano-icon2" />
    </div>
    
  )
}

