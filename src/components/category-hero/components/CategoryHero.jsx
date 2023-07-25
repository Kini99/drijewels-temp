import { Typography, Button } from "@mui/material";
import SectionContainer from "../../section-container/components/SectionContainer";
import { CatHeroContainer, BannerBox, BannerTextBox } from "../styles";
import banner from "../../../images/image6.jpg";

const CategoryHero = () => (
  <CatHeroContainer>
    <SectionContainer sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h2" textAlign={"left"} marginBottom={"10px"}>
        Store
      </Typography>
      <BannerBox>
        <img src={banner} alt="" />
        <BannerTextBox>
          <Typography variant="h3" padding={"10px"}>
            Jewellery That Makes <br />
            You More Beautiful
          </Typography>
          <Typography variant="body1" width={"50%"} paddingBottom={"10px"}>
            From necklaces to anklets with wide scope of customization, let us
            help you find your next jewellery.
          </Typography>
          <Button variant="contained" href="/bestsellers">
            Shop All
          </Button>
        </BannerTextBox>
      </BannerBox>
    </SectionContainer>
  </CatHeroContainer>
);

export default CategoryHero;
