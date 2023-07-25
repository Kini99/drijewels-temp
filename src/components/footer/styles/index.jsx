import { Container, styled, Box } from "@mui/material";

export const StyledFooter = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "428px",
  justifyContent: "space-around",
  backgroundColor: `${theme.palette.footer}`,
  color: `${theme.palette.common.white}`,
  padding: theme.spacing(3),
}));

export const FooterItem = styled(Box)(() => ({
  display: "flex",
  width: "100%",
}));

export const FooterLeft = styled(Box)(({ theme }) => ({
  width: "30%",
  margin: 20,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "baseline",
  img: {
    height: "153px",
  },
}));

export const FooterLeftText = styled(Box)(() => ({
  width: "50%",
}));

export const IconBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-start",
  width: "100%",
  "& p": {
    marginLeft: 20,
  },
  marginBottom: 10,
}));

export const FooterCenter = styled(Box)(({ theme }) => ({
  width: "40%",
  margin: 20,
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
}));

export const FooterCenterBox = styled(Box)(({ theme }) => ({
  h4: {
    fontWeight: "600",
    fontSize: 24,
    textAlign: "left",
    marginBottom: 10,
    color: theme.palette.common.white,
  },
  p: {
    color: theme.palette.common.white,
  },
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  [theme.breakpoints.down("md")]: {
    margin: "2% 2%",
  },
}));

export const LinksBox = styled(Box)(({ theme }) => ({
  p: {
    textAlign: "left",
    marginBottom: 18,
  },
  width: "100%",
}));

export const FooterRight = styled(Box)(({ theme }) => ({
  width: "30%",
  margin: 20,
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  textAlign: "left",
}));

export const FooterRightBox = styled(Box)(({ theme }) => ({
  height: "324px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  h4: {
    fontWeight: "600",
    fontSize: 24,
    textAlign: "left",
    marginBottom: 10,
  },
}));

export const MobileWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  width: "100%",
  backgroundColor: theme.palette.footer,
  ".content": {
    display: "flex",
    flexDirection: "column",
    width: "75%",
    padding: "3%",
  },
  ".link": {
    width: "25%",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    ".content": {
      width: "90%",
      ".MuiTextField-root": {
        width: "100%",
      },
    },
    ".link": {
      width: "90%",
    },
  },
}));
