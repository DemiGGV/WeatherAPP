export const sliderMarkup = (data) => {
  return `
    <div class="js-slider-inner slider">
     <ul class="js-slider-strip slider__strip"> ${data
       .map(
         ({ datetime, imageSrc, temperature }) => `
      <li class="slider__item">
                    <time datetime="${datetime}" class="slider__date-time">${datetime}</time>
                    <img
                      width="24"
                      height="24"
                      src="${imageSrc}"
                      alt="Weather image"
                    class="slider__icon"
                    />
                    <p class="slider__temperature">${temperature}</p>
                 </li>
        `
       )
       .join("")}
      </ul>
    </div>
    `;
};
