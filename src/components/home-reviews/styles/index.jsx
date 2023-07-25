import { styled, Box } from "@mui/material";
import { ImQuotesLeft } from "react-icons/im";

export const ReviewsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  flexDirection: "column",
}));

export const ReviewsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  position: "relative",
  img: {
    height: "500px",
  },
  ".react-multi-carousel-list": {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "left",
  },
}));

export const QuoteIcon = styled(ImQuotesLeft)(({ theme }) => ({
  position: "absolute",
  top: "0.5rem",
  fontSize: "5rem",
  color: theme.palette.transparent,
  [theme.breakpoints.down("sm")]: {
    position: "static",
    margin: "1rem 0",
  },
}));
