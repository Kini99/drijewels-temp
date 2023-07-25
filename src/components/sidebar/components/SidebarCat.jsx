// import { Link as RouterLink } from "react-router-dom";
import { Typography, Link, Box } from "@mui/material";
import DiamondIcon from "@mui/icons-material/Diamond";
import SideBarWrapper from "../styles";

const SidebarCat = ({ categories, collections, currentCat }) => (
  <SideBarWrapper className={"sidebar"}>
    <Typography variant="h5">All Categories</Typography>
    <Link href={`/bestsellers`} underline="none">
      {currentCat === "Bestsellers" ? (
        <>
          <DiamondIcon sx={{ position: "absolute", left: "-1.6rem" }} />
          <Typography sx={{ padding: "1% 0" }} fontWeight={700}>
            Bestsellers
          </Typography>
        </>
      ) : (
        <Typography sx={{ padding: "1% 0" }}>Bestsellers</Typography>
      )}
    </Link>
    {categories.map((category, index) => (
      <Link
        href={`/categories/${category.categoryNumber}`}
        key={index}
        underline="none">
        {category.name === currentCat ? (
          <>
            <DiamondIcon sx={{ position: "absolute", left: "-1.6rem" }} />
            <Typography sx={{ padding: "1% 0" }} fontWeight={700}>
              {category.name}
            </Typography>
          </>
        ) : (
          <Typography sx={{ padding: "1% 0" }}>{category.name}</Typography>
        )}
      </Link>
    ))}
    <Typography variant="h5" sx={{ padding: "2% 0" }}>
      All Collections
    </Typography>
    {collections.map((collection, index) => (
      <Link
        href={`/collections/${collection.collectionNumber}`}
        key={index}
        underline="none">
        {collection.name === currentCat ? (
          <>
            <DiamondIcon sx={{ position: "absolute", left: "-1.6rem" }} />
            <Typography sx={{ padding: "1% 0" }} fontWeight={700}>
              {collection.name}
            </Typography>
          </>
        ) : (
          <Typography sx={{ padding: "1% 0" }}>{collection.name}</Typography>
        )}
      </Link>
    ))}
  </SideBarWrapper>
);

export default SidebarCat;
