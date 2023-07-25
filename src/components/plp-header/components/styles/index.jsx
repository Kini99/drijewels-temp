import { Box, styled } from "@mui/material";

export const HeaderWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  h3: {
    width: "70%",
    textAlign: "left",
  },
  hr: {
    width: "65%",
    marginLeft: 0,
  },
}));

export const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "75%",
  alignItems: "center",
  justifyContent: "space-between",
  ".MuiBreadcrumbs-root": {
    width: "50%",
    ".MuiBreadcrumbs-separator": {
      color: "common.black",
    },
    [theme.breakpoints.down("md")]: {
      ol: {
        justifyContent: "center",
      },
    },
  },
}));

export const OptionsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "50%",
  justifyContent: "flex-end",
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
}));
