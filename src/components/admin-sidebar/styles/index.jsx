import { Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledSidebar = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection:"column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(1.75),
  width: "100%",
  margin: "0 auto",
  backgroundColor: theme.palette.primary,
  height: theme.spacing(12.5),
}));

export const LeftNav = styled(Container)(({ theme }) => ({
  width: "30%",
  margin: 20,
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
}));

