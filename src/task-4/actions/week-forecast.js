export const FETCH_WEEK_START = "FETCH_WEEK_START";
export const FETCH_WEEK_SUCCESS = "FETCH_WEEK_SUCCESS";
export const FETCH_WEEK_FAILURE = "FETCH_WEEK_FAILURE";
import { getWeekForecast } from '../api/index';
import { FETCH_DAY_FAILURE } from './day-forecast';


const fetchWeekStart = () => ({
    type: FETCH_WEEK_START
});

const fetchWeekSuccess = (weekForecast) => ({
    type: FETCH_WEEK_SUCCESS,
    weekForecast
});

const fetchWeekFailure = e => ({
    type: FETCH_DAY_FAILURE,
    error: e.message
});

export const fetchWeekForecast = () => (dispatch, getState) => {
    dispatch(fetchWeekStart());
    return getWeekForecast()
    .then(weekData => dispatch(fetchWeekSuccess(weekData)))
    .catch(e => dispatch(fetchWeekFailure(e)))
};