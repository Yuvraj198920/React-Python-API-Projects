import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import { LocationCityOutlined } from "@mui/icons-material/LocalActivityOutlined";
import Rating from "@mui/material";

import {
  StyledPaper,
  StyledMapContainer,
  StyledMarkerContainer,
  StyledPointer,
} from "./styles";

const Map = () => {
  const coordinates = { lat: 0, lng: 0 };
  return (
    <StyledMapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAOIh4ogTJegKVs5J6m_V0ZSypMFJnSBAw" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}
      ></GoogleMapReact>
    </StyledMapContainer>
  );
};

export default Map;
