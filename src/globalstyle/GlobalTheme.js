import styled from "@emotion/styled";
import { Container, createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      md: 600,
      lg: 1200,
      xl: 1700,
    },
    typography: {
      fontFamily: `Gilroy-Medium`,
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
    },
  },
});

export const StyledContainer = styled(Container)({
  [theme.breakpoints.up("xl")]: {
    maxWidth: "1618px",
  },
});
