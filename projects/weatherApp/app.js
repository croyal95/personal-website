async function getWeather() {

    const city = document.getElementById("city-input").value;
    const apiKey = 'a8b9be7998104207b6533127240711'; 
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
    
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error("City not found");
    
            const data = await response.json();
            displayWeather(data);
        } catch (error) {
            console.error("Error fetching data:", error);
            document.getElementById("weather-result").innerHTML = "Error: Unable to retrieve weather data.";
        }
    }
    
    function displayWeather(data) {
        const weatherResult = document.getElementById("weather-result");
        const { location, current } = data;
        weatherResult.innerHTML = `
            <h2>${location.name}, ${location.country}</h2>
            <p>Temperature: ${current.temp_c}°C</p>
            <p>Condition: ${current.condition.text}</p>
            <img src="${current.condition.icon}" alt="${current.condition.text}">
            <p>Humidity: ${current.humidity}%</p>
            <p>Wind Speed: ${current.wind_kph} kph</p>
        `;
    }
 
   
