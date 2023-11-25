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
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://fastly.picsum.photos/id/23/3887/4899.jpg?hmac=2fo1Y0AgEkeL2juaEBqKPbnEKm_5Mp0M2nuaVERE6eE"
        }
      ></CardMedia>
      <CardContent>
        <Typography gutterBottom variant="subtitle1">
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body2" color="text.secondary">
            Price
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            {place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body2" color="text.secondary">
            Ranking
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {place.ranking}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" my={1}>
          <Typography variant="body2" color="text.secondary">
            Cuisine
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {place?.cuisine?.map((c) => c.name).join(",")}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
