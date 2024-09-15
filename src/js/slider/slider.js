import { buttonMarkup } from "./button-markup.js";
import { sliderMarkup } from "./slider-markup.js";

export default class Slider {
  constructor(type, data, element) {
    this.slider = document.querySelector(element);
    this.setConstData(type, data);
    this.initialize();
  }

  setConstData(type, data) {
    this.data = data;
    this.type = type;

    this.deltaOffset = -(this.type === "one-day"
      ? getComputedStyle(document.documentElement).getPropertyValue(
          "--delta-offset-1"
        )
      : getComputedStyle(document.documentElement).getPropertyValue(
          "--delta-offset-5"
        ));
    this.startOffset = 0;
    document.documentElement.style.setProperty("--offset", "0");
    this.currentOffset = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--offset");
    this.slider.classList.add(this.type);
    this.slider.classList.add("have-right");
    this.slider.insertAdjacentHTML(
      "beforeend",
      `
      ${buttonMarkup("left", true)}
      ${sliderMarkup(this.data)}
      ${buttonMarkup("right", false)}
      `
    );
  }

  initialize() {
    this.slider.addEventListener(
      "click",
      this.handleSliderButtonClick.bind(this)
    );
  }

  reset(type, data) {
    this.slider.innerHTML = "";
    this.slider.classList.remove("have-left");
    this.slider.classList.toggle(this.type);
    this.setConstData(type, data);
  }

  handleSliderButtonClick(event) {
    const handleLeftButtonClick = (currentOffset) => {
      if (!this.slider.classList.contains("have-right")) {
        this.slider.classList.add("have-right");
        event.currentTarget.querySelector(".right").removeAttribute("disabled");
      }

      const newOffset = +currentOffset - +this.deltaOffset;

      // Check boundaries
      if (+newOffset >= +this.startOffset) {
        document.documentElement.style.setProperty(
          "--offset",
          `${this.startOffset.toString()}px`
        );

        this.slider.classList.toggle("have-left");
        event.target.closest(".left").setAttribute("disabled", "disabled");
        event.currentTarget.querySelector(".right").removeAttribute("disabled");
        return;
      }

      // Set new offset
      document.documentElement.style.setProperty("--offset", `${newOffset}px`);
    };

    const handleRightButtonClick = (currentOffset) => {
      const endOffset =
        this.data.length * this.deltaOffset +
        +getComputedStyle(document.documentElement).getPropertyValue(
          "--slider-length"
        );

      if (!this.slider.classList.contains("have-left")) {
        this.slider.classList.add("have-left");
        event.currentTarget.querySelector(".left").removeAttribute("disabled");
      }

      const newOffset = +currentOffset + +this.deltaOffset;

      // Check boundaries
      if (+newOffset <= +endOffset) {
        document.documentElement.style.setProperty(
          "--offset",
          `${endOffset.toString()}px`
        );

        this.slider.classList.toggle("have-right");
        event.target.closest(".right").setAttribute("disabled", "disabled");
        event.currentTarget.querySelector(".left").removeAttribute("disabled");
        return;
      }
      // Set new offset
      document.documentElement.style.setProperty("--offset", `${newOffset}px`);
    };

    if (!event.target.closest(".slider__button")) return;

    const currentOffset = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue("--offset")
    );

    if (event.target.closest(".left")) {
      handleLeftButtonClick(currentOffset);
    }

    if (event.target.closest(".right")) {
      handleRightButtonClick(currentOffset);
    }
  }
}
