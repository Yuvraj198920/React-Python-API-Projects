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

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
        console.log(latitude, longitude);
      }
    );
  }, []);

  useEffect(() => {
    getPlacesData(bounds?.sw, bounds?.ne).then((data) => {
      setPlaceData(data);
      console.log(data);
    });
  }, [coordinates, bounds]);
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item sx={12} md={4}>
          <List places={placeData} childClicked={child} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            coordinates={coordinates}
            setBounds={setBounds}
            places={placeData}
            setChildClick={setChildClick}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
