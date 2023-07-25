import { Typography } from "@mui/material";
import SectionContainer from "../../section-container/components/SectionContainer";
import designer from "../../../images/drishti.jpg";
import { DesignerContainer, DesignerBox, TextBox } from "../styles";
import HeadingBox from "../../heading-box/components/HeadingBox";

const HomeDesigner = () => (
  <DesignerContainer>
    <SectionContainer className={"section-container"}>
      <HeadingBox title={"Meet the Designer"} color={"common.white"} />
      <DesignerBox className="designer">
        <img src={designer} alt="Drishti" height={"400px"} width={"auto"} />
        <TextBox className="textbox">
          <Typography
            variant="body1"
            paddingBottom={"20px"}
            lineHeight={"1.75"}>
            The founder and designer, Drishti, did her Jewellery Designing from
            Mumbai and is ranked as Best Jewellery Designer.
          </Typography>
          <Typography variant="body1" lineHeight={"1.75"}>
            After her further studies in Mumbai, she worked 9-5 jobs and later
            started her business. With the desire to do much more than usual,
            Drishti now works with a team of youthful personalities and talented
            artisans who share a comparable passion of creating jewelry that is
            stylish, luxurious and is to everybody’s liking.
          </Typography>
        </TextBox>
      </DesignerBox>
    </SectionContainer>
  </DesignerContainer>
);

export default HomeDesigner;
