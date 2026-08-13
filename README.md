# 🌤️ Weather App

A modern and interactive **Weather App** built using **HTML, CSS, and JavaScript**. The application allows users to search for any city and view its current weather information, including temperature, weather condition, humidity, and wind speed.

The project features a cinematic video background, responsive weather cards, animated transitions, weather-specific icons, and an error screen for invalid locations.

---

## ✨ Features

* 🔍 Search weather by city/location
* 🌡️ Display current temperature in Celsius
* ☁️ Display current weather condition
* 💧 Display humidity percentage
* 🌬️ Display wind speed
* 🌦️ Dynamic weather icons
* 🎬 Full-screen animated video background
* ❌ Location-not-found error screen
* 🎨 Glassmorphism-style weather container
* ✨ Smooth weather information animations
* 🔄 Dynamic UI updates without page reload
* 📱 Modern and clean user interface

---

## 🛠️ Technologies Used

### Frontend

* **HTML5**
* **CSS3**
* **JavaScript (ES6)**

### API

* **OpenWeatherMap API**

### Icons

* **Boxicons**

### Fonts

* **Google Fonts – Commissioner**

---

## 📂 Project Structure

```text
Weather-App/
│
├── index.html
├── style.css
├── script.js
│
├── image/
│   ├── website_bg.mp4
│   ├── cloud.png
│   ├── clear.png
│   ├── rain.png
│   ├── snow.png
│   ├── mist.png
│   └── 404_3.png
│
└── README.md
```

> Make sure the `image` folder and its required assets are present in the project directory.

---

## 🎨 User Interface

The application contains a central weather container with:

1. **Location Search**
2. **Weather Information**
3. **Temperature**
4. **Weather Description**
5. **Humidity**
6. **Wind Speed**
7. **Location Not Found Screen**

The HTML structure includes the location input, weather display, humidity and wind-speed sections, and a dedicated error screen.

---

## ⚙️ How It Works

When the user enters a city name and clicks the search button, JavaScript sends a request to the **OpenWeatherMap API**.

```javascript
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
```

The API response is then used to update the weather information displayed on the page.

The application extracts:

* Temperature
* Weather condition
* Weather description
* Humidity
* Wind speed

and dynamically updates the interface.

---

## 🌦️ Dynamic Weather Icons

The application changes the weather image depending on the API's weather condition.

Supported conditions include:

| Weather Condition | Icon        |
| ----------------- | ----------- |
| Clear             | `clear.png` |
| Clouds            | `cloud.png` |
| Rain              | `rain.png`  |
| Snow              | `snow.png`  |
| Mist              | `mist.png`  |
| Haze              | `mist.png`  |
| Other             | `cloud.png` |

This logic is handled using a JavaScript `switch` statement.

---

## ❌ Error Handling

If the entered location cannot be found, the application displays an error message:

```text
Oops! Location not Found.
```

The weather information is hidden and the error section becomes visible when the API returns a `404` response.

---

## 🎬 Background Video

The application uses a looping MP4 video as its full-screen background.

```html
<video class="bg-video" autoplay muted loop>
    <source src="image/website_bg.mp4" type="video/mp4">
</video>
```

## The CSS positions the video behind the main application and uses `object-fit: cover` to fill the screen.

## ✨ Animations

The application includes several CSS animations for displaying weather information.

### Weather Animation

The weather information slides into view from the top.

### Humidity Animation

The humidity information slides upward into view.

### Wind Animation

The wind information also slides upward into view.

These animations are controlled using CSS `@keyframes` and JavaScript classes.

JavaScript removes and re-adds animation classes whenever a new city is searched so that the animation can play again.

---

## 🔑 API

This project uses the **OpenWeatherMap Current Weather API**.

The application sends the city name and requests metric units so that temperature is returned in Celsius.

---

## 🎨 Design

The UI uses a modern glassmorphism-inspired design with:

* Transparent backgrounds
* Blur effects
* Rounded corners
* White typography
* Large weather icons
* Full-screen video background
* Smooth transitions

The main container uses a blurred backdrop and animated height transitions.

---

## 📦 Dependencies

This project does not require npm or any JavaScript framework.

External resources used:

* OpenWeatherMap API
* Boxicons
* Google Fonts

Boxicons stylesheets are included directly in `index.html`.

---

## 🔮 Future Improvements

Possible improvements for future versions:

* 📍 Automatic location detection
* 📅 5-day weather forecast
* 🌡️ Celsius/Fahrenheit switch
* 🌙 Dark/light mode
* 🌅 Sunrise and sunset information
* 🧭 Wind direction
* 👁️ Visibility information
* 🌧️ Precipitation information
* 📊 Weather charts
* 🕒 Search history
* ⭐ Favorite cities
* 📱 Improved mobile responsiveness
* 🔐 Secure API-key handling
* 🌎 Multiple language support

---

## 📄 License

This project is open-source and available for educational and personal use.

You can modify and improve the project according to your requirements.

---

## 👨‍💻 Author

**Sourish Halder**

If you found this project useful, consider giving the repository a ⭐ on GitHub.

---
