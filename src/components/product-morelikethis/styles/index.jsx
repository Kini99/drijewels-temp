import { styled, Box } from "@mui/material";

export const MoreBoxWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  marginTop: "2.5%",
}));

export const ProductBoxWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  flexWrap: "wrap",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
  },
}));

export const ProductBox = styled(Box)(({ theme }) => ({
  padding: "20px 0",
  cursor: "pointer",
  img: { height: "300px", width: "300px" },
}));
