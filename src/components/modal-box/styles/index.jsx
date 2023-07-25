import { styled, Box } from "@mui/material";

export const ModalBoxWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  zIndex: 1,
  border: `1px solid ${theme.palette.transparent}`,
  padding: "10px",
  backgroundColor: theme.palette.common.white,
  borderRadius: "10px",
  width: "50%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    left: "2%",
  },
}));

export const OptionBox = styled(Box)(({ theme, isSlider }) => ({
  borderRadius: "10px",
  color: theme.palette.primary.main,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  textTransform: "none",
  ".MuiToggleButton-root": {
    textTransform: "none",
    fontWeight: "600",
    color: theme.palette.common.black,
    "&:hover": {
      backgroundColor: theme.palette.background,
    },
    "&.Mui-selected": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      letterSpacing: "1px",
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
}));
