import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";
import FormControl from "@mui/material/FormControl";

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: 120,
  marginBottom: "30px",
}));

export const StyledSelectEmpty = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export const StyledContainer = styled(Container)({
  padding: "25px",
});

export const StyledLoading = styled("div")(({ theme }) => ({
  height: "600px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const StyledMarginBottom = styled("div")(({ theme }) => ({
  marginBottom: "30px",
}));

export const StyledList = styled("div")(({ theme }) => ({
  height: "75vh",
  overflow: "auto",
}));
