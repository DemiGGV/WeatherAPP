import humidity from '../images/card-images/humidity.png';
import barometr from '../images/card-images/barometr.png';
import visibility from '../images/card-images/visibility.png';
import sunrise from '../images/card-images/sunrise.png';
import sunset from '../images/card-images/sunset.png';
import nordWest from '../images/card-images/nord-west.png';
import dayBrokenClouds from '../images/weather-thumbs/day-broken-clouds.png';

export const dataNew = {
  date: "Sat, 06 January",
  time: "11:29",
  cityName: "Mapc",
  temperature: "-7°",
  cloudiness: "overcast",
  cloudThumb: dayBrokenClouds,
  fillLike: "-11°",
  humidityData: {
    cardTitle: "Humidity",
    cardThumb: humidity,
    cardThumbAlt: "Sunrise picture",
    indicator: "75%",
    gaugePercent: "75%",
    bottomStatus: {
      percents: "percents",
    },
  },
  pressureData: {
    cardTitle: "Pressure",
    cardThumb: barometr,
    cardThumbAlt: "Pressure picture",
    indicator: "750",
    gaugePercent: "50%",
    bottomStatus: "Elevated",
  },
  visibilityData: {
    cardTitle: "Visibility",
    cardThumb: visibility,
    cardThumbAlt: "Visibility picture",
    indicator: "28 km.",
    gaugePercent: "28%",
    bottomStatus: "Normal",
  },
  sunriseData: {
    cardTitle: "Sunrise",
    cardThumb: sunrise,
    cardThumbAlt: "Sunrise picture",
    indicator: "5:42",
    bottomStatus: "after",
  },
  sunsetData: {
    cardTitle: "Sunset",
    cardThumb: sunset,
    cardThumbAlt: "Sunset picture",
    indicator: "20:37",
    bottomStatus: "before",
  },
  windData: {
    cardTitle: "Wind Speed",
    cardThumb: nordWest,
    cardThumbAlt: "Wind direction picture",
    indicator: "2 m/s",
    bottomStatus: "Northwest",
  },
};

export const oneDayData = [
  {
    datetime: "00:00",
    imageSrc: dayBrokenClouds,
    temperature: "-17°",
  },
  {
    datetime: "03:00",
    imageSrc: dayBrokenClouds,
    temperature: "-17°",
  },
  {
    datetime: "06:00",
    imageSrc: dayBrokenClouds,
    temperature: "-16°",
  },
  {
    datetime: "09:00",
    imageSrc: dayBrokenClouds,
    temperature: "-13°",
  },
  {
    datetime: "12:00",
    imageSrc: dayBrokenClouds,
    temperature: "-9°",
  },
  {
    datetime: "15:00",
    imageSrc: dayBrokenClouds,
    temperature: "-7°",
  },
  {
    datetime: "18:00",
    imageSrc: dayBrokenClouds,
    temperature: "-7°",
  },
  {
    datetime: "21:00",
    imageSrc: dayBrokenClouds,
    temperature: "-9°",
  },
];

export const fiveDayData = [
  {
    datetime: "Sun, 07 January",
    imageSrc: dayBrokenClouds,
    temperature: "от -17° до -11°",
  },
  {
    datetime: "Mon, 08 January",
    imageSrc: dayBrokenClouds,
    temperature: "от -16° до -8°",
  },
  {
    datetime: "Tue, 09 January",
    imageSrc: dayBrokenClouds,
    temperature: "от -8° до -2°",
  },
  {
    datetime: "Wed, 10 January",
    imageSrc: dayBrokenClouds,
    temperature: "от -17° до -11°",
  },
  {
    datetime: "Thu, 11 January",
    imageSrc: dayBrokenClouds,
    temperature: "от -16° до -8°",
  },
];
