import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import SectionContainer from "../../section-container/components/SectionContainer";
import HeadingBox from "../../heading-box/components/HeadingBox";
import ImageCarousel from "../../image-carousel/components/ImageCarousel";
import "react-multi-carousel/lib/styles.css";
import { ReviewsContainer, ReviewsWrapper, QuoteIcon } from "../styles";
import reviewsData from "../utils/index";

const HomeReviews = () => (
  <ReviewsContainer>
    <SectionContainer>
      <HeadingBox title={"Our Clients Say"} />
      <Link
        to="https://www.google.com/maps/place/drishti+jewels/@19.2170799,73.0859031,17z/data=!4m8!3m7!1s0x3be795d77f4b78d7:0xbefce9d2bbdef9fe!8m2!3d19.2170799!4d73.0880918!9m1!1b1!16s%2Fg%2F11r_w83s1d?entry=ttu"
        component={RouterLink}
        color="common.white"
        underline="none"
        target="blank">
        <ReviewsWrapper>
          <QuoteIcon />
          <ImageCarousel images={reviewsData} isReviews={true} />
        </ReviewsWrapper>
      </Link>
    </SectionContainer>
  </ReviewsContainer>
);

export default HomeReviews;
