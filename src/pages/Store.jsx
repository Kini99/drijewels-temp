import { Box } from "@mui/material";
import CategoryContent from "../components/category-content/components/CategoryContent";
import CategoryHero from "../components/category-hero/components/CategoryHero";
import SEO from "../components/seo/components/SEO";

const Store = () => (
  <>
    <SEO page={"store"} />
    <Box className="store">
      <CategoryHero />
      <CategoryContent />
    </Box>
  </>
);

export default Store;
