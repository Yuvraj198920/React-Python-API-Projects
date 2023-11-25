import { styled } from "@mui/material/styles";
import {
  InputLabel,
  Typography,
  Grid,
  CircularProgress,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: 120,
  marginBottom: "30px",
}));

export const StyledSelect = styled(Select)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const StyledContainer = styled("div")(({ theme }) => ({
  padding: "25px",
}));
