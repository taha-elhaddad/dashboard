import React, { useState } from "react";
import {
  Paper,
  Container,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Avatar,
} from "@mui/material";
import {
  Grid,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@material-ui/core";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import { useForm } from "react-hook-form";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const UserDetails = () => {
  const [type, setType] = React.useState("");

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <div>
      <br></br>
      <Grid item style={{ textAlign: "right", color: "white" }}>
            <h1 style={{ backgroundColor: "blue" }}>User Details</h1>
          </Grid>
      <Grid lg={12} item container spacing={2}>
        <Grid
          container
          lg={11}
          xs={8}
          sm={11}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ backgroundColor: "red" }}
        >

          {/*User Details  */}
          <Grid item lg={6} xs={6} sm={4} style={{ display: "flex" }}>
            <Item style={{ backgroundColor: "blue" }}>
              <Avatar
                style={{
                  backgroundColor: "yellow",
                  flexDirection: "flex-start",
                }}
                sx={{ width: 200, height: 200 }}
              >
                H
              </Avatar>

              <Button variant="contained" component="label">
                رفع صورة
                <input hidden accept="image/*" multiple type="file" />
              </Button>
            </Item>
            <Item></Item>
          </Grid>
          {/* Image and Uploading */}
          <Grid item lg={6} xs={4} sm={8}>
            <Item>
              <Grid Container direction={"column"} spacing={2}>
                <form>
                  <Grid item>
                    {/* This is Email Filed of Login */}
                    <TextField
                      type="text"
                      fullWidth
                      label="username"
                      size="small"
                      placeholder="Said"
                      variant="outlined"
                      margin="dense"
                    />
                  </Grid>
                  <Grid item>
                    {/* This is Email Filed of Login */}
                    <TextField
                      type="email"
                      fullWidth
                      label="Email"
                      size="small"
                      placeholder="user@gmail.com"
                      variant="outlined"
                      margin="dense"
                    />
                  </Grid>
                  {/* This is age Filed of Login */}
                  <Grid item>
                    <TextField
                      type="text"
                      fullWidth
                      label="Age"
                      size="small"
                      placeholder="23"
                      variant="outlined"
                      margin="dense"
                    />
                  </Grid>
                  <Grid item>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Movie Type
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={type}
                        label="Type"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Action</MenuItem>
                        <MenuItem value={20}>Drama</MenuItem>
                      </Select>
                    </FormControl>
                    <Button variant="contained">تاكيد</Button>
                    <Grid>

                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Item>
          </Grid>
        </Grid>

        <Grid lg={12} item container spacing={2}>
          <Button
            variant="contained"
            style={{
              marginTop: ".5rem",
              marginLeft: ".5rem",
              maxWidth: "30px",
              maxHeight: "30px",
              minWidth: "200px",
              minHeight: "40px",
            }}
          >
            تاكيد
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserDetails;
