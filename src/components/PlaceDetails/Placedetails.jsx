import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

import {
  CardMedia,
  CardContent,
  CardActions,
  Card,
  Chip,
  Button,
  Typography,
  Box,
} from "@mui/material";

const PlaceDetails = ({ place }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="194"
        title={place.name}
        style={{ height: 350 }}
        image={place.photo ? place.photo.images.large.url : ""}
      ></CardMedia>
      <CardContent>
        <Typography gutterBottom variant="body2" color="text.secondary">
          {place.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
