import humidity from '../images/card-images/humidity.png';
import barometr from '../images/card-images/barometr.png';
import visibility from '../images/card-images/visibility.png';
import sunrise from '../images/card-images/sunrise.png';
import sunset from '../images/card-images/sunset.png';
import nordWest from '../images/card-images/nord-west.png';
import dayBrokenClouds from '../images/weather-thumbs/day-broken-clouds.png';

export const dataNew = {
  date: "суббота, 06 января",
  time: "11:29",
  cityName: "Mapc",
  temperature: "-7°",
  cloudiness: "облачно",
  cloudThumb: dayBrokenClouds,
  fillLike: "-11°",
  humidityData: {
    cardTitle: "Влажность",
    cardThumb: humidity,
    cardThumbAlt: "Ssunrise picture",
    indicator: "75%",
    gaugePercent: "75%",
    bottomStatus: {
      percents: "percents",
    },
  },
  pressureData: {
    cardTitle: "Давление",
    cardThumb: barometr,
    cardThumbAlt: "Pressure picture",
    indicator: "750",
    gaugePercent: "50%",
    bottomStatus: "Повышенное",
  },
  visibilityData: {
    cardTitle: "Видимость",
    cardThumb: visibility,
    cardThumbAlt: "Visibility picture",
    indicator: "28 км.",
    gaugePercent: "28%",
    bottomStatus: "Нормальная",
  },
  sunriseData: {
    cardTitle: "Рассвет",
    cardThumb: sunrise,
    cardThumbAlt: "Sunrise picture",
    indicator: "5:42",
    bottomStatus: "after",
  },
  sunsetData: {
    cardTitle: "Закат",
    cardThumb: sunset,
    cardThumbAlt: "Sunset picture",
    indicator: "20:37",
    bottomStatus: "before",
  },
  windData: {
    cardTitle: "Сила ветра",
    cardThumb: nordWest,
    cardThumbAlt: "Wind direction picture",
    indicator: "2 м/с",
    bottomStatus: "Северо-западный",
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
    datetime: "Вс, 07 янв.",
    imageSrc: dayBrokenClouds,
    temperature: "от -17° до -11°",
  },
  {
    datetime: "Пн, 08 янв.",
    imageSrc: dayBrokenClouds,
    temperature: "от -16° до -8°",
  },
  {
    datetime: "Вт, 09 янв.",
    imageSrc: dayBrokenClouds,
    temperature: "от -8° до -2°",
  },
  {
    datetime: "Ср, 10 янв.",
    imageSrc: dayBrokenClouds,
    temperature: "от -17° до -11°",
  },
  {
    datetime: "Чт, 11 янв.",
    imageSrc: dayBrokenClouds,
    temperature: "от -16° до -8°",
  },
];
