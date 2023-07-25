import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { getSearchedProducts } from "../redux/productReducer/action";
import TextFieldIcon from "../components/textfield-icon/components/TextFieldIcon";
import SearchData from "../components/search-data/components/SearchData";
import { getCategory } from "../redux/categoryReducer/action";
import { getCollection } from "../redux/collectionReducer/action";
import SectionContainer from "../components/section-container/components/SectionContainer";

// Todo => Input value should be seen , tried coding through query param in this component and also TextFieldIcon component and UI changes

const Search = () => {
  const dispatch = useDispatch();

  const location = useLocation();

  const [inputValue, setInputValue] = useState("");

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

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const queryParam = searchParams.get("q");
    if (queryParam) {
      setInputValue(queryParam);
      dispatch(getSearchedProducts(queryParam));
    }
    dispatch(getCategory());
    dispatch(getCollection());
  }, [dispatch, location.search]);

  const handleSearch = () => {
    if (inputValue.trim() !== "") {
      dispatch(getSearchedProducts(inputValue));
    }
  };

  return (
    <SectionContainer>
      <TextFieldIcon
        iconEnd={
          <TrendingFlatIcon sx={{ color: "primary.main", cursor: "pointer" }} />
        }
        sx={{ backgroundColor: "white", border: "none", margin: "2% 0" }}
        placeholder="Search for Products"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onIconClick={handleSearch}
      />
      {categoryIsLoading || collectionIsLoading || productIsLoading ? (
        <CircularProgress disableShrink />
      ) : (
        <SearchData data={products} searchTerm={inputValue} />
      )}
    </SectionContainer>
  );
};

export default Search;
