import Page from "./Page";
import {
  FavoriteProvider,
  LocationProvider,
  WeatherProvider,
} from "./provider/index";

export default function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavoriteProvider>
          <Page />
        </FavoriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}
