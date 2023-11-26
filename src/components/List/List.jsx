import React, { useState } from "react";
import {
  InputLabel,
  Typography,
  Grid,
  CircularProgress,
  MenuItem,
  FormControl,
  Select,
  Card,
} from "@mui/material";

import { StyledFormControl, StyledSelect, StyledContainer } from "./styles";
import PlaceDetails from "../PlaceDetails/Placedetails";

const List = ({ places }) => {
  const [type, setType] = useState("");
  const [rating, setRating] = useState("");

  // const places = [{ name: "Place 1" }, { name: "Place 2" }];
  return (
    <StyledContainer>
      <Typography variant="h4">
        Restaurants, Hotels and Attraction around you
      </Typography>
      <StyledFormControl variant="standard">
        <InputLabel id="demo-simple-select-standard-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={type}
          label="Type"
          onChange={(e) => setType(e.target.value)}
        >
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </StyledFormControl>
      <StyledFormControl variant="standard">
        <InputLabel id="demo-simple-select-standard-label">Rating</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={rating}
          label="Type"
          onChange={(e) => setRating(e.target.value)}
        >
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={5}>Above 4.5</MenuItem>
        </Select>
      </StyledFormControl>

      <Grid spacing={3} style={{ height: "75vh", overflow: "auto" }}>
        {places?.map((p, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={p} />
          </Grid>
        ))}
      </Grid>
    </StyledContainer>
  );
};

export default List;
