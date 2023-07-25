import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import bestseller from "../../../images/image1.jpg";
import topimage from "../../../images/image2.jpg";
import bottomimage from "../../../images/image8.jpg";
import SectionContainer from "../../section-container/components/SectionContainer";
import HoverImage from "../../hover-image/components/HoverImage";
import HeadingBox from "../../heading-box/components/HeadingBox";
import { CollectionWrapper, ImagesBox, OtherImagesBox } from "../styles";

const HomeCollection = () => (
  <CollectionWrapper>
    <SectionContainer className={"section-container"}>
      <HeadingBox title={"Discover our Collection"} />
      <ImagesBox>
        <Link to={`/bestsellers`} component={RouterLink}>
          <HoverImage
            url={bestseller}
            height={"500px"}
            width={"500px"}
            title={"Bestseller"}
            bestSeller="true"
          />
        </Link>
        <OtherImagesBox>
          <Link to={`/categories/4`} component={RouterLink}>
            <HoverImage
              url={topimage}
              height={"240px"}
              width={"210px"}
              title={"Bracelets"}
            />
          </Link>
          <Link to={`/store`} component={RouterLink}>
            <HoverImage
              url={bottomimage}
              height={"250px"}
              width={"210px"}
              title={"See More"}
            />
          </Link>
        </OtherImagesBox>
      </ImagesBox>
    </SectionContainer>
  </CollectionWrapper>
);

export default HomeCollection;
