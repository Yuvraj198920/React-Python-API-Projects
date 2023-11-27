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
import { StyledChip, StyledSubtitle } from "./styles";

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

        {place?.address && (
          <StyledSubtitle
            gutterBottom
            variant="subtitle2"
            color="text-secondary"
          >
            <LocationOnIcon />{" "}
            <Typography variant="body2" color="text.secondary">
              {place.address}
            </Typography>
          </StyledSubtitle>
        )}

        {place?.phone && (
          <StyledSubtitle
            gutterBottom
            variant="subtitle2"
            color="text-secondary"
          >
            <LocalPhoneIcon />
            <Typography variant="body2" color="text-secondary">
              {place.phone}
            </Typography>
          </StyledSubtitle>
        )}

        {place?.cuisine?.map(({ name }) => (
          <StyledChip key={name} size="small" label={name}></StyledChip>
        ))}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(place.web_url, "_blank")}
        >
          Trip Advisor
        </Button>

        <Button
          size="small"
          color="primary"
          onClick={() => window.open(place.website, "_blank")}
        >
          Website
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlaceDetails;
