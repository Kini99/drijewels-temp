// eslint-disable-next-line import/no-extraneous-dependencies
import { Helmet } from "react-helmet";
import pageDetails from "../utils";

const SEO = ({ page, data }) => {
  if (page === "category" || page === "product") {
    return (
      <Helmet>
        <title>{`${data?.name} | Drishti Jewels`}</title>
        <meta name="description" content={data?.description || data?.name} />
        <meta name="og:url" content="drijewels.com" />
        <meta name="og:locale" content="en_US" />
        <meta
          name="keywords"
          content="luxury, jewellery, customisable, mumbai"
        />
      </Helmet>
    );
  }
  if (page === "store") {
    return (
      <Helmet>
        <title>{pageDetails[1].title} | Drishti Jewels</title>
        <meta name="description" content={pageDetails[1].description} />
        <meta name="og:url" content="drijewels.com" />
        <meta name="og:locale" content="en_US" />
        <meta
          name="keywords"
          content="luxury, jewellery, customisable, mumbai"
        />
      </Helmet>
    );
  }
  return (
    <Helmet>
      <title>{pageDetails[0].title}</title>
      <meta name="description" content={pageDetails[0].description} />
      <meta name="og:url" content="drijewels.com" />
      <meta name="og:locale" content="en_US" />
      <meta name="keywords" content="luxury, jewellery, customisable, mumbai" />
    </Helmet>
  );
};

export default SEO;
