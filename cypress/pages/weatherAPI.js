
export class WeatherAPI {
  constructor() {
    this.baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    this.apiKey = 'f0c791450805b273e9b5c6ab42728e47';
  }

  getWeatherByCity(cityName) {
    const url = `${this.baseUrl}?q=${cityName}&appid=${this.apiKey}&units=metric`;
    return cy.request({
      method: 'GET',
      url: url,
      failOnStatusCode: false,
    });
  }
}
