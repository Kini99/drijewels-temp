import { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Box } from "@mui/material";
import { getCollection } from "../../../redux/collectionReducer/action";
import { getAllProducts } from "../../../redux/productReducer/action";
import { getCategory } from "../../../redux/categoryReducer/action";
import SEO from "../../seo/components/SEO";
import PLPHeader from "../../plp-header/components/PLPHeader";
import SidebarCat from "../../sidebar/components/SidebarCat";
import PLPComponent from "../../plp-content/components/PLPComponent";

const Bestsellers = () => {
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

  const [page, setPage] = useState(1);
  const [sortObj, setSortObj] = useState({});
  const params = {
    page,
    sort: JSON.stringify(sortObj),
  };

  useEffect(() => {
    dispatch(getAllProducts(params));
    dispatch(getCategory());
    dispatch(getCollection());
  }, [page, sortObj]);
  const productsData = products;
  const componentData = {
    description:
      "Our bestsellers offer a variety of styles and designs, allowing you to find the perfect piece that suits your personal taste and enhances your style.",
    productsData,
    params,
  };

  const data = {
    name: "Bestsellers",
    description:
      "Our bestsellers offer a variety of styles and designs, allowing you to find the perfect piece that suits your personal taste and enhances your style.",
  };

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
        <PLPHeader data={data} setSortObj={setSortObj} />
        <Box sx={{ width: "100%", display: "flex" }}>
          <SidebarCat
            categories={categories}
            collections={collections}
            currentCat={"Bestsellers"}
          />
          <PLPComponent data={componentData} setPage={setPage} />
        </Box>
      </Box>
    </>
  );
};

export default Bestsellers;
