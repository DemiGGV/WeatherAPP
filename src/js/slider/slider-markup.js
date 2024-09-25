export const sliderMarkup = data => {
  return `
    <div class="slider">
     <ul class="slider__strip"> ${data
       .map(
         ({ datetime, imageSrc, temperature }) => `
      <li class="slider__item">
                    <time datetime="${datetime}" class="slider__date-time">${datetime}</time>
                    <img
                      width="32"
                      height="32"
                      src="${imageSrc}"
                      alt="Weather image"
                    class="slider__icon"
                    />
                    <p class="slider__temperature">${temperature}</p>
                 </li>
        `
       )
       .join('')}
      </ul>
    </div>
    `;
};
