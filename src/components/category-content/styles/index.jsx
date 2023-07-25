import { Box, styled } from "@mui/material";

export const CatContentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: "30px 0",
}));

export const CategoryWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  width: "100%",
  a: {
    width: "25%",
    textDecoration: "none",
    paddingBottom: "4%",
    color: `${theme.palette.common.black}`,
    "&:hover": {
      textDecoration: "underline",
      color: `${theme.palette.primary.main}`,
    },
    [theme.breakpoints.down("md")]: {
      width: "30%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "51%",
    },
  },
}));

export const CategoryBox = styled(Box)(({ theme }) => ({
  // width: "100%",
  // paddingBottom: "4%",
  img: {
    width: "200px",
    height: "200px",
    objectFit: "cover",
    borderRadius: "25px",
  },
  ".MuiTypography-body1": {
    fontWeight: 600,
  },
}));
