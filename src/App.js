import React, { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import List from "./components/List/List";

import { CssBaseline, Grid } from "@mui/material";
import { getPlacesData } from "./api";

const App = () => {
  const [placedata, setPlacedata] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    console.log(coordinates, bounds);
    getPlacesData(bounds.sw, bounds.ne).then((data) => {
      setPlacedata(data);
      console.log(placedata);
    });
  }, [coordinates, bounds]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List places={placedata} childClicked={childClicked} />
        </Grid>

        <Grid item xs={12} md={8}>
          <Map
            setChildClicked={setChildClicked}
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={placedata}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
