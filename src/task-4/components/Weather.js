import React from "react";
import WeatherDay from "./WeatherDay";
import WeatherDetails from "./WeatherDetails";

import { daysShort } from "../api/data-generator";
import { connect } from "react-redux";
import { fetchWeekForecast } from '../actions/week-forecast'


class Weather extends React.Component { 
    componentDidMount() {
        this.props.fetchWeekForecast()
    }

    render() {
        if (this.props.weekLoading) {
            return (
                <div className="weather">
                    <span className="fa fa-spinner fa-spin"></span>
                </div>
            )
        } else if (this.props.weekError) {
            return (
                <div className="weather">
                    <div className="error">Error occurred during data fetch. Try to <button onClick={this.props.fetchWeekForecast}>reload</button></div>
                </div>
            )
        }
        return (
            <div className="weather">
                <ul className="list-inline mx-auto">
                    {daysShort.map(day => (
                        <WeatherDay
                            day={day}
                            key={day.dt} />
                    ))}
                </ul>
                <WeatherDetails />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    weekLoading: state.weekLoading,
    weekError: state.weekError,
    weekForecast: state.weekForecast
});
const mapDispatchToProps = dispatch => ({
    fetchWeekForecast: () => dispatch(fetchWeekForecast())
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);