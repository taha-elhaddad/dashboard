import React, { useState } from "react";
import {
  Paper,
  Container,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Stack,
  Box,
  Card,
  Typography,
  CardContent,
  CardActions,
  Switch,
} from "@mui/material";
import { Grid } from "@material-ui/core";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const ManageCate = () => {
  return (
    <div>
      <Grid
        container
        item
        lg={8}
        xs={12}
        sm={12}
        style={{
          marginLeft: "140px",
          marginTop: "110px",
          minHeight: "70.5vh",
        }}
      >
        <Grid item lg={12} xs={12} sm={12}>
          <h1 style={{ direction: "rtl", color: "#4da6ff" }}>
            إدارة التصنيفات
          </h1>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
            <Button variant="contained" style={{
              width:200,
              padding:15
              }}>أضافة</Button>
            </div>
            <div style={{ width:600}}>
            <TextField id="outlined-basic" style={{
              }} 
              fullWidth
              label="Outlined" variant="outlined" />
            </div>
          </div>
          {/*  */}
          <div style={{ display: "flex",backgroundColor:'red' }}>
            <div>
            <Grid container style={{marginTop:40}} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid xs={2} sm={4} style={{width:550,height:200}}>
            <Item style={{height:150}}>
          <Typography  variant="h4" style={{textAlign:'center',
          padding:45,
          
          }} component="div">
          benevo
                  <Switch edge='end'  defaultChecked />

        </Typography>
        <Item style={{marginLeft:-2}}>
        </Item>
            </Item>
            </Grid>
            </Grid>

{/* 

          <Card item sx={{  minWidth: 200,
            minHeight:100,
            width: 200,
            height: 180,
            marginRight: '1rem',marginTop:'1rem' }}>
      <CardContent>
        <Typography variant="h3" style={{textAlign:'center',padding:15}} component="div">
          benevo
        </Typography>
      </CardContent>
      <CardActions>
      <Switch  defaultChecked />
      </CardActions>
          </Card>
*/}
            </div>
          </div>

        </Grid>
        {/* component={Paper} sx={{}} elevation={6} */}
      </Grid>
    </div>
  );
};

export default ManageCate;
