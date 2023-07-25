import { Box, styled, Typography } from "@mui/material";

export const ImageHoverBox = styled(Box)(({ theme, ownerState }) => ({
  backgroundImage: `url(${ownerState.url})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  color: theme.palette.common.black,
  marginRight: ownerState.bestSeller ? "10px" : 0,
  marginBottom: ownerState.bestSeller ? 0 : "10px",
  position: "relative",
  "&:hover": {
    cursor: "pointer",
    zIndex: 1,
  },
  [theme.breakpoints.down("sm")]: {
    height: "175px",
    width: ownerState.bestSeller ? "350px" : "175px",
    margin: ownerState.bestSeller ? "0 auto" : "",
  },
}));

export const HoverTypography = styled(Typography)(({ theme }) => ({
  position: "absolute",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  "&:hover": {
    background: `${theme.palette.transparent}`,
    color: `${theme.palette.common.white}`,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.45rem",
    background: `${theme.palette.transparent}`,
    color: `${theme.palette.common.white}`,
  },
}));
