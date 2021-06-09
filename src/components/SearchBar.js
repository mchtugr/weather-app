import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Alert, Col, Row, Button, Form } from 'react-bootstrap'

import { fetchWeather } from '../actions'

const SearchBar = () => {
  const [city, setCity] = useState('')
  const dispatch = useDispatch()

  // Global state variable
  const error = useSelector((state) => state.weather.error)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Redux action
    dispatch(fetchWeather(city))
    setCity('')
  }

  return (
    <Row className='justify-content-center mb-1 mt-5'>
      <Col md={6} xs={11}>
        {/* if fetching data from api gives error */}
        {error && (
          <Alert variant='danger' className='text-center p-1'>
            City not found!
          </Alert>
        )}
        <Form onSubmit={handleSubmit} className='justify-content-center'>
          <Row>
            <Col>
              <Form.Group className='mb-3' controlId='city'>
                <Form.Control
                  type='text'
                  placeholder='Enter a city'
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                {/* If input is empty, show the example */}
                {!city && (
                  <Form.Text className='ml-3 text-info'>
                    e.g. New York
                  </Form.Text>
                )}
              </Form.Group>
            </Col>
            <Col xs={'auto'}>
              <Button variant='info' type='button' onClick={fetchWeather}>
                Fetch
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  )
}

export default SearchBar
