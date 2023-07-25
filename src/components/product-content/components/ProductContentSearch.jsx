import { Box, Link, Typography, Button, Tooltip } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import InfoIcon from "@mui/icons-material/Info";
import { ContentBox, TextBox, SingleColourBox } from "../styles/indexSearch";

const ProductContentSearch = ({ product, searchTerm }) => (
  <ContentBox>
    <Box textAlign={"left"}>
      <TextBox>
        <Typography variant="h4" paddingBottom={"10px"} fontFamily={"Fraunces"}>
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
          <Tooltip
            title="Price of Yellow Gold and Rose Gold may differ as per current market prices"
            sx={{ marginLeft: "10px" }}
            arrow>
            <InfoIcon fontSize="small" />
          </Tooltip>
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
          href={`/products/${product._id}`}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ margin: "15px 0" }}>
          Know More
        </Button>
        <Typography variant="subtitle1" textAlign={"center"}>
          Available in all sizes.
        </Typography>
      </TextBox>
    </Box>
  </ContentBox>
);

export default ProductContentSearch;
