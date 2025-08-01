
# Weather API Automation Testing (OpenWeatherMap)

This project performs **automated API testing** of the [OpenWeatherMap](https://openweathermap.org/api) weather endpoint using **Cypress** and the **Page Object Model (POM)** design pattern.
---

## 📌 Objective
Ensure the weather API:
- Returns accurate weather data for valid cities.
- Gracefully handles invalid requests (e.g., incorrect city name or invalid API key).
- Returns correct response structure, data types, and within acceptable response time.

---

## Tech Stack

| Tool        | Purpose                       |
|-------------|-------------------------------|
| Cypress     | API automation testing tool   |
| JavaScript  | Language used                 |
| Mocha       | Test runner (built-in Cypress)|
| POM         | Organizes test logic cleanly  |

---

### 📦 Install Dependencies

```bash
npm init -y

```bash
npm install cypress@latest

```bash
npx cypress open     # for interactive mode
npx cypress run      # for headless mode

```bash
npm install mochawesome -report-generator

```bash
npx cypress run --reporter mochawesome
