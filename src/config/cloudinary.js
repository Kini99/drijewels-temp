import {Cloudinary} from "@cloudinary/url-gen";

const cld = new Cloudinary({
    cloud: {
      cloudName: 'drijewelsv2'
    }
  });

export default cld;