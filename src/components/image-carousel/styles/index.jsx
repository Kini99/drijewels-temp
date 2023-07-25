import { Box, styled } from "@mui/material";

export const TextBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  justifyContent: "center",
  p: {
    textAlign: "justify",
    margin: "10px",
  },
}));

export const ReviewsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    img: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
  },
}));
