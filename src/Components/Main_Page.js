import {
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Box,
  Avatar,
  Stack,
  Link,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import img from "../imges/sasuke.jpg";
import styles from "./Styles.js";
import Left_Bar from "./Left_Bar";
import { textAlign } from "@mui/system";

import { Padding } from "@mui/icons-material";

const useStyles = makeStyles(styles);

const Main_Page = () => {
  const classes = useStyles();
  return (
    <div className={classes.main_div}>
    
      <div className={classes.main_page_div}>
        <br></br>
        <Grid
          lg={12}
          item
          container
          spacing={2}
          style={{ paddingBottom:50}}
        >
          <Grid item lg={12} xs={12} sm={12} style={{paddingRight:180}}>
            <h1 style={{  direction: "rtl", color:"#4da6ff" }}>الرئيسية</h1>
          </Grid>
          <Grid item  >
            <Paper elevation={2} className={classes.main_page_cards}>
            <h4>عدد الافلام</h4>
              <h1>875</h1>
            </Paper>
          </Grid>
          <Grid item   >
            <Paper elevation={2} className={classes.main_page_cards}>
              <h4>عدد المستخدمين</h4>
              <h1>10000</h1>
            </Paper>
          </Grid>
          <Grid item  >
            <Paper elevation={2} className={classes.main_page_cards}>
              <h4>عدد التقييمات</h4>
              <h1>234000</h1>
            </Paper>
          </Grid>
          <Grid item  >
            <Paper elevation={2} className={classes.main_page_cards}>
              <h4>عدد الممثلين</h4>
              <h1>2500</h1>
            </Paper>
          </Grid>
        </Grid>
      </div>

     <Left_Bar />

    </div>
  );
};

export default Main_Page;
