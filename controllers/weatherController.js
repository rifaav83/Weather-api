const axios = require("axios");

exports.getWeather = async (req, res) => {
  const city = req.query.city;

  if (!city) {
    return res.status(400).json({ message: "Please provide city name" });
  }

  try {
    const apiKey = process.env.API_KEY;

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const data = response.data;

    res.json({
      city: data.name,
      temp: data.main.temp,
      humidity: data.main.humidity,
      description: data.weather[0].description,
    });

  } catch (error) {
    console.log(error.response?.data || error.message);
    res.status(500).json({ message: "City not found or error" });
  }
};
