import sprite from '../../images/icons/24/sprite.svg';

export const buttonMarkup = (direction, disabled) => {
  return `
  <button type="button" ${
    disabled ? "disabled" : ""
  } aria-label="Кнопка - перемещение слайдера ${direction}" class="${direction} slider__button">
      <svg
      aria-hidden="true"
      width="18"
      height="18"
      class="slider__button-icon icon">
      <use href="${sprite}#${direction}"></use>
    </svg>
  </button>`;
};
