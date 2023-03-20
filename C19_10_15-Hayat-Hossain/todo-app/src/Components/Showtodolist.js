import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
const Showtodolist = ({data}) => {
    console.log(data)
    return (
        <Stack  direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={12}
        style={{backgroundColor:'#a28089'}}
        p={2}
        mb={2}
        >
            <Typography variant="h6" color="common.white" gutterBottom>
               {data}
            </Typography>
            <DeleteOutlinedIcon/>
        </Stack>
    );
};

export default Showtodolist;