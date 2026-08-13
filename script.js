const container = document.querySelector(".container");
const search = document.querySelector(".search-box");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error404 = document.querySelector(".not-found");
const CityHide = document.querySelector(".city-hide");


search.addEventListener("click", () => {
    
    const APIKey = '3dfc2143ec1450b6d7783b6c91fd776e';
    const city = document.querySelector(".search-box input").value.trim();
    
    if (city === "")
        return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(Response => Response.json()).then(json => {
        
        if (json.cod == '404') {
            CityHide.textContent = city;
            container.style.height = '700px';
            weatherBox.classList.remove('active');
            weatherDetails.classList.remove('active');
            error404.classList.add('active');
            return;
        }
        
        
        const image = document.querySelector(".weather-box img");
        const temparature = document.querySelector(".weather-box .temparature");
        const description = document.querySelector(".weather-box .description");
        const humidity = document.querySelector(".weather-details .humidity span");
        const Wind = document.querySelector(".weather-details .Wind span");
        
        
        if (CityHide.textContent == city) {
            return;
        }
        else {
            CityHide.textContent = city;
            
            container.style.height = '850px';
            container.classList.add('active');
            weatherBox.classList.add('active');
            weatherDetails.classList.add('active');
            error404.classList.remove('active');
            
            setTimeout(() => {
                container.classList.remove('active');
            }, 2500);
            
            
            switch (json.weather[0].main) {
                case "Clear":
                    image.src = "image/clear.png";
                    break;
                
                case "Clouds":
                    image.src = "image/cloud.png";
                    break;
                
                case "Rain":
                    image.src = "image/rain.png";
                    break;
                
                case "Snow":
                    image.src = "image/snow.png";
                    break;
                
                case "Mist":
                case "Haze":
                    image.src = "image/mist.png";
                    break;
                
                default:
                    image.src = "image/cloud.png";
            }
            
            
            temparature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            Wind.innerHTML = `${parseInt(json.wind.speed)} Km/h`;
            
            
            const infoWeather = document.querySelector(".info-weather");
            const infoHumidity = document.querySelector(".info-humidity");
            const infoWind = document.querySelector(".info-Wind");
            
            
            infoWeather.classList.remove("animate");
            infoHumidity.classList.remove("animate");
            infoWind.classList.remove("animate");
            
            
            void infoWeather.offsetWidth;
            void infoHumidity.offsetWidth;
            void infoWind.offsetWidth;
            
            
            infoWeather.classList.add("animate");
            infoHumidity.classList.add("animate");
            infoWind.classList.add("animate");
        }
    });
});