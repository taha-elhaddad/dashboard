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
import { textAlign } from "@mui/system";

import { Padding } from "@mui/icons-material";

const useStyles = makeStyles(styles);

const P_Page = () => {
  const classes = useStyles();
  return (
    <div className={classes.main_dev}>
      <div style={{ width: "65%", backgroundColor: "green" }}>
        <br></br>
        <Grid
          lg={12}
          item
          container
          spacing={2}
          style={{ backgroundColor: "blue" }}
        >
          <Grid item lg={12} xs={12} sm={12}>
            <h1 style={{ backgroundColor: "green" }}>Content</h1>
          </Grid>
          <Grid item lg={5} xs={12} sm={4} style={{ backgroundColor: "red" }}>
            <Paper elevation={2} sx={{ padding: 5, width: "70%",textAlign:'center' }}>
            <h4>عدد الافلام</h4>
              <h1>875</h1>
            </Paper>
          </Grid>
          <Grid item lg={5} xs={12} sm={4} style={{ backgroundColor: "red" }} >
            <Paper elevation={2} sx={{ padding: 5, width: "70%",textAlign:'center' }}>
              <h4>عدد المستخدمين</h4>
              <h1>10000</h1>
            </Paper>
          </Grid>
          <Grid item lg={5} xs={12} sm={4} style={{ backgroundColor: "red" }}>
            <Paper elevation={2} sx={{ padding: 5, width: "70%",textAlign:'center' }}>
              <h4>عدد التقييمات</h4>
              <h1>234000</h1>
            </Paper>
          </Grid>
          <Grid item lg={5} xs={12} sm={4} style={{ backgroundColor: "red" }}>
            <Paper elevation={2} sx={{ padding: 5, width: "70%",textAlign:'center' }}>
              <h4>عدد الممثلين</h4>
              <h1>2500</h1>
            </Paper>
          </Grid>
        </Grid>
      </div>

      <div className={classes.right_div}>
        <Container maxWidth={true} direction="column">
          <Grid
            container
            spacing={2}
            direction="column"
            justifyContent="center"
            style={{ minHeight: "102.5vh" }}
          >
            <Stack className={classes.stack}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Avatar
                    alt="Saske"
                    src={img}
                    sx={{ width: 150, height: 150 }}
                  />
                </Grid>
                <Grid item>
                  <Link href="#" underline="hover" sx={{ color: "white" }}>
                    {"الرئسية"}
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" underline="hover" sx={{ color: "white" }}>
                    {"إدارة المستخدمين"}
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" underline="hover" sx={{ color: "white" }}>
                    {"إدارة قائمة الإفلام"}
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" underline="hover" sx={{ color: "white" }}>
                    {"إدارة تصنيفا الافلام"}
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" underline="hover" sx={{ color: "white" }}>
                    {"إدارة قائمة الممثلين"}
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" underline="hover" sx={{ color: "white" }}>
                    {"الضبط"}
                  </Link>
                </Grid>
              </Grid>
            </Stack>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default P_Page;
