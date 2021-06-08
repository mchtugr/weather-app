import axios from 'axios'
import {
  FETCH_WEATHER_DATA_REQUEST,
  FETCH_WEATHER_DATA_FAIL,
  FETCH_WEATHER_DATA_SUCCESS,
  SELECT_WEATHER_DISPLAY_TIME,
  SELECT_WEATHER_DISPLAY_DAY,
  SET_TEMPERATURE_UNIT,
} from '../constants'

export const fetchWeather = (city) => async (dispatch, getState) => {
  try {
    dispatch({ type: FETCH_WEATHER_DATA_REQUEST })

    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${
        getState().unit
      }&appid=bec94a3e4508449a5a9ff54c70a1990d`
    )

    dispatch({
      type: FETCH_WEATHER_DATA_SUCCESS,
      payload: data,
    })
  } catch (err) {
    dispatch({ type: FETCH_WEATHER_DATA_FAIL, payload: err.message })
  }
}

export const changeDisplayTime = (id) => (dispatch, getState) => {
  const currentData = getState().weather.data.find((item) => item.dt === id)
  dispatch({ type: SELECT_WEATHER_DISPLAY_TIME, payload: currentData })
}

export const changeDisplayDay = (dt_txt) => {
  const selectedDay = dt_txt.split(' ')[0]
  return { type: SELECT_WEATHER_DISPLAY_DAY, payload: selectedDay }
}

export const setTempUnit = (value) => {
  return { type: SET_TEMPERATURE_UNIT, payload: value }
}
