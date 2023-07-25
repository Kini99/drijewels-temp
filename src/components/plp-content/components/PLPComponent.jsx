import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Pagination, Link } from "@mui/material";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { PLPWrapper, ProductsWrapper, ProductBox } from "../styles";

import Loading from "../../loading/Loading";

const PLPComponent = ({ data, setPage }) => {
  const totalPages = Math.ceil(+(data.productsData.total / 12));
  return (
    <PLPWrapper className={"content"}>
      <Typography variant="body1">{data?.description}</Typography>
      <Pagination
        color="primary"
        count={totalPages}
        onChange={(e, value) => {
          setPage(value);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        sx={{
          ul: {
            justifyContent: "flex-end",
          },
        }}
      />
      <ProductsWrapper>
        {data?.productsData?.products &&
        Array.isArray(data?.productsData?.products) ? (
          data?.productsData?.products.map((product) => (
            <Link
              to={`/products/${product._id}`}
              component={RouterLink}
              color="common.black"
              underline="none"
              key={product._id}>
              <ProductBox className="product-box">
                <img src={product.image} alt={product.name} />
                <Box>
                  <Typography variant="body1">{product.name}</Typography>
                  <Typography variant="body1">₹ {product.price}</Typography>
                </Box>
              </ProductBox>
            </Link>
          ))
        ) : (
          <Loading />
        )}
      </ProductsWrapper>
      <Box width="50%" margin="auto">
        <KeyboardDoubleArrowUpIcon
          fontSize="large"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          color="primary.main"
        />
      </Box>
    </PLPWrapper>
  );
};

export default PLPComponent;
