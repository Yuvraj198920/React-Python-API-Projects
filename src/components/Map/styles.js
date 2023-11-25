import { styled, alpha } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  width: "100px",
  color: theme.palette.text.secondary,
}));

export const MapContainer = styled("div")(({ theme }) => ({
  height: "85vh",
  width: "100%",
}));

export const MarkerContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  transform: "translate(-50%, -50%)",
  zIndex: 1,
  "&:hover": { zIndex: 2 },
}));

export const PointerContainer = styled("div")(({ theme }) => ({
  cursor: "pointer",
}));
