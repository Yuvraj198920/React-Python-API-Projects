import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/Placedetails";

// import mui components
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";

//import API
import { getPlacesData } from "./api";

const App = () => {
  const [placeData, setPlaceData] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);

  const [child, setChildClick] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  const [filterPlaces, setFilterPlaces] = useState([]);

  useEffect(() => {
    setFilterPlaces(placeData?.filter((place) => place.rating > rating));
  }, [rating]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
        console.log(latitude, longitude);
      }
    );
  }, []);

  useEffect(() => {
    setLoading(true);
    getPlacesData(type, bounds?.sw, bounds?.ne).then((data) => {
      data = data?.filter((place) => "name" in place);
      setPlaceData(data);
      setFilterPlaces([]);
      setLoading(false);
    });
  }, [type, coordinates, bounds]);
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item sx={12} md={4}>
          <List
            places={filterPlaces.length ? filterPlaces : placeData}
            childClicked={child}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            coordinates={coordinates}
            setBounds={setBounds}
            places={filterPlaces.length ? filterPlaces : placeData}
            setChildClick={setChildClick}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
