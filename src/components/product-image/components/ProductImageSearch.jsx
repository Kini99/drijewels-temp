import { Box, styled } from "@mui/material";

const ProductImageBox = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "48%",
  flexDirection: "column",
  img: {
    width: "100%",
    objectFit: "cover",
    objectPosition: "bottom",
    borderRadius: "20px",
  },
}));

const ProductImageSearch = ({ product }) => (
  <ProductImageBox className="product-image">
    <img src={product.image} alt={product.name} height={"100%"} />
  </ProductImageBox>
);

export default ProductImageSearch;
