import { Autocomplete, Box, Button, IconButton, Modal, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AdminSidebar from '../components/admin-sidebar/components/AdminSidebar';

const AdminHome = () => {
  const [openProductModal, setOpenProductModal] = useState(false);
  const [openCategoryModal, setOpenCategoryModal] = useState(false);
  const [openCollectionModal, setOpenCollectionModal] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    price: "",
    other: "",
    categoryNumber: null,
    collectionNumber: null,
    tags: "",
    image: "",
    sliderImages: "",
    isPublished: true,
    color: "",
    width: "",
    weight: "",
    length: ""
  });
  const [categoryDetails, setCategoryDetails] = useState({
    name: '',
    description: '',
    image: "",
    categoryNumber: null,
    isPublished: true
  });
  const [collectionDetails, setCollectionDetails] = useState({
    name: '',
    description: '',
    image: "",
    collectionNumber: null,
    isPublished: true
  });

  useEffect(() => {
    // Any initialization or effect code
  }, []);

  const descOptions = [];
  const lengthOptions = [];
  // ["Customised According To Size (model in the picture is wearing 6 inches chain length)", "20inches (model in the picture is wearing 16 inches chain length)"]

  const createProduct = () => {
    setOpenProductModal(true);
  };

  const createCategory = () => {
    setOpenCategoryModal(true);
  };

  const createCollection = () => {
    setOpenCollectionModal(true);
  };

  const handleProductSubmit = async () => {
    try {
      // Dispatch request to post product data
      const response = await axios.post(`${process.env.REACT_APP_SERVER}/products`, productDetails);
      console.log('Product created:', response.data);
      setOpenProductModal(false);
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  const handleCategorySubmit = async () => {
    try {
      // Dispatch request to post category data
      const response = await axios.post(`${process.env.REACT_APP_SERVER}/categories`, categoryDetails);
      console.log('Category created:', response.data);
      setOpenCategoryModal(false);
    } catch (error) {
      console.error('Error creating category:', error);
    }
  };

  const handleCollectionSubmit = async () => {
    try {
      // Dispatch request to post collection data
      const response = await axios.post(`${process.env.REACT_APP_SERVER}/collections`, collectionDetails);
      console.log('Collection created:', response.data);
      setOpenCollectionModal(false);
    } catch (error) {
      console.error('Error creating collection:', error);
    }
  };

  return (
    <>
      <AdminSidebar />
      <h1>Good Morning Drishti!</h1>
      <h3>What would you like to do today?</h3>
      <Box>
        <Box>
          <p>Products</p>
          <h3>Create a Product</h3>
          <Button onClick={createProduct}>Create Now</Button>
        </Box>
        <Box>
          <p>Categories</p>
          <h3>Create a Category</h3>
          <Button onClick={createCategory}>Create Now</Button>
        </Box>
        <Box>
          <p>Collections</p>
          <h3>Create a Collection</h3>
          <Button onClick={createCollection}>Create Now</Button>
        </Box>
      </Box>

      {/* Product Modal */}
      <Modal open={openProductModal} onClose={() => setOpenProductModal(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            maxHeight: '80vh',
            overflowY: 'auto',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2>Create a Product</h2>
            <IconButton onClick={() => setOpenProductModal(false)}>
              <CloseIcon />
            </IconButton>
          </div>
          <label>Name</label>
          <TextField
            label="Name"
            placeholder="Enter product name"
            // value={productDetails.name}
            onChange={(e) => setProductDetails({ ...productDetails, name: e.target.value })}
            fullWidth
            margin="normal"
          />
          <label>Price</label>
          <TextField
            label="Price"
            placeholder="Enter product price"
            value={productDetails.price}
            onChange={(e) => setProductDetails({ ...productDetails, price: e.target.value })}
            fullWidth
            margin="normal"
          />
          <label>Description</label>
          <Autocomplete
            multiple
            options={descOptions}
            value={productDetails.other}
            onChange={(event, newValue) => setProductDetails({ ...productDetails, other: newValue })}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Description"
                placeholder="Enter Description"
                fullWidth
                margin="normal"
              />
            )}
          />
          <label>Category</label>
          <TextField
            label="Category Number"
            value={productDetails.categoryNumber}
            onChange={(e) => setProductDetails({ ...productDetails, categoryNumber: e.target.value })}
            fullWidth
            margin="normal"
          />
          <label>Collection</label>
          <TextField
            label="Collection Number"
            value={productDetails.collectionNumber}
            onChange={(e) => setProductDetails({ ...productDetails, collectionNumber: e.target.value })}
            fullWidth
            margin="normal"
          />
          <label>Tags</label>
          <TextField
            label="Tags"
            value={productDetails.tags}
            onChange={(e) => setProductDetails({ ...productDetails, tags: e.target.value })}
            fullWidth
            margin="normal"
            placeholder="Enter tags"
          />
          <label>Image</label>
          <TextField
            label="Image"
            value={productDetails.image}
            onChange={(e) => setProductDetails({ ...productDetails, image: e.target.value })}
            fullWidth
            margin="normal"
            placeholder="Enter image url"
          />
          <label>Slider Images</label>
          <TextField
            label="Slider Images"
            value={productDetails.sliderImages}
            onChange={(e) => setProductDetails({ ...productDetails, sliderImages: e.target.value })}
            fullWidth
            margin="normal"
            placeholder="Enter images url"
          />
          <label>Color</label>
          <TextField
            label="Color"
            value={productDetails.color}
            onChange={(e) => setProductDetails({ ...productDetails, color: e.target.value })}
            fullWidth
            margin="normal"
            placeholder="Enter product color"
          />
          <label>Width</label>
          <TextField
            label="Width"
            value={productDetails.width}
            onChange={(e) => setProductDetails({ ...productDetails, width: e.target.value })}
            fullWidth
            margin="normal"
            placeholder="Enter product width"
          />
          <label>Weight</label>
          <TextField
            label="Weight"
            value={productDetails.weight}
            onChange={(e) => setProductDetails({ ...productDetails, weight: e.target.value })}
            fullWidth
            margin="normal"
            placeholder="Enter product weight"
          />
          <label>Length</label>
          <Autocomplete
            multiple
            options={lengthOptions}
            value={productDetails.length}
            onChange={(event, newValue) => setProductDetails({ ...productDetails, length: newValue })}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Length"
                placeholder="Enter product length"
                fullWidth
                margin="normal"
              />
            )}
          />
          <Button onClick={handleProductSubmit}>Submit</Button>
        </Box>
      </Modal>

      {/* Category Modal */}
      <Modal open={openCategoryModal} onClose={() => setOpenCategoryModal(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            maxHeight: '80vh',
            overflowY: 'auto',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2>Create a Category</h2>
            <IconButton onClick={() => setOpenCategoryModal(false)}>
              <CloseIcon />
            </IconButton>
          </div>
          <TextField
            label="Name"
            value={categoryDetails.name}
            onChange={(e) => setCategoryDetails({ ...categoryDetails, name: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            value={categoryDetails.description}
            onChange={(e) =>
              setCategoryDetails({ ...categoryDetails, description: e.target.value })
            }
            multiline
            rows={4}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Image"
            value={categoryDetails.image}
            onChange={(e) => setCategoryDetails({ ...categoryDetails, image: e.target.value })}
            fullWidth
            margin="normal"
          />
          <Button onClick={handleCategorySubmit}>Submit</Button>
        </Box>
      </Modal>

      {/* Collection Modal */}
      <Modal open={openCollectionModal} onClose={() => setOpenCollectionModal(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2>Create a Collection</h2>
            <IconButton onClick={() => setOpenCollectionModal(false)}>
              <CloseIcon />
            </IconButton>
          </div>
          <TextField
            label="Name"
            value={collectionDetails.name}
            onChange={(e) => setCollectionDetails({ ...collectionDetails, name: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            value={collectionDetails.description}
            onChange={(e) =>
              setCollectionDetails({ ...collectionDetails, description: e.target.value })
            }
            multiline
            rows={4}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Image"
            value={collectionDetails.image}
            onChange={(e) => setCollectionDetails({ ...collectionDetails, image: e.target.value })}
            fullWidth
            margin="normal"
          />
          <Button onClick={handleCollectionSubmit}>Submit</Button>
        </Box>
      </Modal>
    </>
  );
};

export default AdminHome;
