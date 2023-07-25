import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Breadcrumbs,
  Typography,
  ClickAwayListener,
  Tooltip,
  IconButton,
  useMediaQuery,
  useTheme,
  Link,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpShortWide,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import HeadingBox from "../../heading-box/components/HeadingBox";
import ModalBox from "../../modal-box/components/ModalBox";
import ModalBoxFilter from "../../modal-box/components/ModalBoxFilter";
import { HeaderWrapper, ContentBox, OptionsBox } from "./styles";

const PLPHeader = ({ data, setSortObj, setPriceRange, priceRange }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const separatorStyles = {
    "& li + li::before": {
      color: theme.palette.primary    },
  };

  const [open, setOpen] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickFilter = () => {
    setOpenFilter((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const handleClickAwayFilter = () => {
    setOpenFilter(false);
  };

  return (
    <HeaderWrapper>
      <HeadingBox title={data?.name} />
      <ContentBox>
        {!isMobile && (
          <Breadcrumbs aria-label="breadcrumb"     sx={{
            width: "100%",
            margin: "10px 0",
            ".MuiBreadcrumbs-separator": {
              color: "#000",
            },
          }}>
            <Link
              to="/store"
              component={RouterLink}
              underline="hover"
              color="primary.main"
              fontWeight={"700"}>
              Store
            </Link>
            <Typography color="primary.main">{data?.name}</Typography>
          </Breadcrumbs>
        )}
        <OptionsBox id="filter">
          <ClickAwayListener onClickAway={handleClickAway}>
            <Box width={"50%"}>
              <Tooltip title="Sort">
                <IconButton onClick={handleClick}>
                  <FontAwesomeIcon icon={faArrowUpShortWide} />
                </IconButton>
              </Tooltip>
              {open && <ModalBox title={"Sort By"} setSortObj={setSortObj} />}
            </Box>
          </ClickAwayListener>
          <ClickAwayListener onClickAway={handleClickAwayFilter}>
            <Box width={"50%"}>
              <Tooltip title="Filter">
                <IconButton onClick={handleClickFilter}>
                  <FontAwesomeIcon icon={faFilter} />
                </IconButton>
              </Tooltip>
              {openFilter && (
                <ModalBoxFilter
                  title={"Filter By Price"}
                  setPriceRange={setPriceRange}
                  priceRange={priceRange}
                />
              )}
            </Box>
          </ClickAwayListener>
        </OptionsBox>
      </ContentBox>
    </HeaderWrapper>
  );
};

export default PLPHeader;
