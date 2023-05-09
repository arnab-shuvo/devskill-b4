import React from "react";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { orange } from "@mui/material/colors";

const Footer = (props) => {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper backgrountcolor='orange' sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <Typography
                variant="body2"
                color="text.secondary"
                align="right"

                {...props}
                >               
                    E-Commerce@                
                {new Date().getFullYear()}
                {"."}
            </Typography>
        </Paper>
    );
}

export default Footer;