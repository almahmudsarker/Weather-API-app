import { useContext } from "react";

import CloudIcon from "../../assets/cloud.svg";
import HazeIcon from "../../assets/haze.svg";
import RainIcon from "../../assets/rainy.svg";
import SunnyIcon from "../../assets/sun.svg";
import ThunderIcon from "../../assets/thunder.svg";

import PinImage from "../../assets/pin.svg";
import { WeatherContext } from "../../context";
import { getDateFormatted } from "../../utils/date-utils";

export default function WeatherHeadLine() {
  const { weatherData } = useContext(WeatherContext);

  const { climax, temperature, location, time } = weatherData;

  function getWeatherIcon(climax) {
    switch (climax) {
      case "Rain":
        return RainIcon;
      case "Clouds":
        return CloudIcon;
      case "Thunder":
        return ThunderIcon;
      case "Haze":
        return HazeIcon;

      default:
        return SunnyIcon;
    }
  }
  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(climax)} alt="climax" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temperature)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={PinImage} alt="pin-image" />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {getDateFormatted(time, "time", false)} -{" "}
        {getDateFormatted(time, "date", false)}
      </p>
    </div>
  );
}
