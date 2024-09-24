let APIkey = 'e4cb0ede06f039ba41004eec60024544';
let button = document.querySelector(".but");
let codeDiv = document.querySelector(".code");

button.addEventListener("click", () => {
    let cityName = document.querySelector("input").value;

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIkey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            let weatherDis = data.list[0].weather[0].description;
            let weatherIcon;

            if (weatherDis.includes("cloud")) {
                weatherIcon = "https://media.discordapp.net/attachments/1113404400984129576/1288027420246671360/cloudsRain.png?ex=66f3b083&is=66f25f03&hm=fd3f5055733a4f791041aa38580170db0d53ff1b666dfd848a609525218693f2&=&format=webp&quality=lossless&width=628&height=628";
            } else if (weatherDis.includes("sunny")) {
                weatherIcon = "https://media.discordapp.net/attachments/1113404400984129576/1288027419998945310/clear.png?ex=66f3b083&is=66f25f03&hm=a3d7e658e9a8f4b48097766b3379ed966d07d8d5cde65782d3da8aacfc75cbf2&=&format=webp&quality=lossless&width=628&height=628";
            } else if (weatherDis.includes("lightning")) {
                weatherIcon = "https://https://media.discordapp.net/attachments/1113404400984129576/1288027420993257513/thunder.png?ex=66f3b083&is=66f25f03&hm=11ccef547f2f17bac52b29339041603559938532448cf8d930753eea335329ca&=&format=webp&quality=lossless&width=628&height=628";
            } else if (weatherDis.includes("rain")) {
                weatherIcon = "https://media.discordapp.net/attachments/1113404400984129576/1288027420774895670/rain.png?ex=66f3b083&is=66f25f03&hm=552b1ff8071f77e1d0d66b91af689a82b5234a2fb96857298c1e34e3cf2046cd&=&format=webp&quality=lossless&width=628&height=628";
            } else if (weatherDis.includes("wind")) {
                weatherIcon = "https://media.discordapp.net/attachments/1113404400984129576/1288027420527558667/cloudwinds.png?ex=66f3b083&is=66f25f03&hm=c04e4aff027f49beb3d8a5c853d599ca3fc74835426977c54a57cb911bf9d79c&=&format=webp&quality=lossless&width=628&height=628";
            } else {
                weatherIcon = "default.png";
            }

            codeDiv.innerHTML = `
                <h2>Weather in ${data.city.name}</h2>
                <p>Temperature: ${Math.round(data.list[0].main.temp - 273.15)}°C</p>
                <p>Weather: ${data.list[0].weather[0].description}</p>
                <img src="${weatherIcon}" alt="${weatherDis}" style="width:100px; height:100px;">
            `;
        })
        .catch(error => {
            codeDiv.innerHTML = `<p>City not found. Please try again.</p>`;
        });
});
