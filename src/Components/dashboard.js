import React, { useState } from "react";
import { Paper,Box, Item } from "@mui/material";
import { Grid } from "@material-ui/core";
import Layout from "@mui-treasury/layout";

const Dashboard = () => {
  return (
    <div>
        <br></br>
      <Grid lg={12} item container spacing={2}>
      <Grid item lg={4} xs={12} sm={4}>
        <Paper elevation={2} sx={{ padding: 5 }}> 

        </Paper>
        </Grid>
        <Grid item lg={8} xs={12} sm={8}>
            <h1 style={{ backgroundColor: "green" }}>
                Content
                </h1>

                </Grid>

      </Grid>
    </div>
  );
};

export default Dashboard;
