import { WeatherAPI } from "../pages/weatherAPI";

const weatherAPI = new WeatherAPI();

describe('Weather API Automation Tests using POM', () => {

  it('TC01 - Valid city: Lahore', () => {
    weatherAPI.getWeatherByCity('Lahore').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq('Lahore');
      expect(response.body.main.temp).to.be.a('number');
      expect(response.body.weather[0].description).to.be.a('string');
    });
  });

  it('TC02 - Invalid city name', () => {
    weatherAPI.getWeatherByCity('a').then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body.message).to.include('city not found');
    });
  });
});
