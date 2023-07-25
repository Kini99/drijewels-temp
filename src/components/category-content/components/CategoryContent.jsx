import { Link as RouterLink } from "react-router-dom";
import { Typography, Button, Box, Link } from "@mui/material";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import SectionContainer from "../../section-container/components/SectionContainer";
import { CatContentContainer, CategoryWrapper, CategoryBox } from "../styles";
import HeadingBox from "../../heading-box/components/HeadingBox";
import { getCategory } from "../../../redux/categoryReducer/action";
import { getCollection } from "../../../redux/collectionReducer/action";
import Loading from "../../loading/Loading";

const CategoryContent = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const { categories, isloading: categoryIsLoading } = useSelector(
    (store) => store.categoryReducer,
    shallowEqual
  );

  const { collections, isloading: collectionIsLoading } = useSelector(
    (store) => store.collectionReducer,
    shallowEqual
  );

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getCollection());
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(delay);
  });

  if (isLoading) {
    return <Loading />;
  }

  if (categoryIsLoading || collectionIsLoading) {
    return <CircularProgress disableShrink />;
  }

  return (
    <CatContentContainer>
      <SectionContainer
        sx={{ display: "flex", flexDirection: "column" }}
        className={"category"}>
        <HeadingBox title={"Shop By Category"} />
        <CategoryWrapper>
          {categories.map((category) => (
            <Link
              component={RouterLink}
              to={`/categories/${category.categoryNumber}`}
              key={category._id}>
              <CategoryBox>
                <img
                  src={category.image}
                  alt={category.name}
                  key={category._id}
                />
                <Typography variant="body1">{category.name}</Typography>
              </CategoryBox>
            </Link>
          ))}
        </CategoryWrapper>
      </SectionContainer>
      <SectionContainer
        sx={{ display: "flex", flexDirection: "column" }}
        className={"collection"}>
        <HeadingBox title={"Shop By Collection"} />
        <CategoryWrapper>
          {collections.map((collection) => (
            <Link
              component={RouterLink}
              to={`/collections/${collection.collectionNumber}`}
              key={collection._id}>
              <CategoryBox>
                <img src={collection.image} alt={collection.name} />
                <Typography variant="body1">{collection.name}</Typography>
              </CategoryBox>
            </Link>
          ))}
        </CategoryWrapper>
      </SectionContainer>
      <SectionContainer sx={{ padding: "20px" }}>
        <Button variant="contained" to="/bestsellers">
          Shop Now
        </Button>
      </SectionContainer>
      <Box width="50%" margin="auto">
        <KeyboardDoubleArrowUpIcon
          fontSize="large"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          color="primary.main"
        />
      </Box>
    </CatContentContainer>
  );
};

export default CategoryContent;
