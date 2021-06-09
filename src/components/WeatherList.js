import React from 'react'
import { useSelector } from 'react-redux'
import { Row } from 'react-bootstrap'
import WeatherCard from './WeatherCard'

const WeatherList = () => {
  const data = useSelector((state) => state.weather.data)
  return (
    <Row className='justify-content-center'>
      {Number(data[0].dt_txt.split(' ')[1].slice(0, 2)) > 12 && (
        <WeatherCard data={data[0]} />
      )}

      {data.map((i) => {
        if (i.dt_txt.split(' ')[1] === '12:00:00') {
          return <WeatherCard data={i} key={i.dt} />
        }
      })}
    </Row>
  )
}

export default WeatherList
