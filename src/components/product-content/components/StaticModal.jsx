import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { StyledAccordion } from "../styles";
import getStaticData from "../utils";

const StaticModal = ({ product }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box className="other-info">
      <StyledAccordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}>
        <AccordionSummary
          expandIcon={expanded === "panel1" ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography
            fontSize={isMobile ? "20px" : "30px"}
            color="primary.main"
            fontFamily={"Fraunces"}>
            Description
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This product weighs <strong>{product.weight}</strong> approximately
            & has a width of <strong>{product.width}</strong>.
          </Typography>
          <Typography>
            We also customise it in 18k, 14k, 10k gold with real certified
            natural diamonds and in lab grown certified diamonds.
          </Typography>
          <Typography>{product.other}</Typography>
        </AccordionDetails>
      </StyledAccordion>
      {getStaticData.map((data, index) => (
        <StyledAccordion
          expanded={expanded === `panel${index + 2}`}
          onChange={handleChange(`panel${index + 2}`)}
          key={index}>
          <AccordionSummary
            expandIcon={
              expanded === `panel${index + 2}` ? <RemoveIcon /> : <AddIcon />
            }
            aria-controls={`panel${index + 2}-content`}
            id={`panel${index + 2}-header`}>
            <Typography
              fontSize={isMobile ? "20px" : "30px"}
              color="primary.main"
              fontFamily={"h1.fontFamily"}>
              {data.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{data.content}</Typography>
          </AccordionDetails>
        </StyledAccordion>
      ))}
    </Box>
  );
};

export default StaticModal;
