import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Link } from "@mui/material";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { FooterCenterBox, LinksBox, IconBox, MobileWrapper } from "../styles";
import TextFieldIcon from "../../textfield-icon/components/TextField";
import logo from "../../../images/Djlogo1.jpg";

const FooterMobile = () => (
  <MobileWrapper>
    <Box className="content">
      <FooterCenterBox className="link-box">
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ width: "80%" }}>
            <Typography variant="h4">About</Typography>
            <LinksBox className="links-box">
              <Link to="/founder" component={RouterLink} color="common.white">
                <Typography variant="body1">Our Founder</Typography>
              </Link>
              <Link to="/blog" component={RouterLink} color="common.white">
                <Typography variant="body1">Latest Blog</Typography>
              </Link>
              <Link
                to={`https://api.whatsapp.com/send?phone=+917021882689&text=Hi Drishti! I'm interested in getting a custom jewellry piece from you and I have a question about it. Could we connect to discuss further? Thank you!`}
                target="_blank"
                rel="noopener noreferrer"
                component={RouterLink}
                color="common.white">
                <Typography variant="body1">Contact Us</Typography>
              </Link>
            </LinksBox>
          </Box>
          <Link
            to="/"
            className="link"
            sx={{
              img: { marginLeft: "60%", marginTop: "-8%", height: "100px" },
            }}>
            <img src={logo} alt="Logo of Drishti Jewels" />
          </Link>
        </Box>
      </FooterCenterBox>
      <FooterCenterBox className="link-box">
        <Typography variant="h4">Support</Typography>
        <LinksBox className="links-box">
          <Link
            to="/terms"
            component={RouterLink}
            color="common.white"
            underline="none">
            <Typography variant="body1">Terms & Conditions</Typography>
          </Link>
          <Link
            to="/privacy"
            component={RouterLink}
            color="common.white"
            underline="none">
            <Typography variant="body1">Privacy Policy</Typography>
          </Link>
          <Link
            to="/faq"
            component={RouterLink}
            color="common.white"
            underline="none">
            <Typography variant="body1">FAQ</Typography>{" "}
          </Link>
        </LinksBox>
      </FooterCenterBox>
      <FooterCenterBox className="link-box">
        <Typography variant="h4">Contact Us</Typography>
        <LinksBox className="links-box">
          <Link
            component={RouterLink}
            color="common.white"
            underline="none"
            to="tel:+91-7021882689"
            target="_blank"
            rel="noopener noreferrer">
            <IconBox>
              <LocalPhoneIcon />
              <Typography variant="body1">+91 - 7021882689</Typography>
            </IconBox>
          </Link>
          <Link
            component={RouterLink}
            color="common.white"
            underline="none"
            to="mailto:drijewels@gmail.com"
            target="_blank"
            rel="noopener noreferrer">
            <IconBox>
              <EmailIcon />
              <Typography variant="body1">drijewels@gmail.com</Typography>
            </IconBox>
          </Link>
          <Link
            to="https://goo.gl/maps/D1jBEvQVEvWewmrZ6"
            target="_blank"
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
        </LinksBox>
      </FooterCenterBox>
      <FooterCenterBox className="link-box">
        <Typography variant="h4">Subscribe</Typography>
        <LinksBox className="links-box">
          <Typography variant="body1" marginBottom={"75px"}>
            Subscribe to our newsletter for amazing freebies.
          </Typography>
          <TextFieldIcon
            iconEnd={
              <TrendingFlatIcon
                color="primary"
                sx={{
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
        </LinksBox>
      </FooterCenterBox>
    </Box>
  </MobileWrapper>
);

export default FooterMobile;
