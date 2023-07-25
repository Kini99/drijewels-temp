import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DiamondIcon from "@mui/icons-material/Diamond";

const Terms = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const listData = [
    {
      id: "1",
      content:
        "All our orders are currently placed via WhatsApp or Instagram only.",
    },
    {
      id: "2",
      content: `If you're unable to reach us, kindly email us on
      drijewels@gmail.com or leave a message on Instagram/WhatsApp and allow
      us a minimum of 24-48 hrs to get back to you.`,
    },
    {
      id: "3",
      content:
        "Orders generally take a minimum of 15-20 business days to arrive.",
    },
    {
      id: "4",
      content: `We won't be able to redirect orders once items have been dispatched.`,
    },
    {
      id: "5",
      content: `We will try to deliver products in time but in some cases orders may
      be delayed as all our products undergo a quality check test. This may
      sometimes lead to a delay in case if the product fails to pass the
      quality check test.`,
    },
    {
      id: "6",
      content: `If you believe that the packaging is tampered with or damaged, before
      accepting delivery of the goods, kindly refuse to take delivery. You
      must shoot a video and take multiple pictures of the same.`,
    },
    {
      id: "7",
      content: `If your non-personalized jewellery arrives damaged, then the return
      request must be placed within 2 days of placing the order. Any return
      requests after 2 days will not be accommodated. Customers have to bear
      shipping charges for returning their product. The product must be in
      unused condition, in its original packaging along with its original
      tags and invoice, failing which the return will not be possible. We
      will either fix the product and send it back or offer you the amount
      in credit in case it cannot be fixed.`,
    },
    {
      id: "8",
      content: `In case you end up choosing the wrong polish color while placing the
      order, please note that rectifying the order will require payment of
      additional charges.`,
    },
  ];
  return (
    <Box sx={{ width: "70%", margin: "auto" }}>
      <Typography
        variant={isMobile ? "h3" : "h2"}
        margin={"2% 0"}
        color={"primary"}>
        Terms & Conditions
      </Typography>
      <Box
        sx={{
          fontFamily: theme.typography.fontFamily,
          fontSize: 18,
          color: theme.palette.text.primary,
          textAlign: "justify",
          marginBottom: "2%",
        }}>
        <Typography fontSize={"18px"} textAlign={"justify"} marginBottom={"2%"}>
          Please read these terms &amp; conditions carefully before using this
          website. If you do not agree to these terms you may not use this
          website. By using this website, you signify your explicit assent to
          the terms &amp; conditions and Privacy policy.
        </Typography>
        <Typography fontSize={"18px"} textAlign={"justify"} marginBottom={"2%"}>
          These terms &amp; conditions are legally binding terms of services
          available on the website as well as at the terms of use of this
          website. These terms of use &amp; privacy policy extend to both users
          who visit the website but do not transact business on the website
          (“users/guests”) as well as users who are registered with the website
          to transact business on the website (“customers/members”).
        </Typography>
        <Typography fontSize={"18px"} textAlign={"justify"} marginBottom={"2%"}>
          &apos;Drishti Jewels&apos; reserves the right to modify or terminate
          any portion of the website or the services offered by the company for
          any reason, without notice and liability to you or any third party.
        </Typography>
        <Typography fontSize={"18px"} textAlign={"justify"} marginBottom={"2%"}>
          You are responsible for regularly reviewing these terms of use so that
          you will be apprised of changes if any. Nothing in these terms of use
          should be construed to confer any rights to third party beneficiaries.
        </Typography>
        <List
          sx={{
            ".MuiListItem-root": {
              flexDirection: isMobile ? "column" : "row",
            },
          }}>
          <ListItem>
            <ListItemIcon>
              <DiamondIcon color={"primary"} />
            </ListItemIcon>
            <ListItemText sx={{ padding: "0" }}>
              {listData[0].content}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <DiamondIcon color={"primary"} />
            </ListItemIcon>
            <ListItemText sx={{ padding: "0" }}>
              {listData[1].content}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <DiamondIcon color={"primary"} />
            </ListItemIcon>
            <ListItemText sx={{ padding: "0" }}>
              {listData[2].content}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <DiamondIcon color={"primary"} />
            </ListItemIcon>
            <ListItemText sx={{ padding: "0" }}>
              {listData[3].content}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <DiamondIcon color={"primary"} />
            </ListItemIcon>
            <ListItemText sx={{ padding: "0" }}>
              {listData[4].content}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <DiamondIcon color={"primary"} />
            </ListItemIcon>
            <ListItemText sx={{ padding: "0" }}>
              {listData[5].content}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <DiamondIcon color={"primary"} />
            </ListItemIcon>
            <ListItemText
              sx={{
                padding: "0",
              }}>
              {listData[6].content}
              <Typography fontWeight={"700"}>
                Note: Personalized products are not returnable unless the
                product is damaged or defective.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <DiamondIcon color={"primary"} />
            </ListItemIcon>
            <ListItemText sx={{ padding: "0" }}>
              {listData[7].content}
            </ListItemText>
          </ListItem>
        </List>
        <Typography fontWeight={"700"} marginTop={"2%"}>
          Errors and inaccuracies on our website
        </Typography>
        <Typography textAlign={"justify"}>
          On our website, we strive to give thorough, accurate, and up-to-date
          information. Unfortunately, no website can be guaranteed to be fully
          free of human and technological faults. Some content on this site may
          have typographical errors, inaccuracies, or omissions, some of which
          may pertain to pricing and availability, and some information may not
          be comprehensive or current. We retain the right to correct any
          mistakes, inaccuracies, or omissions, as well as modify or update
          information at any time without prior notice, including after an order
          has been made. We regret any difficulty this may have caused you.
        </Typography>
        <Typography fontWeight={"700"} marginTop={"2%"}>
          Contact Information
        </Typography>
        <Typography>
          For any queries, please contact us at drijewels@gmail.com or call +91
          - 7021882689 (Monday to Saturday, 10 am to 6 pm).
        </Typography>
      </Box>
    </Box>
  );
};

export default Terms;
