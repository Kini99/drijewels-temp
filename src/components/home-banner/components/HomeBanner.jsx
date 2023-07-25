import { Typography } from "@mui/material";
import { BannerContainer, FeatureBox, FeatureDivider } from "../styles";
import SectionContainer from "../../section-container/components/SectionContainer";

const HomeBanner = () => (
  <SectionContainer className={"section-container"}>
    <BannerContainer
      maxWidth={"1100px"}
      display={"flex"}
      justifyContent={"space-evenly"}
      padding={"20px"}>
      <FeatureBox>
        <Typography variant="h2">200+</Typography>
        <Typography variant="body1" fontWeight={"600"}>
          Products
        </Typography>
      </FeatureBox>
      <FeatureDivider orientation="vertical" flexItem={true} />
      <FeatureBox>
        <Typography variant="h2">1000+</Typography>
        <Typography variant="body1" fontWeight={"600"}>
          Clients
        </Typography>
      </FeatureBox>
      <FeatureDivider orientation="vertical" flexItem={true} />
      <FeatureBox>
        <Typography variant="h2">10+</Typography>
        <Typography variant="body1" fontWeight={"600"}>
          Categories
        </Typography>
      </FeatureBox>
    </BannerContainer>
  </SectionContainer>
);

export default HomeBanner;
