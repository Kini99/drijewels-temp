import { Box } from "@mui/material";

const SectionContainer = ({ children, sx }) => (
  <Box
    maxWidth={"1100px"}
    margin={"0 auto"}
    padding={"0 5%"}
    width={"100%"}
    className={"section-container"}
    sx={sx}>
    {children}
  </Box>
);

export default SectionContainer;
