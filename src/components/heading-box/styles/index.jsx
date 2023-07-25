import { Divider, styled } from "@mui/material";

const Underline = styled(Divider)(({ theme }) => ({
  borderWidth: theme.spacing(0.25),
  width: "10%",
  marginLeft: "50%",
}));

export default Underline;
