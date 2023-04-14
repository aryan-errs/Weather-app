var cityname = document.getElementById("cityname");
var btn = document.getElementById("submit");
var city = document.getElementById("city");
var sky = document.getElementById("sky");
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");
var result = document.querySelector(".result");
var span = document.getElementById("icon")
var submit_button = document.getElementById("submit");

// The api key
apik = "04c2bd93699fc6ead509443b42c39ab7";

function submit() {
    var text = cityname.value;
    if(text === ""){
        alert("Please enter a city.")
        return
    }
    var str1 = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    city.innerText =  str1;
    
    fetchData(text);
    
    span.innerHTML = "";
    result.classList.add("res1");
}

function fetchData(text) {
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        text +
        "&appid=" +
        apik
    )
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        if (data["message"]==="city not found") {
            alert("This city does not exist.")
        }
        else{
            result.classList.remove("res1");
            var temperature = data["main"]["temp"] - 273;
            var speed = data["wind"]["speed"];
            var descript = data["weather"][0]["description"];
            var iconcode = data["weather"][0]["icon"]
            var iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@2x.png";
            const icon = document.createElement("img")
            icon["src"] = iconurl;
            sky.innerText = descript.charAt(0).toUpperCase() + descript.slice(1).toLowerCase();
            temp.innerText = "Temperature: " + Math.round(temperature * 100) / 100 + "°C";
            wind.innerText = "Wind speed: " + speed + " m/s";
            cityname.value = "";
            span.appendChild(icon)
            console.log(icon);
        }
    })
}
document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        submit();
    }
})
submit_button.addEventListener("click", submit );