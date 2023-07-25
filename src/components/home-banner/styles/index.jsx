import { Box, Divider, styled } from "@mui/material";

export const BannerContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1100px",
  display: "flex",
  justifyContent: "space-evenly",
  padding: "20px",
}));

export const FeatureBox = styled(Box)(({ theme }) => ({
  width: "33.33%", // comment if not working
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    h2: {
      fontSize: "1.5rem",
    },
    p: {
      fontSize: "0.85rem",
    },
  },
}));

export const FeatureDivider = styled(Divider)(({ theme }) => ({
  borderWidth: "2px",
  alignSelf: "center",
  height: "50px",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
