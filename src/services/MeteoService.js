const url = "http://api.openweathermap.org/data/2.5/weather";
const apiKey = "ff49cba504b62175b01318c478218655";

class MeteoService {
  getMeteo = async (inputVille) => {
    return await fetch(
      `${url}?q=${inputVille}&appid=${apiKey}&lang=fr&units=metric`,
      {
        method: "GET",
      }
    ).then((res) => res.json());
  };
}

export default Object.freeze(new MeteoService());
