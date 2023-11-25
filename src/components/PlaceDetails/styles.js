import { styled } from "@mui/material/styles";
import { Chip, Typography } from "@mui/material";

export const StyledChip = styled(Chip)(({ theme }) => ({
  margin: "5px 5px 5px 0",
}));

export const StyledSubtitle = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "10px",
}));

export const StyledSpacing = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));
