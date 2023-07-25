import { useState } from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { StyledAccordion } from "../components/product-content/styles";

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const fontSizeH1 = isMobile ? "16px" : "25px";
  const fontSizeText = isMobile ? "15px" : "18px";

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqData = [
    {
      question: "How can I contact your brand?",
      answer:
        "You can reach out to us through Instagram, WhatsApp or Gmail. Additionally, you can also contact us by calling our helpline at +91 - 7021882689.",
    },
    {
      question: "How can I place an order?",
      answer:
        "You can conveniently place your order by contacting us directly through Instagram, WhatsApp or phone.",
    },
    {
      question: "Will there be any additional tax charges?",
      answer:
        "Applicable tax duties will be determined based on your country's regulations and will be the responsibility of the customer. Please note that in some cases, you may be required to pay additional custom duty fees to the courier company to receive your order. For customers in India, all prices include GST. Please understand that we are unable to provide specific advice regarding the duty amount.",
    },
    {
      question: "How long does it take to deliver an order?",
      answer:
        "Since all our products are handcrafted with care, we generally require a minimum of 15-20 days for delivery. We appreciate your patience and understanding.",
    },
    {
      question: "Can I cancel my order?",
      answer: "Your order cannot be cancelled once placed",
    },
    {
      question: "How can I avoid tarnish on my jewellery?",
      answer:
        "We recommend storing your jewellery safely, avoiding contact with soaps and perfumes, removing it before sleeping, and putting it back on after your shower.",
    },
    {
      question: "Is the jewellery waterproof?",
      answer:
        "Our Gold Jewellery and Silver Jewellery ordered in white plating is completely waterproof. For Silver Jewellery ordered in rose gold plating or yellow gold plating, it is advised to avoid contact with perfumes, body sprays and water at all times. Additionally, it is recommended to refrain from wearing the jewellery while bathing, swimming, or sleeping.",
    },
    {
      question: "What warranty do you offer?",
      answer:
        "We offer a lifetime anti-tarnish warranty for our exquisite Gold jewellery, ensuring its lasting beauty. For our Silver jewellery with white plating, we provide a generous 1-year warranty, giving you peace of mind. Please note that our Silver jewellery with rose gold or yellow gold plating does not come with a warranty, as their unique finishes require special care and attention.",
    },
    {
      question: "How can I track my order?",
      answer:
        "For updates on your order, you can directly get in touch with us to inquire about its status.",
    },
    {
      question: "Do you offer Cash on Delivery (COD)?",
      answer:
        "We do not offer Cash on Delivery (COD) for orders placed through WhatsApp and Instagram.",
    },
    {
      question: "Can I collaborate with your brand?",
      answer:
        "We are thrilled to explore collaboration opportunities with you. Please DM us on Instagram or email us your details at drijewels@gmail.com and we will get back to you promptly!",
    },
  ];

  return (
    <>
      <Typography variant="h2" margin="20px 0" color="primary.main">
        Frequently Asked Questions
      </Typography>
      <div style={{ width: "75%", margin: "auto", marginBottom: "2%" }}>
        {faqData.map((data, index) => (
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
                fontSize={fontSizeH1}
                color="primary.main"
                fontFamily={"Fraunces"}>
                {data.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize={fontSizeText}>{data.answer}</Typography>
            </AccordionDetails>
          </StyledAccordion>
        ))}
      </div>
    </>
  );
};

export default FAQ;
