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
  StyledPaper,
  MarkerContainer,
} from "./styles";
import { useMediaQuery } from "@mui/material";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = ({
  setCoordinates,
  coordinates,
  setBounds,
  places,
  setChildClick,
}) => {
  const isDesktop = useMediaQuery("(min-width:600px)");
  if (places) {
    places = places.filter((place) => "name" in place);
  }

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
        onChildClick={(child) => setChildClick(child)}
      >
        {places?.map((place, i) => (
          <MarkerContainer
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!isDesktop ? (
              <PlaceOutlinedIcon color="primary" fontSize="large" />
            ) : (
              <StyledPaper elevation={3}>
                <Typography variant="subtitle2" gutterBottom>
                  {place.name}
                </Typography>
                <img
                  style={{ cursor: "pointer" }}
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://fastly.picsum.photos/id/23/3887/4899.jpg?hmac=2fo1Y0AgEkeL2juaEBqKPbnEKm_5Mp0M2nuaVERE6eE"
                  }
                  alt={place.name}
                />
                <Rating
                  size="small"
                  value={Number(place.rating)}
                  readOnly
                ></Rating>
              </StyledPaper>
            )}
          </MarkerContainer>
        ))}
      </GoogleMapReact>
    </MapContainer>
  );
};

export default Map;
