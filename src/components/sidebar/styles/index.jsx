import { Box, styled } from "@mui/material";

const SideBarWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "25%",
  alignItems: "flex-start",
  position: "relative",
  h5: {
    padding: "2% 0",
  },
  p: {
    padding: "1% 0",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export default SideBarWrapper;
