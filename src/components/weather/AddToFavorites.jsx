import { useContext, useEffect, useState } from "react";
import RedHeartIcon from "../../assets/heart-red.svg";
import HeartIcon from "../../assets/heart.svg";
import { FavoriteContext, WeatherContext } from "../../context";

export default function AddToFavorites() {
  const { addToFavorites, removeFromFavorites, favorites } =
    useContext(FavoriteContext);

  const { weatherData } = useContext(WeatherContext);

  const [isFavorite, setIsFavorite] = useState(false);

  const { latitude, longitude, location } = weatherData;

  useEffect(() => {
    const found = favorites.find((fav) => fav.location === location);
    setIsFavorite(found);
  }, []);

  function handleFavorite() {
    const found = favorites.find((fav) => fav.location === location);

    if (!found) {
      addToFavorites(latitude, longitude, location);
    } else {
      removeFromFavorites(location);
    }
    setIsFavorite(!isFavorite);
  }

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="mt-10 text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFavorite}
        >
          <span>Add to Favorite</span>
          <img src={isFavorite ? RedHeartIcon : HeartIcon} alt="heart" />
        </button>
      </div>
    </div>
  );
}
