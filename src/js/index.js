import SearchFormHandler from "./search-form/search-form.js";
import CityArticle from "./city-info/city-info.js";
import CardList from "./card-list/card-list.js";
import Slider from "./slider/slider.js";
import SearchCityAPI from './API/city-search-API.js';
import ListRenderer from './search-form/list-renderer.js';

import { dataNew } from "../assets/data/data.js";
import { oneDayData } from "../assets/data/data.js";
import { fiveDayData } from "../assets/data/data.js";

const listContainer = document.querySelector(".js-suggestions", handleSelect);
const searchCityAPI = new SearchCityAPI("demiua ");
const listRenderer = new ListRenderer(listContainer, handleSelect);
const searchFormHandler = new SearchFormHandler(handleInput);
const cityArticle = new CityArticle(dataNew);
const cardList = new CardList(dataNew);
const slider = new Slider("one-day", oneDayData, ".js-slider-entry");

// Handling the search form submission
async function handleInput(event) {
  const query = event.currentTarget.value;

  if (query.length < 3) {
    listContainer.innerHTML = ''; // Clear suggestions if query is too short
    return;
  }

  try {
    const cities = await searchCityAPI.fetchCities(query);
    listRenderer.render(cities);
  } catch (error) {
    console.error("Error fetching cities:", error);
  }
}

// Handling the city selection from the suggestions list
function handleSelect(city) {
  console.log("Selected city:", city);
  searchReset();
  // cityArticle.render(city);
  // cardList.render(city);
}

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

// function debounce(func, delay=300) {
//   let timeoutId;
//   return function (...args) {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => func.apply(this, args), delay);
//   };
// }

function searchReset() {
  searchFormHandler.reset();
  listRenderer.clear();
}