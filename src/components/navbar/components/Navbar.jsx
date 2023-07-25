import React, { useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, useMediaQuery, useTheme } from "@mui/material";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { getProducts } from "../../../redux/productReducer/action";
import logo from "../../../images/Djlogo1.jpg";
import {
  StyledNavbar,
  LeftNav,
  MiddleNav,
  RightNav,
  NavLink,
} from "../styles/index";
import TextFieldIcon from "../../textfield-icon/components/TextFieldIcon";
import CustomNavbarMobile from "./NavbarMobile";

const CustomNavbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [showDropdown, setShowDropdown] = useState();

  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const dispatch = useDispatch();

  const handleSearchClick = () => {
    setIsSearchClicked((prev) => !prev);
  };

  const [query, setQuery] = useState("");

  const ref = useRef();

  const paramObj = {
    params: {
      q: query && query,
    },
  };

  useEffect(() => {
    if (ref.current) {
      clearTimeout(ref.current);
    }
    ref.current = setTimeout(() => {
      dispatch(getProducts(paramObj));
    }, 1000);
  }, [query]);

  const location = useLocation();
  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === path ? "active" : "";
    }
    return location.pathname !== "/" ? "active" : "";
  };

  if (isMobile) {
    return <CustomNavbarMobile />;
  }

  return (
    <StyledNavbar className="navbar" maxWidth={"xl"}>
      <LeftNav className="navbar-left">
        <NavLink href="/" className={isActive("/")}>
          Home
        </NavLink>
        <NavLink href="/store" className={isActive("/store")}>
          Store
        </NavLink>
      </LeftNav>
      <MiddleNav className="navbar-mid">
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </MiddleNav>
      <RightNav className="navbar-right">
        <IconButton
          href="https://api.whatsapp.com/send?phone=+917021882689&text=Hi Drishti! I'm interested in getting a custom jewellry piece from you and I have a question about it. Could we connect to discuss further? Thank you!"
          target="_blank">
          <WhatsAppIcon
            className="icon"
            sx={{ fill: theme.palette.common.black }}
          />
        </IconButton>
        <IconButton onClick={handleSearchClick}>
          <SearchIcon
            className="icon"
            sx={{ fill: theme.palette.common.black }}
          />
        </IconButton>
        {isSearchClicked && (
          <TextFieldIcon
            iconEnd={
              <TrendingFlatIcon
                sx={{ color: "primary.main", cursor: "pointer" }}
              />
            }
            placeholder="Search for Products"
          />
        )}
      </RightNav>
    </StyledNavbar>
  );
};

export default CustomNavbar;
