import { cardMarkupConstructor } from "./card.js";

export default class CardList {
  constructor({
    humidityData,
    pressureData,
    visibilityData,
    sunriseData,
    sunsetData,
    windData,
  }) {
    this.data = {
      humidityData,
      pressureData,
      visibilityData,
      sunriseData,
      sunsetData,
      windData,
    };
    this.cardList = document.querySelector(".js-card-list");

    this.initializing(this.data);
  }

  initializing(dataArray) {
    const getName = (item) => {
      return item.replace("Data", "");
    };

    let markup = "";
    
    for (let cardDataKey in dataArray) {
      if (dataArray[cardDataKey].gaugePercent) {
        const cardName = getName(cardDataKey)
        document.documentElement.style.setProperty(
          `--percent-${cardName}`,
          dataArray[cardDataKey].gaugePercent
        );
        dataArray[cardDataKey].gaugeName = cardName;
      }
      markup += cardMarkupConstructor(dataArray[cardDataKey]);
    }
    this.cardList.insertAdjacentHTML("beforeend", markup);
  }
}