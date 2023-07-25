import { Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ImageCarousel from "../../image-carousel/components/ImageCarousel";
import ProductImageBox from "../styles";

const ProductImage = ({ product, categoryName  }) => {
  let mappedSliderImages;
  if (product.sliderImages)
    mappedSliderImages = product.sliderImages.map((image) => image);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <> {isMobile &&  <Link underline="none" href={`/categories/${product.categoryNumber}`}><Typography
    sx={{ display: "flex", alignItems: "center" }}
    fontWeight={700}>
    <KeyboardArrowLeftIcon fontSize="large" />
    {`Back to ${categoryName}`}
  </Typography>  </Link>}
    <ProductImageBox className="product-image">
      <img
        src={product.image}
        alt={product.name}
        onMouseEnter={(e) => {
          e.target.style.transform = "scale(1.2)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "scale(1)";
        }}
      />

      {mappedSliderImages && (
        <ImageCarousel
          images={mappedSliderImages}
          style={{
            width: isMobile ? "80%" : "90%",
            height: "250px",
            objectFit: "cover",
            objectPosition: "left",
            borderRadius: "20px",
            margin: "5px",
          }}
        />
      )}
    </ProductImageBox>
    </>
  );
};

export default ProductImage;
