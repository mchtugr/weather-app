import React from 'react'
import { Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeDisplayTime } from '../actions'

const TimeInterval = () => {
  // first 24h in 3h time intervals
  let data = useSelector((state) => state.weather.data)
  const selectedData = useSelector((state) => state.weather.selectedData)
  const selectedDay = useSelector((state) => state.weather.selectedDay)
  const selectedDayData = data.find(
    (item) => item.dt_txt.split(' ')[0] === selectedDay
  )
  const selectedDayDataIndex = data.indexOf(selectedDayData)
  data = data.slice(selectedDayDataIndex, selectedDayDataIndex + 8)

  const selectedDataTime = selectedData.dt_txt.split(' ')[1].slice(0, 5)

  const dispatch = useDispatch()

  const handleClick = (id) => {
    // redux action - display selected time weather condition
    dispatch(changeDisplayTime(id))
  }
  return (
    <Row className='justify-content-center m-3 overflow-auto'>
      {data.map((item) => {
        const itemDataTime = item.dt_txt.split(' ')[1].slice(0, 5)
        return (
          <div
            className={`p-1 text-center time-interval rounded ${
              itemDataTime === selectedDataTime && 'border'
            }`}
            key={item.dt}
            onClick={() => handleClick(item.dt)}
          >
            {/* Show hours */}
            {item.dt_txt.split(' ')[1].slice(0, 5)}
          </div>
        )
      })}
    </Row>
  )
}

export default TimeInterval
