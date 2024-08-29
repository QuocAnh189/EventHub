/* eslint-disable react-hooks/exhaustive-deps */
//hook
import { useEffect, useState } from 'react'

//map
import { setLanguage, setRegion, setKey, fromAddress } from 'react-geocode'
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api'
import { Loader } from './Loader'

setKey(import.meta.env.VITE_MAP_API_KEY)
setLanguage('en')
setRegion('vn')

const containerStyle = {
  width: '100%',
  height: '300px',
  borderRadius: '10px'
}

const centerDefault = {
  lat: 10.8713134,
  lng: 106.8025164
}

const libraries: any = ['places']

interface Props {
  location: any
}

const LocationEvent = (props: Props) => {
  const { location } = props

  const [position, setPosition] = useState(null)

  useEffect(() => {
    if (location) {
      fromAddress(location)
        .then(({ results }) => {
          const result = results[0].geometry.location
          setPosition(result)
        })
        .catch(() => {
          setPosition(null)
        })
    }
  }, [location])

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY,
    libraries
  })

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={position ? position : centerDefault}
      zoom={14}
      options={{
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false
      }}
    >
      <Marker position={position!} title='UIT' />
    </GoogleMap>
  ) : (
    <Loader />
  )
}

export default LocationEvent
