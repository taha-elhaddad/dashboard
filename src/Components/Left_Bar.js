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

const Left_Bar = () => {
  const classes = useStyles();
    return (
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
    );
};

export default Left_Bar;