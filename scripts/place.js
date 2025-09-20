let temp = 13;
let con = "Mostly Cloudy";
let wind = 32;
let chill = 0;

const temp_value = document.getElementById("temp-value");
const con_value = document.getElementById("con-value");
const wind_value = document.getElementById("wind-value");
const chill_value = document.getElementById("chill-value");


const calculateWindChill = (airTemp, windSpeed) => {
  return Math.round(13.12 + (0.6215 * airTemp) - (11.37 * windSpeed ** 0.16) + (0.3965 * airTemp * windSpeed ** 0.16));
};

if (temp <= 10 && wind > 4.8) {
  console.log("temp is: " + temp);
  console.log("wind is: " + wind);
  chill = calculateWindChill(temp, wind) + " °C"; 
  console.log("the new windchill factor is: " + chill);
} else {
  chill = "N/A"
}


temp_value.textContent = temp + " °C";
con_value.textContent = con;
wind_value.textContent = wind + " km/h";
chill_value.textContent = chill;