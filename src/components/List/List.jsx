import React, { useState } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
} from "@mui/material";
import Select from "@mui/material/Select";
import {
  StyledFormControl,
  StyledSelectEmpty,
  StyledLoading,
  StyledContainer,
  StyledMarginBottom,
  StyledList,
} from "./styles";

import Placedetails from "../Placedetails/Placedetails";

const List = ({ places, childClicked }) => {
  const [type, setType] = useState("");
  const [rating, setRating] = useState("");
  console.log({ childClicked });

  return (
    <StyledContainer>
      <Typography variant="h5">
        Restaurants, Hotels & Attracttions around you
      </Typography>
      <StyledFormControl>
        <InputLabel id="demo-type-select-label">Type</InputLabel>
        <Select
          labelId="demo-type-select-label"
          id="demo-type-select"
          value={type}
          label="Type"
          onChange={(e) => setType(e.target.value)}
        >
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </StyledFormControl>
      <StyledFormControl>
        <InputLabel id="demo-rating-select-label">Rating</InputLabel>
        <Select
          labelId="demo-rating-select-label"
          id="demo-rating-select"
          value={rating}
          label="Rating"
          onChange={(e) => setRating(e.target.value)}
        >
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={1}>Above 3.0</MenuItem>
          <MenuItem value={2}>Above 4.0</MenuItem>
        </Select>
      </StyledFormControl>
      <StyledList container spacing={3}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <Placedetails place={place} />
          </Grid>
        ))}
      </StyledList>
    </StyledContainer>
  );
};

export default List;
