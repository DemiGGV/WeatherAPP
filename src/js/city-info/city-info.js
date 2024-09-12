export default class CityArticle {
  constructor({ cityName, temperature, cloudiness, cloudThumb, fillLike }) {
    this.cityArticle = document.querySelector(".js-city");
    this.cityName = cityName;
    this.temperature = temperature;
    this.cloudiness = cloudiness;
    this.cloudThumb = cloudThumb;
    this.fillLike = fillLike;
    this.currentTime = new Date();

    this.initialize();
  }

  initialize() {
    
    this.cityArticle.insertAdjacentHTML(
      "beforeend",
      `
      <div class="city-info__main">
        <h3 class="city-info__city">${this.cityName}</h3>
        <time datetime="${this.currentDateFormated(
          "robot"
        )}">${this.currentDateFormated("human")}</time>
        <time time="${this.currentTime.toLocaleTimeString()}">${this.formatTime(
        this.currentTime
      )}</time>
      </div>
      <p class="city-info__temperature">${this.temperature}</p>
      <div class="city-info__main">
        <div class="city-info__weather">
            <img
              src="${this.cloudThumb}"
             alt="Image broken clouds"
             width="24"
             height="24"
             class="city-info__weather-tumbnail"
            />
            <p class="city-info__text">${this.cloudiness}</p>
          </div>
        <p>Ощущается как ${this.fillLike}</p>
      </div>`
    );
  }

  formatTime(time) {
    return time.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  currentDateFormated(format) {
    const weekDays = [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ];
    const months = [
      "январь",
      "февраль",
      "март",
      "апрель",
      "май",
      "июнь",
      "июль",
      "август",
      "сентябрь",
      "октябрь",
      "ноябрь",
      "декабрь",
    ];
    const currentDay = this.currentTime.getDay();
    if (format === "human") {
      const currentDayOfMonth = this.currentTime
        .getDate()
        .toString()
        .padStart(2, "0");
      return `${weekDays[currentDay]}, ${currentDayOfMonth} ${
        months[this.currentTime.getMonth()]
      }`;
    }
    if (format === "robot") {
      return this.currentTime.toLocaleDateString();
    }
  }
}
