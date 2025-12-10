const apikey = "8d40896e503a4c70a14b7ee3cbfa8546";

document.getElementById("btn").addEventListener("click", async () => {
    const city = document.getElementById("city").value;
    if (!city) return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    const result = document.getElementById("result");

    if (data.cod !== 200) {
        result.innerText = "City not found";
        return;
    }

    result.innerText = `${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`;
});
