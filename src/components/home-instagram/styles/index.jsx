import { styled, Box } from "@mui/material";

export const InstagramWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  padding: "20px",
}));

export const ImagesBox = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-evenly",
  [theme.breakpoints.down("md")]: {
    flexWrap: "wrap",
    width: "84%",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
  },
}));

export const InstagramImage = styled("img")(({ theme }) => ({
  height: "200px",
  width: "200px",
  borderRadius: "8%",
  [theme.breakpoints.down("md")]: {
    margin: "1px",
  },
}));

export const JoinBox = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.transparent}`,
  borderRadius: "8%",
  color: `${theme.palette.common.white}`,
  width: "200px",
  height: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    margin: "1px",
  },
}));
