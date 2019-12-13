import { days, daysShort } from "./data-generator";

const timeout = function(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
};

const rand = () => Math.random() < .8;

const getWeekForecast = () =>
    timeout(1000).then(() =>
        rand()
            ? Promise.resolve(daysShort)
            : Promise.reject(new Error("Week forecast fetch failed.")));

const getDayForecast = dt =>
    timeout(1000).then(() =>
        days[dt] && rand()
            ? Promise.resolve(days[dt])
            : Promise.reject(new Error("Day forecast fetch failed.")));

export { getWeekForecast, getDayForecast };
