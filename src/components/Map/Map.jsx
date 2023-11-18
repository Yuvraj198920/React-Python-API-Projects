import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Rating from "@mui/material/Rating";

import {
  StyledPaper,
  StyledMapContainer,
  StyledMarkerContainer,
  StyledImage,
} from "./styles";
import { StyledTypography } from "../Header/styles";

const Map = ({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setChildClicked,
}) => {
  // const coordinates = { lat: 0, lng: 0 };
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <StyledMapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAOIh4ogTJegKVs5J6m_V0ZSypMFJnSBAw" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) => (
          <StyledMapContainer
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!matches ? (
              <LocationOnOutlinedIcon color="primary" fontSize="large" />
            ) : (
              place.name && ( // Conditional rendering here
                <StyledPaper elevation={3}>
                  <StyledTypography variant="subtitle2" gutterBottom>
                    {place.name}
                  </StyledTypography>
                  <StyledImage
                    src={
                      place.photo
                        ? place.photo.images.large.url
                        : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                    }
                    alt={place.name}
                  />
                  <Rating
                    name="read-only"
                    size="small"
                    value={Number(place.rating)}
                    readOnly
                  />
                </StyledPaper>
              )
            )}
          </StyledMapContainer>
        ))}
      </GoogleMapReact>
    </StyledMapContainer>
  );
};

export default Map;
