import React, { useState } from "react";
import {
  Paper,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { Grid } from "@material-ui/core";
import { Tab } from "react-bootstrap";
import { makeStyles } from "@material-ui/core";
import Left_Bar from "../Left_Bar";
import styles from "../Styles";
import { border } from "@mui/system";

const tableData = [
  {
    id: 1,
    name:"Ahmed",
    email: "tschafer0@wp.com",
    age: 93,
    status: false,
  },
  {
    id: 2,
    name:"Taha",
    email: "dmacsherry1@123-reg.co.uk",
    age: 59,
    status: true,
  },
  {
    id: 3,
    name:"Ash",
    email: "jhickisson2@google.it",
    age: 13,
    status: true,
  },
  {
    id: 4,
    name:"Walid",
    email: "dsurguine3@answers.com",
    age: 28,
    status: false,
  },
  {
    id: 5,
    name:"Ali",
    email: "bsarsons4@github.com",
    age: 47,
    status: false,
  },
];
const useStyles = makeStyles(styles);
const Management = () => {
  
  const classes = useStyles();
  return (
    
    <div className={classes.main_div}>
    
      <div className={classes.manage_page_div}>
      
        
        <Grid container item lg={8} xs={12} sm={12} style={{ marginLeft:"140px",marginTop:"110px",minHeight: "70.5vh"}} >
         
        <Grid item lg={12} xs={12} sm={12}>
          <h1 style={{  direction: "rtl", color:"#4da6ff" }}>إدارة المستخدمين</h1>
        </Grid> 
        <TableContainer component={Paper} sx={{}} elevation={6}>
            <Table aria-lable="Users Data" >
              <TableHead sx={{backgroundColor:"#4da6ff"}}>
                <TableCell align="center">Status</TableCell>
                <TableCell>Age</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Name</TableCell>
              </TableHead>
              <TableBody>
                {tableData.map((row) => (
                  <TableRow key={row.id}
                  sx={{'&:last-child td, &:last child th': {border: 0} }}
                  >
                    <TableCell align="center">{row.status}</TableCell>
                    <TableCell >{row.age}</TableCell>
                    <TableCell align="center">{row.email}</TableCell>
                    <TableCell align="center">{row.name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      
      </div>
      <Left_Bar />
    </div>
  );
};

export default Management;
