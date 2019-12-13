const weather = [{
    "description": "Sky is clear",
    "icon": "clear-sky"
}, {
    "description": "There's few clouds",
    "icon": "few-clouds"
}, {
    "description": "Scattered clouds",
    "icon": "scattered-clouds"
}, {
    "description": "Broken clouds",
    "icon": "broken-clouds"
}, {
    "description": "Shower rain",
    "icon": "shower-rain"
}, {
    "description": "Raining",
    "icon": "rain"
}, {
    "description": "Thunder and rain",
    "icon": "thunderstorm"
}, {
    "description": "Snowing",
    "icon": "snow"
}, {
    "description": "Misty",
    "icon": "mist"
}];

const getRandVal = (min, delta, real = true) => {
    return +(min + Math.random() * delta).toFixed(real ? 2 : 0);
};

const today = new Date();
today.setHours(0,0,0,0);
let dt = +today;
const days = {};

for (let i = 0; i < 7; i++) {
    days[dt] = {
        dt,
        temp: {
            min: getRandVal(-5, 15),
            max: getRandVal(10, 15)
        },
        pressure: getRandVal(950, 40, false),
        humidity: getRandVal(0, 100, false),
        weather: weather[getRandVal(0, weather.length - 1, false)],
        speed: getRandVal(0, 15),
        deg: getRandVal(0, 360, false),
        clouds: getRandVal(0, 100, false)
    };
    dt += 24 * 3600 * 1000;
}

const daysShort = [];
for (const day of Object.values(days)) {
    daysShort.push({
        dt: day.dt,
        temp: day.temp,
        weather: day.weather
    });
}

export { days, daysShort };