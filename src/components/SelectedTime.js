import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Col, Row, Image } from 'react-bootstrap'
import { setTempUnit, fetchWeather, changeDisplayTime } from '../actions'

const SelectedTime = () => {
  const data = useSelector((state) => state.weather.data)
  const selectedData = useSelector((state) => state.weather.selectedData)
  const location = useSelector((state) => state.weather.location)
  const unit = useSelector((state) => state.unit)
  const selectedDay = useSelector((state) => state.weather.selectedDay)
  const dispatch = useDispatch()

  const msToKmh = (value) => {
    return ((value * 18) / 5).toFixed(2)
  }

  useEffect(() => {
    const selectedDayData = data.find(
      (item) => item.dt_txt.split(' ')[0] === selectedDay
    )
    dispatch(changeDisplayTime(selectedDayData.dt))
  }, [selectedDay, data, dispatch])

  return (
    <Container className='border rounded p-3'>
      <Row className='selected-time'>
        {/* Current Day left screen */}
        <Col xs={8}>
          <Row>
            <Col xs={'auto'}>
              {/* Weather Icon */}
              <Image
                src={`https://raw.githubusercontent.com/murtazaaylak/weather-app/main/public/icons/${selectedData.weather[0].icon}.png`}
                alt={selectedData.weather[0].description}
              />
            </Col>
            <Col xs={'auto'} className='justify-content-center'>
              <Row>
                {/* Temperature */}
                <Col className='temp-font'>
                  {Math.round(selectedData.main.temp)}
                </Col>
                <Col className='my-2'>
                  <Row
                    className={`mb-2 mt-1 px-2 ${
                      unit === 'metric' && 'font-weight-bold'
                    }`}
                    // Set Temperature Unit and fetch data again
                    onClick={() => {
                      dispatch(setTempUnit('metric'))
                      dispatch(fetchWeather(location.name))
                    }}
                  >
                    °C
                  </Row>
                  <Row
                    className={`px-2 ${
                      unit === 'imperial' && 'font-weight-bold'
                    }`}
                    // Set Temperature Unit and fetch data again
                    onClick={() => {
                      dispatch(setTempUnit('imperial'))
                      dispatch(fetchWeather(location.name))
                    }}
                  >
                    °F
                  </Row>
                </Col>
                <Col xs={'auto'} className='my-3'>
                  {/* Humidity */}
                  <Row>Humidity: {selectedData.main.humidity}%</Row>
                  <Row>
                    {/* Wind */}
                    Wind:
                    {/* if unit is metric, convert it from m/s to km/h */}
                    {unit === 'metric'
                      ? ` ${msToKmh(selectedData.wind.speed)} km/h`
                      : ` ${selectedData.wind.speed} mph`}
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>

        {/* Current Day right Screen */}
        <Col xs={4} className='text-right'>
          {/* City & Country */}
          <Row className='justify-content-end px-2 pt-2'>
            {location.name}, {location.country}
          </Row>
          <Row className='justify-content-end px-2'>
            {/* Day in string Format */}
            {
              new Date(selectedData.dt_txt.split(' ')[0])
                .toDateString()
                .split(' ')[0]
            }
            {', '}
            {/* Hour */}
            {selectedData.dt_txt.split(' ')[1].slice(0, 5)}
          </Row>

          {/* Weather Condition */}
          <Row className='justify-content-end px-2 '>
            {selectedData.weather[0].main}
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default SelectedTime
