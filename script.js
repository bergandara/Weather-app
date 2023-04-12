let weather = {
    apiKey: "b99061643dd62c1ceb1743882d090294";
    FetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&appid="
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => console.log(data));
    },
    displayWeather: function (data) {

    }
};