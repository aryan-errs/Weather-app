var cityname = document.getElementById("cityname");
var btn = document.getElementById("submit");
var city = document.getElementById("city");
var sky = document.getElementById("sky");
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");
var result = document.querySelector(".result");
var lat;
var lon;
// The api key
apik = "04c2bd93699fc6ead509443b42c39ab7";

btn.addEventListener("click", () =>{
    result.classList.remove("res1");
    var text = cityname.value;
    var str1 = text.charAt(0).toUpperCase() + text.slice(1);
    city.innerText = "Weather of " + str1;


    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ text + '&appid=' + apik)
    .then(res => res.json())
    .then(data => {
        var temperature = data['main']['temp'] - 273;
        var speed = data['wind']['speed'];
        var descript = data['weather'][0]['description'];

        sky.innerText = "Sky condition: " + descript;
        temp.innerText = "Temperature: "  + Math.round(temperature * 100)/100;
        wind.innerText = "Wind speed: " + speed;
        console.log(data);
        cityname.value = ""
    })
    .catch(alert("The does not exist."));
}
)