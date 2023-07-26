import { useState } from "react";
import {
  Box,
  Link,
  Typography,
  Button,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import InfoIcon from "@mui/icons-material/Info";
import {
  ContentBox,
  TextBox,
  SingleColourBox,
  TextInfoBox,
} from "../styles/index";
import StaticModal from "./StaticModal";


const ProductContent = ({ product, categoryName }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));


  const [showTooltip, setShowTooltip] = useState(false);

  const handleInfoIconClick = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <ContentBox>
      <TextInfoBox className={"text-info"}>
        {!isMobile && (
          <Link underline="none" href={`/categories/${product.categoryNumber}`}>
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              fontWeight={700}>
              <KeyboardArrowLeftIcon fontSize="large" />
              {`Back to ${categoryName}`}
            </Typography>{" "}
          </Link>
        )}
        <TextBox>
          <Typography variant="h3" paddingBottom={"10px"}>
            {product.name}
          </Typography>
          <Typography
            variant="h5"
            fontWeight={600}
            paddingBottom={"10px"}
            sx={{
              span: {
                fontSize: "14px",
              },
            }}>
            ₹ {product.price}.<span>00</span>
            {/* <Tooltip
              title="Price of Yellow Gold and Rose Gold may differ as per current market prices"
              sx={{ marginLeft: "10px" }}
              arrow>
              <InfoIcon fontSize="small" />
            </Tooltip> */}
             <span
              onClick={handleInfoIconClick}
              style={{
                cursor: "pointer",
                textDecoration: "underline",
                marginLeft: "5px",
              }}
            >
              <InfoIcon fontSize="small" />
            </span>
            {showTooltip && (
              <span
                style={{
                  marginLeft: "5px",
                  fontSize: "12px",
                  color: "#000",
                }}
              >
                Price of Yellow Gold and Rose Gold may differ as per current market prices
              </span>
            )}
          </Typography>
          <Typography variant="body1">Available in:</Typography>
          <Box display={"flex"} margin={"2% 0"}>
            <Box paddingRight={"5%"}>
              <SingleColourBox backgroundColor={"yellow"} />
              <Typography textAlign={"center"}>Yellow</Typography>
            </Box>
            <Box paddingRight={"5%"} textAlign={"center"}>
              <SingleColourBox backgroundColor={"white"} />
              <Typography textAlign={"center"}>White</Typography>
            </Box>
            <Box>
              <SingleColourBox backgroundColor={"pink"} />
              <Typography textAlign={"center"}>Rose</Typography>
            </Box>
          </Box>
          <Button
            variant="contained"
            fullWidth
            href={`https://api.whatsapp.com/send?phone=+917021882689&text=Hi Drishti! I'd love to buy ${product.name}. Could you please share more details or connect with me for further assistance? Thanks! Link: https://www.drijewels.com/products/${product._id}`}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ margin: "15px 0" }}>
            Buy Now
          </Button>
          <Typography variant="subtitle1" textAlign={"center"}>
            Available in all sizes.
          </Typography>
        </TextBox>
      </TextInfoBox>
      <StaticModal product={product} />
    </ContentBox>
  );
};

export default ProductContent;
