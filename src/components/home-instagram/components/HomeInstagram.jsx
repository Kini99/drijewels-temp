import { Link as RouterLink } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { Box, Typography, useTheme, Link } from "@mui/material";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import SectionContainer from "../../section-container/components/SectionContainer";
import HeadingBox from "../../heading-box/components/HeadingBox";
import {
  InstagramWrapper,
  ImagesBox,
  InstagramImage,
  JoinBox,
} from "../styles";
import instagram1 from "../../../images/instagram/1.png";
import instagram2 from "../../../images/instagram/2.png";
import instagram3 from "../../../images/instagram/3.png";

const HomeInstagram = () => {
  const theme = useTheme();
  return (
    <InstagramWrapper>
      <SectionContainer>
        <HeadingBox title={"Checkout Our Instagram"} />
        <ImagesBox>
          <Link
            to="https://www.instagram.com/drishtijewels/"
            target="blank"
            component={RouterLink}
            color="common.white"
            underline="none">
            <InstagramImage src={instagram1} alt="" />
          </Link>
          <Link
            to="https://www.instagram.com/drishtijewels/"
            target="blank"
            component={RouterLink}
            color="common.white"
            underline="none">
            <InstagramImage src={instagram2} alt="" />
          </Link>
          <Link
            to="https://www.instagram.com/drishtijewels/"
            target="blank"
            component={RouterLink}
            color="common.white"
            underline="none">
            <InstagramImage src={instagram3} alt="" />
          </Link>
          <Link
            to="https://www.instagram.com/drishtijewels/"
            target="blank"
            component={RouterLink}
            color="common.white"
            underline="none">
            <JoinBox>
              <InstagramIcon />
              <Typography>
                Join Our <br /> Instagram
              </Typography>
              <TrendingFlatIcon />
            </JoinBox>
          </Link>
        </ImagesBox>
      </SectionContainer>
      <Box width="50%" margin="auto">
        <KeyboardDoubleArrowUpIcon
          fontSize="large"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          sx={{ color: theme.palette.primary.main }}
        />
      </Box>
    </InstagramWrapper>
  );
};

export default HomeInstagram;
