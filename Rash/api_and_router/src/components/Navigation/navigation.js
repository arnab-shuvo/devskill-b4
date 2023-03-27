import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { Link } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
// }));

function Navigation() {
  //   const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav>
      <button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Menu
      </button>
      <MenuList
        id="simple-menu"
        // anchorEl={anchorEl}
        keepMounted
        // open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Link to={`/add-product`}>Create Product</Link></MenuItem>
        <MenuItem onClick={handleClose}>Edit Product</MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <Link to={`/add-product`}>Learn More</Link>
          Delete Product
        </MenuItem>

        <Link to={`product-detail/`}>Learn More</Link>
      </MenuList>
    </nav>
  );
}

export default Navigation;
