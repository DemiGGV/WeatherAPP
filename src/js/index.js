import SearchFormHandler from "./search-form/search-form.js";
import CityArticle from "./city-info/city-info.js";
import CardList from "./card-list/card-list.js";
import Slider from "./slider/slider.js";
import { dataNew } from "../data/data.js";
import { oneDayData } from "../data/data.js";
import { fiveDayData } from "../data/data.js";

const searchFormHandler = new SearchFormHandler();
const cityArticle = new CityArticle(dataNew);
const cardList = new CardList(dataNew);
const slider = new Slider("one-day", oneDayData, ".js-slider-entry");

// Controlling the slider section

const sliderMain = document.querySelector(".js-slider");
sliderMain.addEventListener("click", handleSwitchSliders);
function handleSwitchSliders(event) {
  const classToggle = (first, second, classVar) => {
    first.classList.toggle(classVar);
    second.classList.toggle(classVar);
  };

  if (!event.target.closest(".slider-heading__link")) return;
  if (event.target.classList.contains("one-day")) {
    if (slider.type === "one-day") return;
    slider.reset("one-day", oneDayData);
    classToggle(
      event.target,
      event.currentTarget.querySelector(".five-day"),
      "active"
    );
  }
  if (event.target.classList.contains("five-day")) {
    if (slider.type === "five-day") return;
    slider.reset("five-day", fiveDayData);
    classToggle(
      event.target,
      event.currentTarget.querySelector(".one-day"),
      "active"
    );
  }
}
