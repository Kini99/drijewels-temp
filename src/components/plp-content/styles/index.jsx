import { Box, styled } from "@mui/material";

export const PLPWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "75%",
  p: {
    padding: "1% 0",
    fontWeight: 700,
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const ProductsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
  },
}));

export const ProductBox = styled(Box)(({ theme }) => ({
  margin: "20px 0",
  cursor: "pointer",
  img: {
    height: "300px",
    width: "300px",
  },
  p: {
    textAlign: "center",
    fontWeight: 600,
  },
  "&:hover": {
    backgroundColor: theme.palette.transparent,
    color: theme.palette.common.black,
    boxShadow: `0px 0px 5px ${theme.palette.primary.main}`,
  },
}));
