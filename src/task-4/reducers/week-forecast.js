import {
    FETCH_WEEK_START,
    FETCH_WEEK_SUCCESS,
    FETCH_WEEK_FAILURE } from "../actions/week-forecast";
import { FETCH_DAY_FAILURE, FETCH_DAY_START } from "../actions/day-forecast";

const weekForecast = (state = [], action) => {
    switch(action.type) {
        case FETCH_WEEK_SUCCESS:
            return action.weekForecast
        default:
            return state;
    }
};

const weekLoading = (state = false, action) => {
    switch(action.type) {
        case FETCH_WEEK_START:
            return true;
        case FETCH_WEEK_SUCCESS:
            return false;
        case FETCH_WEEK_FAILURE:
            return false;
        default: 
            return state;
    }
};

const weekError = (state = false, action) => {
    switch(action.type) {
        case FETCH_WEEK_FAILURE:
            return true;
        case FETCH_WEEK_SUCCESS:
            return false;
        default: 
            return state;
    }
};


export { weekForecast, weekLoading, weekError };
