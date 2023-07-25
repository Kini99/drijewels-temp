import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "70%",
  margin: "5% auto",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const ImagesBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  ".MuiButton-root": {
    width: "25%",
  },
}));
