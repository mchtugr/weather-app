import {
  FETCH_WEATHER_DATA_FAIL,
  FETCH_WEATHER_DATA_REQUEST,
  FETCH_WEATHER_DATA_SUCCESS,
  SELECT_WEATHER_DISPLAY_DAY,
  SELECT_WEATHER_DISPLAY_TIME,
  SET_TEMPERATURE_UNIT,
} from '../constants'

export const weatherReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_WEATHER_DATA_REQUEST:
      return { loading: true }
    case FETCH_WEATHER_DATA_SUCCESS:
      const selectedData = action.payload.list[0]
      return {
        data: action.payload.list,
        location: action.payload.city,
        selectedData,
        selectedDay: selectedData.dt_txt.split(' ')[0],
        loading: false,
      }
    case SELECT_WEATHER_DISPLAY_TIME:
      return { ...state, selectedData: action.payload, loading: false }
    case SELECT_WEATHER_DISPLAY_DAY:
      return { ...state, selectedDay: action.payload, loading: false }
    case FETCH_WEATHER_DATA_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const unitReducer = (state = 'metric', action) => {
  switch (action.type) {
    case SET_TEMPERATURE_UNIT:
      return action.payload
    default:
      return state
  }
}
