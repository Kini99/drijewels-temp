import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

const TextFieldIcon = ({ iconEnd, ...props }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputValue(event.target.value);
    sessionStorage.setItem("searchInputValue", value);
  };

  const handleSearch = () => {
    const encodedValue = encodeURIComponent(inputValue);
    const searchUrl = `/search?q=${encodedValue}`;

    window.location.href = searchUrl;
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    const storedValue = sessionStorage.getItem("searchInputValue");
    if (storedValue) {
      setInputValue(storedValue);
    }
  }, []);

  return (
    <FormControl variant="standard" sx={{ width: "100%" }}>
      <TextField
        {...props}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        InputProps={{
          endAdornment: iconEnd ? (
            <InputAdornment position="end" onClick={handleSearch}>
              {iconEnd}
            </InputAdornment>
          ) : null,
        }}
      />
    </FormControl>
  );
};

export default TextFieldIcon;
