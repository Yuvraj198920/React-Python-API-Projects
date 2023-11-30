import React, { useState } from "react";
import { Autocomplete, useLoadScript } from "@react-google-maps/api";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";

import { Search, SearchIconWrapper, StyledInputBase } from "./headerstyle";
const placeLibrary = ["places"];

const Header = ({ setCoordinates }) => {
  const [autoComplete, setAutocomplete] = useState(null);
  const onLoad = (autoC) => setAutocomplete(autoC);
  const onPlaceChanged = () => {
    const lat = autoComplete.getPlace().geometry.location.lat();
    const lng = autoComplete.getPlace().geometry.location.lng();
    setCoordinates({ lat, lng });
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAOIh4ogTJegKVs5J6m_V0ZSypMFJnSBAw",
    libraries: placeLibrary,
  });
  if (!isLoaded) {
    return <></>;
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Local Travel Guide
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Search Location
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Autocomplete>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
