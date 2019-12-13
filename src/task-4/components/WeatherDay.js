import React from "react";
import { connect } from "react-redux";
import { openDayDetails } from "../actions/day-forecast";

const WeatherDay = props => {
        return (
            <li className={props.selectedDt === props.day.dt ? "list-inline-item active" : "list-inline-item"} onClick={() => props.openDayDetails(props.day.dt)}>
                <div className="day-name">{new Date(props.day.dt).toLocaleDateString("en-EN", {weekday: "short"})}</div>
                <img src={`img/${props.day.weather.icon}.png`} alt={props.day.weather.description} />
                <div className="temp">{Math.floor(props.day.temp.min)}&#x2103; {Math.floor(props.day.temp.max)}&#x2103;</div>
            </li>
        );

};

const mapStateToProps = state => ({
    selectedDt: state.selectedDt
});
const mapDispatchToProps = dispatch => ({
    openDayDetails: (key) => dispatch(openDayDetails(key))
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDay);