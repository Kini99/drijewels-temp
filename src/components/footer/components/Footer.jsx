import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { Box, Typography, useMediaQuery, useTheme, Link } from "@mui/material";
import TextFieldIcon from "../../textfield-icon/components/TextField";
import djlogo1 from "../../../images/Djlogo1.jpg";
import {
  StyledFooter,
  FooterItem,
  FooterLeft,
  FooterLeftText,
  IconBox,
  FooterCenter,
  FooterCenterBox,
  LinksBox,
  FooterRight,
  FooterRightBox,
} from "../styles";
import FooterMobile from "./FooterMobile";

const Footer = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return isTablet ? (
    <FooterMobile />
  ) : (
    <StyledFooter className="footer" maxWidth={"xl"}>
      <FooterItem className="footer-top">
        <FooterLeft className="footer-left" maxWidth={"lg"}>
          <Link to="/" component={RouterLink}>
            <img src={djlogo1} alt="Logo of Drishti Jewels" />
          </Link>
          <FooterLeftText className="footer-left-text">
            <Link
              component={RouterLink}
              underline="none"
              to="tel:+91-7021882689"
              target="_blank"
              rel="noopener noreferrer"
              color="common.white">
              <IconBox>
                <LocalPhoneIcon />
                <Typography variant="body1">+91 - 7021882689</Typography>
              </IconBox>
            </Link>
            <Link
              component={RouterLink}
              underline="none"
              to="mailto:drijewels@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              color="common.white">
              <IconBox>
                <EmailIcon />
                <Typography variant="body1">drijewels@gmail.com</Typography>
              </IconBox>
            </Link>
            <Link
              to="https://goo.gl/maps/D1jBEvQVEvWewmrZ6"
              target="_blank"
              rel="noopener noreferrer"
              color="common.white"
              component={RouterLink}
              underline="none">
              <IconBox>
                <LocationOnIcon />
                <Typography variant="body1" textAlign={"start"}>
                  703, Upkar Society, opp. Kotak Bank, Dombivli, Maharashtra
                  421201
                </Typography>
              </IconBox>
            </Link>
          </FooterLeftText>
        </FooterLeft>
        <FooterCenter className="footer-center" maxWidth={"lg"}>
          <FooterCenterBox className="link-box">
            <Typography variant="h4">About</Typography>
            <LinksBox className="links-box">
              <Link to="/founder" component={RouterLink} underline="none">
                <Typography variant="body1">Our Founder</Typography>
              </Link>
              <Link to="/blog" component={RouterLink} underline="none">
                <Typography variant="body1">Latest Blog</Typography>
              </Link>
              <Link
                to={`https://api.whatsapp.com/send?phone=+917021882689&text=Hi Drishti! I'm interested in getting a custom jewellry piece from you and I have a question about it. Could we connect to discuss further? Thank you!`}
                target="_blank"
                rel="noopener noreferrer"
                component={RouterLink}
                underline="none">
                <Typography variant="body1">Contact Us</Typography>
              </Link>
            </LinksBox>
          </FooterCenterBox>
          <FooterCenterBox className="link-box">
            <Typography variant="h4">Support</Typography>
            <LinksBox className="links-box">
              <Link to="/terms" component={RouterLink} underline="none">
                <Typography variant="body1">Terms & Conditions</Typography>
              </Link>
              <Link to="/privacy" component={RouterLink} underline="none">
                <Typography variant="body1">Privacy Policy</Typography>
              </Link>
              <Link to="/faq" component={RouterLink} underline="none">
                <Typography variant="body1">FAQ</Typography>{" "}
              </Link>
            </LinksBox>
          </FooterCenterBox>
        </FooterCenter>
        <FooterRight className="footer-right">
          <FooterRightBox className="link-box">
            <Typography variant="h4">Subscribe</Typography>
            <Box className="links-box">
              <Typography variant="body1" marginBottom={"15%"}>
                Subscribe to our newsletter for amazing freebies.
              </Typography>
              <TextFieldIcon
                iconEnd={
                  <TrendingFlatIcon
                    sx={{
                      color: "#885422",
                      cursor: "pointer",
                    }}
                  />
                }
                placeholder="Enter your Email Address"
                type="email"
                sx={{
                  backgroundColor: "white",
                  placeholder: {
                    color: "black",
                  },
                  borderRadius: "10px",
                  width: "100%",
                }}
              />
            </Box>
          </FooterRightBox>
        </FooterRight>
      </FooterItem>
      <FooterItem
        className="footer-bottom"
        sx={{ justifyContent: "space-between" }}>
        <Box
          className="footer-bottom-left"
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            marginLeft: "22px",
            width: "12%",
          }}>
          <Link
            to="https://www.facebook.com/DRISHTI.JEWELLS/"
            target="_blank"
            rel="noopener noreferrer"
            color="common.white"
            component={RouterLink}
            underline="none">
            <FacebookIcon />
          </Link>
          <Link
            to="https://www.instagram.com/drishtijewels/"
            target="_blank"
            rel="noopener noreferrer"
            color="common.white"
            component={RouterLink}
            underline="none">
            <InstagramIcon />
          </Link>
        </Box>
        <Box className="footer-bottom-right">
          <Typography variant="body1" marginRight={"40px"}>
            © 2023 Drishti Jewels
          </Typography>
        </Box>
      </FooterItem>
    </StyledFooter>
  );
};

export default Footer;
