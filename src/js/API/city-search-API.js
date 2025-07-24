export default class SearchCityAPI {
  constructor(username = 'demo') {
    this.endpoint = 'http://api.geonames.org/searchJSON';
    this.username = username;
  }

  async fetchCities(query) {
    const url = `${this.endpoint}?name_startsWith=${encodeURIComponent(query)}&maxRows=10&username=${this.username}&lang=ru&type=json`;
    const response = await fetch(url);
    const data = await response.json();
    return data.geonames || [];
  }
}

// geoname -
// {
// toponymName,
// name,
// lat,
// lng,
// }