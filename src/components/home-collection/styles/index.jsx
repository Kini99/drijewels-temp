import { Box, styled } from "@mui/material";

export const CollectionWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  backgroundColor: theme.palette.common.white,
}));

export const ImagesBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const OtherImagesBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "row",
  },
}));
