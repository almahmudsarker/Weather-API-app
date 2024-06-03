const data = [
  {
    location: "London",
    latitude: 51.5076,
    longitude: -0.1332,
  },
  {
    location: "Kolkata",
    latitude: 22.5417,
    longitude: 88.3644,
  },
  {
    location: "Dinajpur",
    latitude: 25.6279,
    longitude: 88.6338,
  },
  {
    location: "Dhaka",
    latitude: 23.7883,
    longitude: 90.4075,
  },
];

function getLocations() {
  return data;
}

function getLocationByName(location) {
  const defaultLocation = {
    location: "",
    latitude: 0,
    longitude: 0,
  };

  if (!location) return null;

  const filtered = data.filter((item) => item.location === location);

  if (filtered.length > 0) {
    return filtered[0];
  } else {
    defaultLocation;
  }
  return defaultLocation;
}

export { getLocationByName, getLocations };
