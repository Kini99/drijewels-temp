import { ImageHoverBox, HoverTypography } from "../styles";

const HoverImage = ({ url, height, width, title, bestSeller }) => {
  const variant = bestSeller ? "h2" : "h3";
  return (
    <ImageHoverBox
      ownerState={{ url, bestSeller }}
      height={height}
      width={width}>
      <HoverTypography variant={variant}>{title}</HoverTypography>
    </ImageHoverBox>
  );
};

export default HoverImage;
