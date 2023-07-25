import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Link } from "@mui/material";
import HeadingBox from "../../heading-box/components/HeadingBox";

import { MoreBoxWrapper, ProductBoxWrapper, ProductBox } from "../styles";

const MoreLikeThis = ({ data, id }) => {
  const recentProducts = data
    ?.sort((a, b) => a.updatedAt - b.updatedAt)
    .filter((product) => product._id !== id)
    .slice(0, 3);
  return (
    <MoreBoxWrapper>
      <HeadingBox title={"More Like This"} />
      <ProductBoxWrapper>
        {recentProducts.map((product) => (
          <Link
            to={`/products/${product._id}`}
            component={RouterLink}
            underline="none"
            color="common.black"
            key={product._id}>
            <ProductBox>
              <img src={product.image} alt={product.name} />
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="body1" fontWeight={600}>
                  {product.name}
                </Typography>
              </Box>
            </ProductBox>
          </Link>
        ))}
      </ProductBoxWrapper>
    </MoreBoxWrapper>
  );
};

export default MoreLikeThis;
