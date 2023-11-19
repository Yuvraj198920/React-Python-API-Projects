import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import Rating from "@mui/material/Rating"; // Rating is a component from '@mui/material', not '@mui/icons-material'
import { StyledChip, StyledSubtitle, StyledSpacing } from "./styles";

const Placedetails = ({ place }) => {
  // console.log(place);
  return (
    place.name && (
      <Card variant="outlined" sx={{ width: 400 }} elevation={10}>
        <CardMedia
          style={{ height: 130 }}
          image={
            place.photo
              ? place.photo.images.large.url
              : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'"
          }
        />

        <CardContent>
          <Typography gutterBottom variant="h5">
            {place.name}
          </Typography>
          <Box display="flex" justifyContent="space-between" my={2}>
            <Rating name="read-only" value={Number(place.rating)} readOnly />
            <Typography component="legend">
              {place.num_reviews} review{place.num_reviews > 1 && "s"}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography component="legend">Price</Typography>
            <Typography gutterBottom variant="subtitle1">
              {place.price_level}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography component="legend">Ranking</Typography>
            <Typography gutterBottom variant="subtitle1">
              {place.ranking}
            </Typography>
          </Box>
          {place?.awards?.map((award) => (
            <Box
              display="flex"
              justifyContent="space-between"
              my={1}
              alignItems="center"
            >
              <img src={award.images.small} />
              <Typography variant="subtitle2" color="text.secondary">
                {award.display_name}
              </Typography>
            </Box>
          ))}
          {place?.cuisine?.map(({ name }) => (
            <StyledChip key={name} size="small" label={name} />
          ))}
          {place.address && (
            <StyledSubtitle gutterBottom variant="body2" color="text.secondary">
              <LocationOnIcon /> {place.address}
            </StyledSubtitle>
          )}
          {place.phone && (
            <StyledSpacing variant="body2" color="text.secondary">
              <PhoneIcon /> {place.phone}
            </StyledSpacing>
          )}
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
    )
  );
};

export default Placedetails;
