const url = "http://api.openweathermap.org/data/2.5/weather?q=lille&appid=ff49cba504b62175b01318c478218655";

class MeteoService {
  getMeteo = async () => {
    return  await fetch(url, {
      method: "GET",
    }).then((res) => res.json())
  };
}

export default Object.freeze(new MeteoService());
