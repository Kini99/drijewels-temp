import { Box, Container, Link, InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledNavbar = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(1.75),
  width: "100%",
  margin: "0 auto",
  backgroundColor: theme.palette.common.white,
  height: theme.spacing(12.5),
}));

export const LeftNav = styled(Container)(({ theme }) => ({
  width: "30%",
  margin: 20,
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
}));

export const MiddleNav = styled(Box)(({ theme }) => ({
  width: "40%",
  "& img": {
    margin: "auto",
    height: "100px",
  },
}));

export const RightNav = styled(Container)(({ theme }) => ({
  width: "30%",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  margin: 20,
  ".icon": {
    height: theme.spacing(4),
    width: theme.spacing(4),
  },
  input: {
    border: `2px solid ${theme.palette.primary}`,
    padding: 10,
    borderRadius: "15px",
  },
}));

export const NavLink = styled(Link)(({ theme }) => ({
  fontFamily: `${theme.typography.fontFamily}`,
  fontSize: "20px",
  fontWeight: 600,
  textDecoration: "none",
  color: `${theme.palette.common.black}`,
  "&.active": {
    borderBottom: `5px solid ${theme.palette.primary.main}`,
  },
  [theme.breakpoints.down("sm")]: {
    "&:hover": {
      color: theme.palette.primary.main,
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
  },
}));

export const MobileWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.common.white,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  top: 0,
  zIndex: 999,
  img: {
    margin: "auto",
    height: "100px",
  },
}));

export const MenuModal = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  position: "absolute",
  top: "95%",
  backgroundColor: theme.palette.common.white,
}));
