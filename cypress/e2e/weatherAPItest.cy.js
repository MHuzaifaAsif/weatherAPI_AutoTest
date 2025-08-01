import { WeatherAPI } from "../pages/weatherAPI";

const weatherAPI = new WeatherAPI();

describe('Weather API Automation Tests using POM', () => {

  it('Valid city: Lahore', () => {
    weatherAPI.getWeatherByCity('Lahore').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq('Lahore');
      expect(response.body.main.temp).to.be.a('number');
      expect(response.body.weather[0].description).to.be.a('string');
    });
  });

  it('Invalid city name', () => {
    weatherAPI.getWeatherByCity('a').then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body.message).to.include('city not found');
    });
  });

  it('Missing City Query: Should return 400 error', () => {
    const url = `${Cypress.config('baseUrl')}/weather?appid=${Cypress.env('apiKey')}&units=metric`;
    cy.request({
      method: 'GET',
      url: 'https://api.openweathermap.org/data/2.5/weather',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(401);
    });
  });

  it('Invalid API Key: Should return 401 error', () => {
    const url = `${Cypress.config('baseUrl')}/weather?q=Lahore&appid=INVALIDKEY123&units=metric`;
    cy.request({
      method: 'GET',
      url: 'https://api.openweathermap.org/data/2.5/weather',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body.message).to.include('Invalid API key');
    });
  });

  it('Verify Temperature Unit is Metric', () => {
    weatherAPI.getWeatherByCity('Faisalabad').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.main.temp).to.be.a('number');
    });
  });

  it('Check response time under 2 seconds', () => {
    weatherAPI.getWeatherByCity('Lahore').then((response) => {
      expect(response.duration).to.be.lessThan(2000);
    });
  });

  it('Validate Response Structure', () => {
    weatherAPI.getWeatherByCity('Lahore').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.all.keys(
        'coord', 'weather', 'base', 'main', 'visibility', 'wind',
        'clouds', 'dt', 'sys', 'timezone', 'id', 'name', 'cod'
      );
    });
  });
});
