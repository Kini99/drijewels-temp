import { Link as RouterLink } from "react-router-dom";
import { Box, Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
import logo from "../../../images/Djlogo1.jpg";
import { NavLink, MobileWrapper, MenuModal } from "../styles";
import DropdownMenu from "./Dropdown";

const CustomNavbarMobile = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  return (
    <MobileWrapper>
      <Link to="/" component={RouterLink}>
        <img src={logo} alt="" />
      </Link>
      {isMenuClicked ? (
        <ClearIcon
          sx={{
            cursor: "pointer",
            marginRight: "10px",
            color: "primary.main",
            fontSize: "34px",
          }}
          onClick={() => setIsMenuClicked((prev) => !prev)}
        />
      ) : (
        <MenuIcon
          sx={{
            cursor: "pointer",
            marginRight: "10px",
            color: "primary.main",
            fontSize: "35px",
          }}
          onClick={() => setIsMenuClicked((prev) => !prev)}
        />
      )}
      {isMenuClicked && (
        <MenuModal>
          <Box margin={"1% 2% 2% 2%"}>
            <NavLink href="/">Home</NavLink>
          </Box>
          <Box margin={"2%"}>
            <DropdownMenu />
          </Box>
          <Box margin={"2%"}>
            <NavLink href="/search">Search</NavLink>
          </Box>
          <Box margin={"2%"}>
            <NavLink
              href="https://api.whatsapp.com/send?phone=+917021882689&text=Hi Drishti! I'm interested in getting a custom jewellry piece from you and I have a question about it. Could we connect to discuss further? Thank you!"
              target="_blank">
              Contact Us
            </NavLink>
          </Box>
        </MenuModal>
      )}
    </MobileWrapper>
  );
};
export default CustomNavbarMobile;
