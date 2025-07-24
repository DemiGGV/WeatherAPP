export default class ListRenderer {
    constructor(container, handleSelect) {
        this.container = container;
        this.handleClick = handleSelect;
    }

    render(cities) {
        this.clear();
        cities.forEach(city => {
            const li = document.createElement('li');
            li.textContent = `${city.name}, ${city.countryName}`;
            li.classList.add('search-form__item');
            li.addEventListener('click', () => this.handleClick(city));
            this.container.appendChild(li);
        });
    }

    clear() {
        this.container.innerHTML = '';
    }
}