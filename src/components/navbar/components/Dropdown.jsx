import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Menu, MenuItem, IconButton, Link } from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink } from "../styles";
import { getCategory } from "../../../redux/categoryReducer/action";
import { getCollection } from "../../../redux/collectionReducer/action";

const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dispatch = useDispatch();
  const { categories, isLoading: categoryIsLoading } = useSelector(
    (store) => store.categoryReducer,
    shallowEqual
  );

  const { collections, isLoading: collectionIsLoading } = useSelector(
    (store) => store.collectionReducer,
    shallowEqual
  );

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getCollection());
  }, [dispatch]);

  return (
    <>
      <IconButton onClick={handleClick}>
        <NavLink>Store</NavLink>
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {Array.isArray(categories) &&
          categories.map((category, index) => (
            <MenuItem
              key={index}
              component={Link}
              href={`/categories/${category.categoryNumber}`}
              underline="none"
              onClick={handleClose}>
              {category.name}
            </MenuItem>
          ))}
        {Array.isArray(collections) &&
          collections.map((collection, index) => (
            <MenuItem
              key={index}
              component={Link}
              href={`/collections/${collection.collectionNumber}`}
              underline="none"
              onClick={handleClose}>
              {collection.name}
            </MenuItem>
          ))}
      </Menu>
    </>
  );
};
export default DropdownMenu;
