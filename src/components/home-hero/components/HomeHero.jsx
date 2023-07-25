import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Button, Link } from "@mui/material";
import heroimage1 from "../../../images/image3.jpg";
import heroimage2 from "../../../images/image4.jpg";
import {
  HeroContainer,
  HeroSectionContainer,
  ImageBox,
  TextBox,
} from "../styles";

const HomeHero = () => (
  <HeroContainer>
    <HeroSectionContainer className={"section-container"}>
      <TextBox className="text">
        <Typography variant="h1" letterSpacing={-2} paddingBottom={"20px"}>
          Customisable <br /> Luxury Jewellery
        </Typography>
        <Typography variant="body1" paddingBottom={"20px"} fontSize={"1.25rem"}>
          Shop minimal, affordable and economically <br /> fine jewellery for
          you & your loved ones.
        </Typography>
        <Box width={"25%"}>
          <Link to="/store" component={RouterLink}>
            <Button variant="contained">Shop Now</Button>
          </Link>
        </Box>
      </TextBox>
      <ImageBox className="images">
        <img src={heroimage1} alt="Komal x Drishti 1" id="img1" />
        <img src={heroimage2} alt="Komal x Drishti 2" id="img2" />
      </ImageBox>
    </HeroSectionContainer>
  </HeroContainer>
);

export default HomeHero;
