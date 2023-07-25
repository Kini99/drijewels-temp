import {
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Box,
} from "@mui/material";
import { useState } from "react";
import { ModalBoxWrapper, OptionBox } from "../styles";

const ModalBox = ({ title, setSortObj }) => {
  const [priceSort, setPriceSort] = useState("");
  const [nameSort, setNameSort] = useState("");
  let obj = {
    price: priceSort,
    name: nameSort,
  };

  const handlePriceSort = (e, newPriceSort) => {
    setPriceSort(newPriceSort);
    if (obj.name === "") {
      obj = {
        price: newPriceSort,
      };
    } else {
      obj.price = newPriceSort;
    }
    setSortObj(obj);
  };

  const handleNameSort = (e, newNameSort) => {
    setNameSort(newNameSort);
    if (obj.name === "") {
      obj = {
        name: newNameSort,
      };
    } else {
      obj.name = newNameSort;
    }
    setSortObj(obj);
  };

  const handleReset = () => {
    setPriceSort("");
    setNameSort("");
    setSortObj({});
  };

  return (
    <ModalBoxWrapper>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <Typography
          variant="h6"
          color="primary.main"
          fontWeight={700}
          textAlign={"left"}
          margin={"5px 0"}>
          {title}
        </Typography>
        <Typography
          sx={{
            cursor: "pointer",
            fontWeight: 600,
          }}
          onClick={handleReset}>
          Reset
        </Typography>
      </Box>
      <OptionBox>
        <Typography fontWeight={"600"}>Price</Typography>
        <ToggleButtonGroup
          color="primary"
          value={priceSort}
          exclusive
          onChange={handlePriceSort}
          aria-label="price">
          <ToggleButton value="asc">Low to High</ToggleButton>
          <ToggleButton value="desc">High to Low</ToggleButton>
        </ToggleButtonGroup>
        <Typography fontWeight={"600"} marginTop={"10px"}>
          Name
        </Typography>
        <ToggleButtonGroup
          color="secondary"
          value={nameSort}
          exclusive
          onChange={handleNameSort}
          aria-label="name">
          <ToggleButton value="asc">A-Z</ToggleButton>
          <ToggleButton value="desc">Z-A</ToggleButton>
        </ToggleButtonGroup>
      </OptionBox>
    </ModalBoxWrapper>
  );
};

export default ModalBox;
