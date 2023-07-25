import {
  Box,
  Breadcrumbs,
  Typography,
  useMediaQuery,
  useTheme,
  Link,
} from "@mui/material";
import { useParams, Link as RouterLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import SectionContainer from "../components/section-container/components/SectionContainer";
import ProductImage from "../components/product-image/components/ProductImage";
import ProductContent from "../components/product-content/components/ProductContent";
import MoreLikeThis from "../components/product-morelikethis/components/MoreLikeThis";
import SEO from "../components/seo/components/SEO";
import { getProductsById } from "../redux/productReducer/action";
import { getCategoryById } from "../redux/categoryReducer/action";
import Loading from "../components/loading/Loading";

const Product = () => {
  const { id } = useParams();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const { products, isLoading: productIsLoading } = useSelector(
    (store) => store.productReducer,
    shallowEqual
  );

  const { categories, isLoading: categoryIsLoading } = useSelector(
    (store) => store.categoryReducer,
    shallowEqual
  );

  const { collections, isLoading: collectionIsLoading } = useSelector(
    (store) => store.collectionReducer,
    shallowEqual
  );
  let currentCategoryName;
  if (Array.isArray(categories)) {
    currentCategoryName = categories.find(
      (category) => category.categoryNumber === products.categoryNumber
    )?.name;
  } else {
    currentCategoryName = categories.name;
  }

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getProductsById(id));
    };

    fetchData();

    if (products.categoryNumber) {
      dispatch(getCategoryById(products.categoryNumber));
    }
  }, [id, products.categoryNumber]);

  useEffect(() => {
    setIsLoading(true);
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <SEO page={"product"} data={products} />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          flexDirection: "column",
        }}>
        <SectionContainer>
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{
              width: "100%",
              margin: "10px 0",
              ".MuiBreadcrumbs-separator": {
                color: "#000",
              },
            }}>
            <Link
              component={RouterLink}
              underline="hover"
              color="primary.main"
              to="/store"
              fontWeight={"700"}>
              Store
            </Link>
            {!isMobile && (
              <Link
                component={RouterLink}
                underline="hover"
                color="primary.main"
                fontWeight={"700"}
                to={`/categories/${products.categoryNumber}`}>
                {currentCategoryName}
              </Link>
            )}
            {!isMobile && (
              <Typography color="text.primary">{products.name}</Typography>
            )}
          </Breadcrumbs>
        </SectionContainer>
        <SectionContainer>
          {!productIsLoading ? (
            <>
              <Box
                className="product"
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  [theme.breakpoints.down("md")]: {
                    flexDirection: "column",
                  },
                }}>
                <ProductImage
                  product={products}
                  categoryName={currentCategoryName}
                />
                <ProductContent
                  product={products}
                  categoryName={currentCategoryName}
                />
              </Box>
              {categories.products && (
                <MoreLikeThis data={categories.products} id={id} />
              )}
            </>
          ) : (
            <CircularProgress disableShrink />
          )}
        </SectionContainer>
        <Box width="50%" margin="auto">
          <KeyboardDoubleArrowUpIcon
            fontSize="large"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            sx={{ color: theme.palette.primary.main }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Product;
