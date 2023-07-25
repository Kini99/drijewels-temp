import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Box } from "@mui/material";
import SidebarCat from "../components/sidebar/components/SidebarCat";
import mockData from "../utils/getIndividualCat";
import PLPComponent from "../components/plp-content/components/PLPComponent";
import PLPHeader from "../components/plp-header/components/PLPHeader";
import SEO from "../components/seo/components/SEO";
import { getCategory } from "../redux/categoryReducer/action";
import { getCollection } from "../redux/collectionReducer/action";
import { getProducts } from "../redux/productReducer/action";

const Category = () => {
  const { id } = useParams();

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

  const routerLocation = useLocation();
  const isCategory = routerLocation.pathname.includes("categories");
  const isCollection = routerLocation.pathname.includes("collections");

  let currentCategory;
  let currentCollection;
  let data;

  const [page, setPage] = useState(1);
  const [sortObj, setSortObj] = useState({});
  const [priceRange, setPriceRange] = useState([1000, 20000]);
  const params = {
    page,
    sort: JSON.stringify(sortObj),
    minPrice: priceRange[0],
    maxPrice: priceRange[1],
  };

  if (isCategory && Array.isArray(categories)) {
    currentCategory =
      categories.find((category) => +category.categoryNumber === +id) ??
      mockData;
    params.categoryNumber = +id;
    data = currentCategory;
  } else if (isCollection && Array.isArray(collections)) {
    currentCollection = collections.find(
      (collection) => +collection.collectionNumber === +id ?? mockData
    );
    params.collectionNumber = +id;
    data = currentCollection;
  } else if (categories.categoryNumber) {
    params.categoryNumber = +id;
    data = categories;
  } else if (collections.collectionNumber) {
    params.collectionNumber = +id;
    data = collections;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(getProducts(params));
        dispatch(getCategory());
        dispatch(getCollection());
      } catch (error) {
        console.log(error);
      }
    };
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchData();
  }, [page, sortObj, priceRange]);

  let componentData = null;
  const productsData = products;
  if (isCategory && data) {
    componentData = {
      description: data.description,
      productsData,
      params,
    };
  } else if (isCollection && data) {
    componentData = {
      description: data.description,
      productsData,
      params,
    };
  }

  return (
    <>
      <SEO page={"category"} data={data} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "90%",
          margin: "0 auto",
        }}>
        <PLPHeader
          data={data}
          setSortObj={setSortObj}
          setPriceRange={setPriceRange}
          priceRange={priceRange}
        />
        <Box sx={{ width: "100%", display: "flex" }}>
          <SidebarCat
            categories={categories}
            collections={collections}
            currentCat={data?.name}
          />
          <PLPComponent
            data={componentData}
            setPage={setPage}
            categoryIsLoading={categoryIsLoading}
            collectionIsLoading={collectionIsLoading}
            productIsLoading={productIsLoading}
          />
        </Box>
      </Box>
    </>
  );
};

export default Category;
