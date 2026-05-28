const cityInput = document.getElementById("cityInput")


const searchBtn = document.getElementById("searchBtn")
    searchBtn.addEventListener("click", () => {
        
        const city = cityInput.value

        if (city === "") {
            return
        }
        getWeather(city)
    })


const weatherResult = document.getElementById("weatherResult")


async function getWeather(city) {
    const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`

    const response = await fetch(geoUrl)
    const data = await response.json()

    const latitude = data.results[0].latitude
    const longitude = data.results[0].longitude
    
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`

    const weatherResponse = await fetch(weatherUrl)
    const weatherData = await weatherResponse.json()

    const temperature = weatherData.current_weather.temperature
    const windspeed = weatherData.current_weather.windspeed

    weatherResult.innerHTML = `
        <h2>${city}</h2>
        <p>Temperature: ${temperature}</p>
        <p>Wind Speed: ${windspeed}</p>
    `
}