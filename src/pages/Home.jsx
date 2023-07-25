import { Box } from "@mui/material";
import HomeHero from "../components/home-hero/components/HomeHero";
import HomeBanner from "../components/home-banner/components/HomeBanner";
import HomeCollection from "../components/home-collection/components/HomeCollection";
import HomeDesigner from "../components/home-designer/components/HomeDesigner";
import HomeReviews from "../components/home-reviews/components/HomeReviews";
import HomeInstagram from "../components/home-instagram/components/HomeInstagram";
import SEO from "../components/seo/components/SEO";
import cld from "../config/cloudinary";

const Home = () => (
  <>
    <SEO page={"home"} />
    <Box className="homepage">
      <HomeHero />
      <HomeBanner />
      <HomeCollection />
      <HomeDesigner />
      <HomeReviews />
      <HomeInstagram />
    </Box>
  </>
);

export default Home;
