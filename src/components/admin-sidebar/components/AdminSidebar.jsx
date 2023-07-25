import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import {Link} from "react-router-dom";
import { SwipeableDrawer } from '@mui/material';
import { StyledSidebar } from '../styles/index';


const AdminSidebar = () => {
    const [state, setState] = useState({
      left: false,
      right: false,
      top: false,
      bottom: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (
        event &&
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <div>
       <ul>
        <li><Link to="/admin">Home</Link></li>
        <li><Link to="/admin/categories">Categories</Link></li>
        <li><Link to="/admin/collections">Collections</Link></li>
        <li><Link to="/admin/products">Products</Link></li>
        <li><Link to="/admin/subscribers">Subscribers</Link></li>
       </ul>
       <ul>
        <li>Settings</li>
        <li>Logout</li>
       </ul>
      </div>
    );
  

  return (
    <>
      
      <React.Fragment key={"left"}>
        <StyledSidebar>
        <GiHamburgerMenu
          onClick={toggleDrawer("left", true)}
          style={{ cursor: 'pointer' }}
        />
        <SwipeableDrawer
          left={"left"}
          open={state.left}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {list("left")}
        </SwipeableDrawer>
        </StyledSidebar>
      </React.Fragment>
   
    </>
  );
};

export default AdminSidebar;