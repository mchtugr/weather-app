import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'

import SearchBar from './SearchBar'
import SelectedTime from './SelectedTime'
import TimeInterval from './TimeInterval'
import WeatherList from './WeatherList'

const App = () => {
  //global state
  const data = useSelector((state) => state.weather.data)
  return (
    <Container className='mb-5'>
      <SearchBar />
      {data && (
        <>
          <SelectedTime />
          <TimeInterval />
          <WeatherList />
        </>
      )}
    </Container>
  )
}

export default App
