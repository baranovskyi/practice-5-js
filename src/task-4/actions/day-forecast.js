import { getDayForecast } from "../api";
export const OPEN_DAY_DETAILS = "OPEN_DAY_DETAILS";
export const FETCH_DAY_START = "FETCH_DAY_START";
export const FETCH_DAY_SUCCESS = "FETCH_DAY_SUCCESS";
export const FETCH_DAY_FAILURE = "FETCH_DAY_FAILURE";

export const openDayDetails = dt => (dispatch, getState) => {
    const day = getState();
    
    if(dt === day.selectedDt){
        return dispatch(fetchOpenDayDetails(null));
    } else {
        return dispatch(fetchOpenDayDetails(dt));
    }
};

const fetchOpenDayDetails = (dt) => ({
    type: OPEN_DAY_DETAILS,
    dt
});

const fetchDayStart = (dt) => ({
    type: FETCH_DAY_START,
    dt
});

const fetchDaySuccess = (dayForecast) => ({
    type: FETCH_DAY_SUCCESS,
    dayForecast
});

const fetchDayFailure = (dt, e) => ({
    type: FETCH_DAY_FAILURE,
    dt,
    error: e.message
});

export const fetchDayForecast = (dt) => (dispatch, getState) => {

    const day = getState().dayForecast[dt];

    // Check if we really have to make a request
    if (dt === null || (day && (day.loading || day.data))) {
        return;
    }

    dispatch(fetchDayStart(dt));

    return getDayForecast(dt)
        .then(dayData => dispatch(fetchDaySuccess(dayData)))
        .catch(e => dispatch(fetchDayFailure(dt, e)));
};