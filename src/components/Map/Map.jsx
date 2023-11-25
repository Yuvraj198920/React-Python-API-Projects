import React from "react";
import GoogleMapReact from "google-map-react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import Rating from "@mui/material/Rating";

import {
  MapContainer,
  PointerContainer,
  Item,
  MarkerContainer,
} from "./styles";
import { useMediaQuery } from "@mui/material";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = ({ setCoordinates, coordinates, setBounds }) => {
  const isMobile = useMediaQuery("(min-width:600px)");

  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAOIh4ogTJegKVs5J6m_V0ZSypMFJnSBAw" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={""}
      >
        <AnyReactComponent
          lat={coordinates.lat}
          lng={coordinates.lng}
          text="My Marker"
        />
      </GoogleMapReact>
    </MapContainer>
  );
};

export default Map;
