import { buttonMarkup } from './button-markup.js';
import { sliderMarkup } from './slider-markup.js';

export default class Slider {
  constructor(type, data, element) {
    this.slider = document.querySelector(element);
    this.setConstData(type, data);
    this.initialize();
  }

  setConstData(type, data) {
    this.data = data;
    this.type = type;

    this.slider.classList.add(this.type);
    this.slider.classList.add('have-right');
    this.slider.insertAdjacentHTML(
      'beforeend',
      `
      ${buttonMarkup('left', true)}
      ${sliderMarkup(this.data)}
      ${buttonMarkup('right', false)}
      `
    );

    this.startOffset = 0;
    this.currentPage = 0;
    setTimeout(() => {
      this.sliderInnerEl = document.querySelector('.js-slider-inner');
      this.deltaOffset = +this.sliderInnerEl.clientWidth; //-- visible slider width
      this.sliderStripEl = document.querySelector('.js-slider-strip');
      this.sliderStripWidth =
        +this.sliderStripEl.scrollWidth - this.deltaOffset >= 0
          ? +this.sliderStripEl.scrollWidth - this.deltaOffset
          : +this.sliderStripEl.scrollWidth; //-- full slider with
      this.lastPage = +this.sliderStripEl.scrollWidth <= this.deltaOffset;
    }, 0);
    document.documentElement.style.setProperty('--offset', '0');
  }

  initialize() {
    this.slider.addEventListener(
      'click',
      this.handleSliderButtonClick.bind(this)
    );
  }

  reset(type, data) {
    this.slider.innerHTML = '';
    this.slider.classList.remove('have-left');
    this.slider.classList.toggle(this.type);
    this.setConstData(type, data);
  }

  handleSliderButtonClick(event) {
    const handleLeftButtonClick = () => {
      if (!this.slider.classList.contains('have-right')) {
        this.slider.classList.add('have-right');
        event.currentTarget.querySelector('.right').removeAttribute('disabled');
      }

      this.currentPage--;

      if (this.currentPage === 0) {
        document.documentElement.style.setProperty('--offset', '0');
        this.slider.classList.toggle('have-left');
        event.target.closest('.left').setAttribute('disabled', 'disabled');
        return;
      }

      this.lastPage = +this.sliderStripEl.scrollWidth <= this.deltaOffset;
      const newOffset = this.deltaOffset * this.currentPage;
      document.documentElement.style.setProperty('--offset', `-${newOffset}px`);
    };

    const handleRightButtonClick = () => {
      if (!this.slider.classList.contains('have-left')) {
        this.slider.classList.add('have-left');
        event.currentTarget.querySelector('.left').removeAttribute('disabled');
      }

      this.currentPage++;
      if (
        this.currentPage === Math.ceil(this.sliderStripWidth / this.deltaOffset)
      ) {
        this.lastPage = true;
        document.documentElement.style.setProperty(
          '--offset',
          `-${this.sliderStripWidth}px`
        );
        this.slider.classList.toggle('have-right');
        event.target.closest('.right').setAttribute('disabled', 'disabled');
        return;
      }

      const newOffset = this.deltaOffset * this.currentPage;
      document.documentElement.style.setProperty('--offset', `-${newOffset}px`);
    };

    if (!event.target.closest('.slider__button')) return;

    if (event.target.closest('.left')) {
      handleLeftButtonClick();
    }

    if (event.target.closest('.right')) {
      handleRightButtonClick();
    }
  }
}
