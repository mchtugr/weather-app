import React from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeDisplayDay, changeDisplayTime } from '../actions'

const WeatherCard = ({ data }) => {
  const dispatch = useDispatch()
  const selectedDay = useSelector((state) => state.weather.selectedDay)
  const cardDay = data.dt_txt.split(' ')[0]

  return (
    <>
      <div
        key={data.dt}
        id={data.dt}
        className='mx-1 weather-card'
        // select the day and save it to the global state
        onClick={() => dispatch(changeDisplayDay(data.dt_txt))}
      >
        <Card
          className={`text-center py-3 ${
            cardDay === selectedDay && 'selected'
          }`}
        >
          <Card.Title>
            {/* Display day in string Format */}
            {new Date(data.dt_txt.split(' ')[0]).toDateString().split(' ')[0]}
          </Card.Title>
          <Card.Img
            className='weather-icon'
            variant='top'
            // weather icon
            src={`/icons/${data.weather[0].icon}.png`}
          />
          <Card.Body className='text-center px-0'>
            {/* Round the temperature */}
            <Card.Text>{Math.round(data.main.temp) + '°'}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default WeatherCard
