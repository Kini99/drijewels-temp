import { Box, Slider, Typography, TextField } from "@mui/material";
import { useState } from "react";
import { ModalBoxWrapper, OptionBox } from "../styles";

const ModalBoxFilter = ({ title, setPriceRange, priceRange }) => {
  const handleChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  return (
    <ModalBoxWrapper>
      <Typography
        variant="h6"
        color="primary.main"
        fontWeight={700}
        textAlign="left"
        margin="5px">
        {title}
      </Typography>
      <OptionBox isSlider={true}>
        <Slider
          getAriaLabel={() => "Price range"}
          value={priceRange}
          onChange={handleChange}
          valueLabelDisplay="auto"
          color="primary"
          step={1000}
          marks
          min={1000}
          max={20000}
        />
      </OptionBox>
    </ModalBoxWrapper>
  );
};

export default ModalBoxFilter;
