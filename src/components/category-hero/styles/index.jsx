import { Box, styled } from "@mui/material";

export const CatHeroContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  padding: "30px 0",
}));

export const BannerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  backgroundColor: `${theme.palette.transparent}`,
  img: {
    width: "50%",
  },
  [theme.breakpoints.down("sm")]: {
    img: {
      display: "none",
    },
  },
}));

export const BannerTextBox = styled(Box)(({ theme }) => ({
  width: "50%",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginBottom: "10px",
    p: {
      width: "75%",
    },
  },
}));
