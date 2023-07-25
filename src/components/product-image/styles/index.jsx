import { Box, styled } from "@mui/material";

const ProductImageBox = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "48%",
  flexDirection: "column",
  img: {
    width: "100%",
    height: "500px",
    objectFit: "cover",
    objectPosition: "bottom",
    borderRadius: "20px",
    margin: "10px 0",
    transition: "transform 0.3s",
    cursor: "pointer",
    zIndex: 1,
  },
  [theme.breakpoints.down("md")]: {
    width: "90%",
    img: {
      height: "25vh",
      objectFit: "contain",
    },
  },
}));

export default ProductImageBox;
