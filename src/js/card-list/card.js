export const cardMarkupConstructor = ({
  cardTitle = "",
  cardThumb = "/src/images/card-images/barometr.png",
  cardThumbAlt = "Placeholder",
  indicator = "0",
  gaugeName,
  gaugePercent,
  bottomStatus,
}) => {
  const currentTime = new Date();
  const formatTime = (time) => {
    return time.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  if (bottomStatus === "after") {
    const sunriseAfter = new Date(currentTime);
    const sunrise = indicator.split(":").map(Number);
    sunriseAfter.setHours(currentTime.getHours() - sunrise[0]);
    sunriseAfter.setMinutes(currentTime.getMinutes() - sunrise[1]);
    bottomStatus = `Прошло: ${formatTime(sunriseAfter)}`;
  }

  if (bottomStatus === "before") {
    const sunsetBefore = new Date(currentTime);
    let sunset = indicator.split(":").map(Number);
    sunsetBefore.setHours(sunset[0] - currentTime.getHours());
    sunsetBefore.setMinutes(sunset[1] - currentTime.getMinutes());
    bottomStatus = `Осталось: ${formatTime(sunsetBefore)}`;
  }

  return `
    <li class="card ${gaugePercent ? "upper-card" : "bottom-card"}">
      <div class="card__information">
        <h3 class="card__title">${cardTitle}</h3>
        <img
          width="32"
          height="32"
          src="${cardThumb}"
          alt="H${cardThumbAlt}"
          class="card__thumb"
        />
        <p class="card__indicator">
          <span class="card__value-span">${indicator}</span>
        </p>
      </div>
      ${
        gaugePercent
          ? `<div class="card__bottom">
                <div class="${gaugeName} card__progress-bar">
                  <div class="card__progress-bar--inner"></div>
                </div>
              ${
                typeof bottomStatus === "string"
                  ? `<p class="card__bottom--status">${bottomStatus}</p>`
                  : `<div class="card__bottom--status-percents">
                      <p class="card__bottom--status percents">0%</p>
                      <p class="card__bottom--status percents">100%</p>
                    </div>`
              }
              </div>`
          : `<p class="card__bottom--status">${bottomStatus}</p>`
      }
    </li>`;
};