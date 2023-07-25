import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Typography,
  Box,
  useMediaQuery,
  Dialog,
  useTheme,
} from "@mui/material";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import { TextBox, ReviewsBox } from "../styles";

const ImageCarousel = ({ images, style, isReviews }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: isReviews ? 1 : 2,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: isReviews ? 1 : 2,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: isReviews ? 1 : 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const theme = useTheme();

  const [fullscreenImage, setFullscreenImage] = useState(null);

  const openFullscreen = (image) => {
    setFullscreenImage(image);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  useEffect(() => {
    if (fullscreenImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [fullscreenImage]);

  const carouselStyles = {
    position: "relative",
    width: "100%",
    cursor: "pointer",
  };

  const data = images.map((image, index) => (
    <img
      src={image}
      alt={`Review ${index}`}
      style={style ?? { height: "500px" }}
      key={index}
      onClick={() => openFullscreen(image)}></img>
  ));

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const reviewsData = images.map((ele, index) => (
    <ReviewsBox key={index} sx={{ display: "flex" }}>
      <TextBox key={index}>
        <Typography color={"common.black"}>{ele.review}</Typography>
        <Typography
          fontFamily={"Fraunces"}
          fontSize={"2.5rem"}
          color={"common.black"}>
          {ele.name}
        </Typography>
        {!isMobile && (
          <Typography color={"primary.main"} fontWeight={600}>
            Live pictures and feedbacks from our happy clients.
          </Typography>
        )}
      </TextBox>
      <img src={`/reviews/${ele.image}`} alt={ele.name} />
    </ReviewsBox>
  ));
  const finalData = isReviews ? reviewsData : data;
  return (
    <Box sx={carouselStyles}>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={isReviews ? 2500 : 3500}
        arrows={!isReviews}
        rewind={true}
        rewindWithAnimation={!isReviews}
        infinite={isReviews}>
        {finalData}
      </Carousel>
      {fullscreenImage && (
        <Dialog
          onClose={closeFullscreen}
          open
          sx={{
            cursor: "pointer",
            img: {
              overflow: "hidden",
              width: "100%",
              height: "100vh",
              objectFit: "cover",
              objectPosition: "center",
            },
          }}>
          <img src={fullscreenImage} alt="" />
          <DisabledByDefaultIcon
            sx={{
              position: "absolute",
              right: 0,
              cursor: "pointer",
              color: "primary.main",
            }}
          />
        </Dialog>
      )}
    </Box>
  );
};

export default ImageCarousel;
