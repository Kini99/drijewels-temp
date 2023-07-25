import { Box, styled } from "@mui/material";

export const DesignerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  backgroundColor: `${theme.palette.transparent}`,
}));

export const DesignerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "80%",
  margin: "20px auto",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    margin: "5px auto",
    img: {
      height: "250px",
      marginBottom: "10px",
    },
  },
}));

export const TextBox = styled(Box)(({ theme }) => ({
  textAlign: "left",
  marginLeft: "20px",
  width: "36%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
