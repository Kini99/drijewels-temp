import { Typography, Button } from "@mui/material";
import { Wrapper, ContentBox } from "../components/page-not-found";
import box from "../images/box_404.png";
import SEO from "../components/seo/components/SEO";

const PageNotFound = () => (
  <>
    <SEO />
    <Wrapper>
      <img src={box} alt="Box" height="300vh" />
      <ContentBox>
        <Typography variant="h3" color="primary" marginBottom={"10px"}>
          Surely you were searching for more than an empty box!
        </Typography>
        <Typography variant="h5" marginBottom={"10px"}>
          We can&apos;t locate this page right now.
        </Typography>
        <Button variant="contained" href="/">
          Go Home
        </Button>
      </ContentBox>
    </Wrapper>
  </>
);

export default PageNotFound;
