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
    id: 1,
    movie: "Resdent Evil 4",
    type: "Horror",
    year: 93,
    evaluation: 2,
    status: false,
  },
  {
    id: 2,
    movie: "You",
    type: "Drama",
    year: 59,
    evaluation: 2,
    status: true,
  },
  {
    id: 3,
    movie: "The godfather",
    type: "Action",
    year: 13,
    evaluation: 2,
    status: true,
  },
  {
    id: 4,
    movie: "need for speed",
    type: "Action",
    year: 1999,
    evaluation: 2,
    status: false,
  },
];
const useStyles = makeStyles(styles);
const MovieManagement = () => {
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
              إدارة الأفلام
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
                  حالة الفلم
                </TableCell>
                <TableCell style={{ color: "white" }} align="center">
                  التقييم
                </TableCell>
                <TableCell style={{ color: "white" }}>سنة الانتاج</TableCell>
                <TableCell style={{ color: "white" }} align="center">
                  التصنيف
                </TableCell>
                <TableCell style={{ color: "white" }} align="center">
                  اسم الفلم
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
                    <TableCell align="center">
                      {/* {row.evaluation} */}
                      <Rating name="size-large"
                      readOnly 
                       defaultValue={2}
                        size="small" />
                    </TableCell>
                    <TableCell>{row.year}</TableCell>
                    <TableCell align="center">{row.type}</TableCell>
                    <TableCell align="center">{row.movie}</TableCell>
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

export default MovieManagement;
