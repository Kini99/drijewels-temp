import { styled, Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";

export const ContentBox = styled(Box)(({ theme }) => ({
  width: "48%",
  display: "flex",
  flexDirection: "column",
}));

export const TextBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

export const SingleColourBox = styled(Box)(({ theme, backgroundColor }) => ({
  backgroundColor,
  border: `0.3px solid ${theme.palette.borderColour}`,
  borderRadius: "50%",
  height: "50px",
  width: "50px",
}));

export const StyledAccordion = styled(Accordion)(({ theme }) => ({
  background: "none",
  boxShadow: "none",
  ".MuiSvgIcon-root": {
    color: theme.palette.primary.main,
  },
  p: {
    textAlign: "justify",
  },
}));
