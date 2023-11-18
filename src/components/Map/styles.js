import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100px",
}));

export const StyledMapContainer = styled("div")(({ theme }) => ({
  height: "85vh",
  width: "100%",
}));

export const StyledMarkerContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  transform: "translate(-50%, -50%)",
  zIndex: 1,
  "&:hover": { zIndex: 2 },
}));

export const StyledImage = styled("img")({
  cursor: "pointer",
});
export const StyledPointer = styled("div")(({ theme }) => ({
  cursor: "pointer",
}));
