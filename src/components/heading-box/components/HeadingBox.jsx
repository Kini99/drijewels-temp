import { Box, Typography } from "@mui/material";
import Underline from "../styles";

const HeadingBox = ({ title, color, sx }) => (
  <Box className="headingbox" padding={"20px 0"} sx={sx}>
    <Typography variant="h3" color={color}>
      {title}
    </Typography>
    <Underline variant="outline" />
  </Box>
);

export default HeadingBox;
