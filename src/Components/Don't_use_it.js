import {Container ,Grid, Paper, TextField, Button, InputAdornment, IconButton, Box, Avatar, Stack, Link} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { makeStyles } from "@material-ui/core";
import React , {useState} from 'react';
import img from '../imges/sasuke.jpg'
import { textAlign } from '@mui/system';

const styles = {
    right_div: {
        margin: "auto",
        width: "20%",
        height:"97%",
        right: "0px",
        position: "absolute",
        background:"#4da6ff",
        padding: "10px",
        alignItems: "center"
      },
      stack:{
        position: "absolute",
        // alignItems: 'center',
        margin: "auto",
        // alignItems: "center",
        paddingLeft:"70px",
        direction: "rtl",
        paddingTop:"40%",
        color:"white"
      },
      link:{
        color:"white",
        
      }
};

const useStyles = makeStyles(styles);

const FPage = () => {
    const classes = useStyles();
    return (
        <div>
         
         <Container maxWidth="sm" sx={{alignContent:'flex-start'}} direction = "column" >

         {/* <Grid className={classes.right_div} container direction="column" justifyContent="center">
         <Grid item> */}
         <Box className={classes.right_div}>
         <Stack direction="column" spacing={2} className={classes.stack} >
         
        <Avatar 
        alt="Saske"
        src={img}
        sx={{ width: 150, height: 150 }}
        />
        
<Link href="#" underline="hover" sx={{color:"white"}}>
  {'الرئسية'}
        </Link>
        <Link href="#" underline="hover" sx={{color:"white"}}>
  {'إدارة المستخدمين'}
</Link>
<Link href="#" underline="hover" sx={{color:"white"}}>
  {'إدارة قائمة الإفلام'}
</Link>
<Link href="#" underline="hover" sx={{color:"white"}}>
  {'إدارة تصنيفا الافلام'}
</Link>
<Link href="#" underline="hover" sx={{color:"white"}}>
  {'إدارة قائمة الممثلين'}
</Link>
<Link href="#" underline="hover" sx={{color:"white"}}>
  {'الضبط'}
</Link>

        </Stack>
        </Box>
        {/* </Grid>
         </Grid> */}

      </Container>
          
        </div>
    );
};

export default FPage;