import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Link } from "@mui/material";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import ProductImageSearch from "../../product-image/components/ProductImageSearch";
import ProductContentSearch from "../../product-content/components/ProductContentSearch";

const SearchData = ({ data, searchTerm }) => (
  <Box sx={{ display: "flex", flexDirection: "column" }}>
    <Typography
      variant="h4"
      textAlign={"left"}
      fontFamily={"Fraunces"}
      marginBottom={"2%"}>
      Search results for{" "}
      <Typography
        display={"inline"}
        variant="h4"
        color="primary"
        fontFamily={"Fraunces"}>
        {searchTerm}:
      </Typography>
    </Typography>
    {data.products?.map((product) => (
      <Link
        key={product._id}
        to={`/products/${product._id}`}
        component={RouterLink}
        underline="none"
        color="common.black">
        <Box
          className="product"
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            marginBottom: "3%",
          }}
          key={product._id}>
          <ProductImageSearch product={product} />
          <ProductContentSearch product={product} />
        </Box>
      </Link>
    ))}
    <Box width="50%" margin="auto">
      <KeyboardDoubleArrowUpIcon
        fontSize="large"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        color="primary.main"
      />
    </Box>
  </Box>
);

export default SearchData;
