import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{backgroundColor:'#696161'}}>
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
          <Link to='/' >Dozie-GIS</Link>
          </Typography>
          
          <Link to="/web-map"><Button color="inherit">Web Map</Button></Link>
          <Link to="/tax-assessment"><Button color="inherit">Text Assessment</Button></Link>
          <Link to="/login"><Button color="inherit">Login</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}