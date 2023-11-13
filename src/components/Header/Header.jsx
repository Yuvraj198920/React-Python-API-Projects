import React from "react";

import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import {
  StyledToolbar,
  StyledTypography,
  StyledSearch,
  StyledSearchIcon,
  StyledInputBase,
} from "./styles";

const Header = () => {
  return (
    <AppBar position="static">
      <StyledToolbar>
        <StyledTypography variant="h5">Travel Advisor</StyledTypography>
        <Box display="flex">
          <StyledTypography variant="h6">Explore new places</StyledTypography>
          {/* <Autocomplete> */}
          <StyledSearch>
            <StyledSearchIcon>
              <SearchIcon />
            </StyledSearchIcon>
            <StyledInputBase placeholder="Search..." />
          </StyledSearch>
          {/* </Autocomplete> */}
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
