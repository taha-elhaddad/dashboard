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
  Rating,
  Button,
  Switch,
} from "@mui/material";
import { Grid } from "@material-ui/core";
import { Tab } from "react-bootstrap";
import { makeStyles } from "@material-ui/core";
import Left_Bar from "../Left_Bar";
import styles from "../Styles";
import { border } from "@mui/system";

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const tableData = [
  {
    actor: "Milla Jovovich",
    about: "Milica Bogdanivna Jovovich",
    status: false,
  },
  {
    actor: "Michelle Rodriguez",
    about: "American actress and screenwriter",
    status: true,
  },
  {
    actor: "Ever Gabo Anderson",
    about: "American actress and screenwrite",
    status: true,
  },
  {
    actor: "Brooke Shields",
    about: " American actress and model.",
    status: false,
  },
];
const useStyles = makeStyles(styles);
const ActorsManagement = () => {
  const classes = useStyles();
  return (
    <div className={classes.main_div}>
      <div className={classes.manage_page_div}>
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
              إدارة الممثلين
            </h1>
            <Button variant="contained"
             >
             أضافة
            </Button>
          </Grid>
          <TableContainer component={Paper} sx={{}} elevation={6}>
            <Table aria-lable="Users Data">
              <TableHead sx={{ backgroundColor: "#4da6ff" }}>
                <TableCell style={{ color: "white" }} align="center">
                  حالة الممثل
                </TableCell>
                <TableCell style={{ color: "white" }} align="center">
                  نبذه
                </TableCell>
                <TableCell style={{ color: "white" }} align="center">
                  اسم الممثل
                </TableCell>
              </TableHead>
              <TableBody>
                {tableData.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last child th": { border: 0 } }}
                  >
                    <TableCell align="center">
                    <Switch {...label} defaultChecked />
                      {row.status}
                      </TableCell>
                    <TableCell align="center">{row.about}</TableCell>
                    <TableCell align="center">{row.actor}</TableCell>
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

export default ActorsManagement;
