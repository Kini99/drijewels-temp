import { Box, styled } from "@mui/material";

export const HeroContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  padding: "30px 0",
  height: "500px",
  [theme.breakpoints.down("md")]: {
    height: "100%",
    padding: 0,
  },
}));

export const HeroSectionContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1100px",
  margin: "0 auto",
  width: "100%",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    maxWidth: "700px",
    flexDirection: "column",
  },
}));

export const TextBox = styled(Box)(({ theme }) => ({
  width: "50%",
  ".MuiTypography-root": {
    textAlign: "left",
  },
  ".MuiBox-root": {
    width: "25%",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginBottom: "15px",
    ".MuiTypography-root": {
      textAlign: "center",
    },
    ".MuiBox-root": {
      width: "100%",
    },
  },
}));

export const ImageBox = styled(Box)(({ theme }) => ({
  width: "50%",
  position: "relative",
  img: {
    margin: "auto",
    height: "230px",
  },
  "#img1": {
    borderTopLeftRadius: "20%",
  },
  "#img2": {
    borderTopRightRadius: "20%",
    position: "absolute",
    bottom: "-10px",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    "#img2": {
      bottom: 0,
      position: "initial",
    },
  },
}));
