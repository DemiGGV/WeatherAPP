function t(t,e,i,s){Object.defineProperty(t,e,{get:i,set:s,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},r={},a=i.parcelRequire4b68;null==a&&((a=function(t){if(t in s)return s[t].exports;if(t in r){var e=r[t];delete r[t];var i={id:t,exports:{}};return s[t]=i,e.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){r[t]=e},i.parcelRequire4b68=a),a.register("kyEFX",(function(e,i){var s,r;t(e.exports,"register",(function(){return s}),(function(t){return s=t})),t(e.exports,"resolve",(function(){return r}),(function(t){return r=t}));var a={};s=function(t){for(var e=Object.keys(t),i=0;i<e.length;i++)a[e[i]]=t[e[i]]},r=function(t){var e=a[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),a("kyEFX").register(JSON.parse('{"7bk21":"index.1ca59d0b.js","9AAch":"sprite.3c60d8e9.svg","9gFbl":"humidity.e5895386.png","jqYFU":"barometr.5c2c9c9a.png","1UOD3":"visibility.0089752d.png","ik435":"sunrise.dac2def0.png","7T41A":"sunset.1135177d.png","lfPL8":"nord-west.be585531.png","hnNVN":"day-broken-clouds.397e0a4b.png"}'));const n=({cardTitle:t="",cardThumb:e="/src/assets/images/card-images/barometr.png",cardThumbAlt:i="Placeholder",indicator:s="0",gaugeName:r,gaugePercent:a,bottomStatus:n})=>{const l=new Date,c=t=>t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});if("after"===n){const t=new Date(l),e=s.split(":").map(Number);t.setHours(l.getHours()-e[0]),t.setMinutes(l.getMinutes()-e[1]),n=`Прошло: ${c(t)}`}if("before"===n){const t=new Date(l);let e=s.split(":").map(Number);t.setHours(e[0]-l.getHours()),t.setMinutes(e[1]-l.getMinutes()),n=`Осталось: ${c(t)}`}return`\n    <li class="card ${a?"upper-card":"bottom-card"}">\n      <div class="card__information">\n        <h3 class="card__title">${t}</h3>\n        <img\n          width="32"\n          height="32"\n          src="${e}"\n          alt="H${i}"\n          class="card__thumb"\n        />\n        <p class="card__indicator">\n          <span class="card__value-span">${s}</span>\n        </p>\n      </div>\n      ${a?`<div class="card__bottom">\n                <div class="${r} card__progress-bar">\n                  <div class="card__progress-bar--inner"></div>\n                </div>\n              ${"string"==typeof n?`<p class="card__bottom--status">${n}</p>`:'<div class="card__bottom--status-percents">\n                      <p class="card__bottom--status percents">0%</p>\n                      <p class="card__bottom--status percents">100%</p>\n                    </div>'}\n              </div>`:`<p class="card__bottom--status">${n}</p>`}\n    </li>`};var l;l=new URL(a("kyEFX").resolve("9AAch"),import.meta.url).toString();const c=(t,i)=>`\n  <button type="button" ${i?"disabled":""} aria-label="Кнопка - перемещение слайдера ${t}" class="${t} slider__button">\n      <svg\n      aria-hidden="true"\n      width="18"\n      height="18"\n      class="slider__button-icon icon">\n      <use href="${e(l)}#${t}"></use>\n    </svg>\n  </button>`,o=t=>`\n    <div class="slider">\n     <ul class="slider__strip"> ${t.map((({datetime:t,imageSrc:e,temperature:i})=>`\n      <li class="slider__item">\n                    <time datetime="${t}" class="slider__date-time">${t}</time>\n                    <img\n                      width="32"\n                      height="32"\n                      src="${e}"\n                      alt="Weather image"\n                    class="slider__icon"\n                    />\n                    <p class="slider__temperature">${i}</p>\n                 </li>\n        `)).join("")}\n      </ul>\n    </div>\n    `;var u;u=new URL(a("kyEFX").resolve("9gFbl"),import.meta.url).toString();var d;d=new URL(a("kyEFX").resolve("jqYFU"),import.meta.url).toString();var m;m=new URL(a("kyEFX").resolve("1UOD3"),import.meta.url).toString();var h;h=new URL(a("kyEFX").resolve("ik435"),import.meta.url).toString();var f;f=new URL(a("kyEFX").resolve("7T41A"),import.meta.url).toString();var g;g=new URL(a("kyEFX").resolve("lfPL8"),import.meta.url).toString();var p;const b={date:"суббота, 06 января",time:"11:29",cityName:"москва",temperature:"-7°",cloudiness:"облачно",cloudThumb:e(p=new URL(a("kyEFX").resolve("hnNVN"),import.meta.url).toString()),fillLike:"-11°",humidityData:{cardTitle:"Влажность",cardThumb:e(u),cardThumbAlt:"Ssunrise picture",indicator:"75%",gaugePercent:"75%",bottomStatus:{percents:"percents"}},pressureData:{cardTitle:"Давление",cardThumb:e(d),cardThumbAlt:"Pressure picture",indicator:"750",gaugePercent:"50%",bottomStatus:"Повышенное"},visibilityData:{cardTitle:"Видимость",cardThumb:e(m),cardThumbAlt:"Visibility picture",indicator:"28 км.",gaugePercent:"28%",bottomStatus:"Нормальная"},sunriseData:{cardTitle:"Рассвет",cardThumb:e(h),cardThumbAlt:"Sunrise picture",indicator:"5:42",bottomStatus:"after"},sunsetData:{cardTitle:"Закат",cardThumb:e(f),cardThumbAlt:"Sunset picture",indicator:"20:37",bottomStatus:"before"},windData:{cardTitle:"Сила ветра",cardThumb:e(g),cardThumbAlt:"Wind direction picture",indicator:"2 м/с",bottomStatus:"Северо-западный"}},y=[{datetime:"00:00",imageSrc:e(p),temperature:"-17°"},{datetime:"03:00",imageSrc:e(p),temperature:"-17°"},{datetime:"06:00",imageSrc:e(p),temperature:"-16°"},{datetime:"09:00",imageSrc:e(p),temperature:"-13°"},{datetime:"12:00",imageSrc:e(p),temperature:"-9°"},{datetime:"15:00",imageSrc:e(p),temperature:"-7°"},{datetime:"18:00",imageSrc:e(p),temperature:"-7°"},{datetime:"21:00",imageSrc:e(p),temperature:"-9°"}],v=[{datetime:"Вс, 07 янв.",imageSrc:e(p),temperature:"от -17° до -11°"},{datetime:"Пн, 08 янв.",imageSrc:e(p),temperature:"от -16° до -8°"},{datetime:"Вт, 09 янв.",imageSrc:e(p),temperature:"от -8° до -2°"},{datetime:"Ср, 10 янв.",imageSrc:e(p),temperature:"от -17° до -11°"},{datetime:"Чт, 11 янв.",imageSrc:e(p),temperature:"от -16° до -8°"}],_=(new class{helper(t,e,i){t&&t.addEventListener(e,i.bind(this))}initialize(){this.helper(this.refs.form,"submit",this.handleSubmit),this.helper(this.refs.button,"click",this.handleClickBtn),this.helper(this.refs.input,"focus",this.handleFocus),this.helper(this.refs.input,"blur",this.handleBlur),this.helper(this.refs.input,"input",this.handleInput)}setCrossIcon(){this.refs.button.classList.add("js-cross"),this.refs.icons[0].classList.add("visually-hidden"),this.refs.icons[1].classList.remove("visually-hidden")}setMagGlassIcon(){this.refs.button.classList.remove("js-cross"),this.refs.icons[0].classList.remove("visually-hidden"),this.refs.icons[1].classList.add("visually-hidden")}handleClickBtn(){if(this.refs.input.value&&this.refs.icons[0].classList.value.includes("visually-hidden"))return this.refs.input.value="",this.setMagGlassIcon(),void this.refs.input.blur();this.refs.icons[0].classList.value.includes("visually-hidden")||this.refs.input.blur()}handleFocus(){this.setCrossIcon()}handleBlur(){this.refs.input.value||this.setMagGlassIcon()}handleInput(t){console.log(t.currentTarget.value)}handleSubmit(t){t.preventDefault();const e=t.currentTarget.input.value;console.log("searching for:",e),t.currentTarget.input.value="",this.refs.input.blur()}constructor(){this.refs={form:document.querySelector(".js-search-form"),input:document.querySelector(".js-search-input"),button:document.querySelector(".js-search-btn"),icons:document.querySelectorAll(".js-search-btn > svg")},this.initialize()}},new class{initialize(){this.cityArticle.insertAdjacentHTML("beforeend",`\n      <div class="city-info__main">\n        <h3 class="city-info__city">${this.cityName}</h3>\n        <time datetime="${this.currentDateFormated("robot")}">${this.currentDateFormated("human")}</time>\n        <time time="${this.currentTime.toLocaleTimeString()}">${this.formatTime(this.currentTime)}</time>\n      </div>\n      <p class="city-info__temperature">${this.temperature}</p>\n      <div class="city-info__main">\n        <div class="city-info__weather">\n            <img\n              src="${this.cloudThumb}"\n             alt="Image broken clouds"\n             width="24"\n             height="24"\n             class="city-info__weather-tumbnail"\n            />\n            <p class="city-info__text">${this.cloudiness}</p>\n          </div>\n        <p>Ощущается как ${this.fillLike}</p>\n      </div>`)}formatTime(t){return t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}currentDateFormated(t){const e=["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],i=["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"],s=this.currentTime.getDay();if("human"===t){const t=this.currentTime.getDate().toString().padStart(2,"0");return`${e[s]}, ${t} ${i[this.currentTime.getMonth()]}`}if("robot"===t)return this.currentTime.toLocaleDateString()}constructor({cityName:t,temperature:e,cloudiness:i,cloudThumb:s,fillLike:r}){this.cityArticle=document.querySelector(".js-city"),this.cityName=t,this.temperature=e,this.cloudiness=i,this.cloudThumb=s,this.fillLike=r,this.currentTime=new Date,this.initialize()}}(b),new class{initializing(t){let e="";for(let i in t){if(t[i].gaugePercent){const e=i.replace("Data","");document.documentElement.style.setProperty(`--percent-${e}`,t[i].gaugePercent),t[i].gaugeName=e}e+=n(t[i])}this.cardList.insertAdjacentHTML("beforeend",e)}constructor({humidityData:t,pressureData:e,visibilityData:i,sunriseData:s,sunsetData:r,windData:a}){this.data={humidityData:t,pressureData:e,visibilityData:i,sunriseData:s,sunsetData:r,windData:a},this.cardList=document.querySelector(".js-card-list"),this.initializing(this.data)}}(b),new class{setConstData(t,e){this.data=e,this.type=t,this.deltaOffset=-("one-day"===this.type?getComputedStyle(document.documentElement).getPropertyValue("--delta-offset-1"):getComputedStyle(document.documentElement).getPropertyValue("--delta-offset-5")),this.startOffset=0,document.documentElement.style.setProperty("--offset","0"),this.currentOffset=getComputedStyle(document.documentElement).getPropertyValue("--offset"),this.slider.classList.add(this.type),this.slider.classList.add("have-right"),this.slider.insertAdjacentHTML("beforeend",`\n      ${c("left",!0)}\n      ${o(this.data)}\n      ${c("right",!1)}\n      `)}initialize(){this.slider.addEventListener("click",this.handleSliderButtonClick.bind(this))}currentReset(){this.slider.classList.remove("have-left"),document.documentElement.style.setProperty("--offset","0"),this.currentOffset=0}reset(t,e){this.slider.innerHTML="",this.slider.classList.remove("have-left"),this.slider.classList.toggle(this.type),this.setConstData(t,e)}handleSliderButtonClick(t){if(!t.target.closest(".slider__button"))return;const e=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--offset"));t.target.closest(".left")&&(e=>{this.slider.classList.contains("have-right")||(this.slider.classList.add("have-right"),t.currentTarget.querySelector(".right").removeAttribute("disabled"));const i=+e-+this.deltaOffset;if(+i>=+this.startOffset)return document.documentElement.style.setProperty("--offset",`${this.startOffset.toString()}px`),this.slider.classList.toggle("have-left"),t.target.closest(".left").setAttribute("disabled","disabled"),void t.currentTarget.querySelector(".right").removeAttribute("disabled");document.documentElement.style.setProperty("--offset",`${i}px`)})(e),t.target.closest(".right")&&(e=>{const i=this.data.length*this.deltaOffset+ +getComputedStyle(document.documentElement).getPropertyValue("--slider-length");this.slider.classList.contains("have-left")||(this.slider.classList.add("have-left"),t.currentTarget.querySelector(".left").removeAttribute("disabled"));const s=+e+ +this.deltaOffset;if(+s<=+i)return document.documentElement.style.setProperty("--offset",`${i.toString()}px`),this.slider.classList.toggle("have-right"),t.target.closest(".right").setAttribute("disabled","disabled"),void t.currentTarget.querySelector(".left").removeAttribute("disabled");document.documentElement.style.setProperty("--offset",`${s}px`)})(e)}constructor(t,e,i){this.slider=document.querySelector(i),this.setConstData(t,e),this.initialize()}}("one-day",y,".js-slider-entry"));document.querySelector(".js-slider").addEventListener("click",(function(t){const e=(t,e,i)=>{t.classList.toggle(i),e.classList.toggle(i)};if(!t.target.closest(".slider-heading__link"))return;if(t.target.classList.contains("one-day")){if("one-day"===_.type)return;_.reset("one-day",y),e(t.target,t.currentTarget.querySelector(".five-day"),"active")}if(t.target.classList.contains("five-day")){if("five-day"===_.type)return;_.reset("five-day",v),e(t.target,t.currentTarget.querySelector(".one-day"),"active")}}));
//# sourceMappingURL=index.1ca59d0b.js.map
