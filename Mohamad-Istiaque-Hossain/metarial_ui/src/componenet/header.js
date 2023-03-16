import React from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import SideMenu from './SideMenu';


const header = () => {
    // const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        {/* <MenuIcon /> */}
                        <MenuIcon />
                    </IconButton>
                    <SideMenu
                        openDrawer={openDrawer}
                        onClose={() => {
                            setOpenDrawer(false);
                        }}
                    />
                    <Typography variant="h6" color="inherit" component="div">
                        <Box>
                            <img src="https://demo.acmethemes.com/portfolio-web/wp-content/uploads/2019/01/logo_free_version.png" width={230} height={40} alt="logo" />
                        </Box>
                    </Typography>
                </Toolbar>
            </AppBar>
        </>

    );
}

export default header;