import React, { useState } from "react";
import {
  Paper,
  Container,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Avatar,
  Stack,
  Rating,
  
} from "@mui/material";
import {
  Grid,
  FormControl,
  FormLabel,
  FormHelperText,
  label,
  AvatarGroup,
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

const MovieDetails = () => {
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
                    {/* This is movie name Filed of Login */}
                    <TextField
                      type="text"
                      fullWidth
                      label="movie name"
                      size="small"
                      placeholder=" the GodFather"
                      variant="outlined"
                      margin="dense"
                    />
                  </Grid>
                  <Grid item>
                    {/* This is movie type Filed of Login */}
                    <TextField
                      type="text"
                      fullWidth
                      label="movie type"
                      size="small"
                      placeholder="Action"
                      variant="outlined"
                      margin="dense"
                    />
                  </Grid>
                  {/* This is year Filed of Login */}
                  <Grid item>
                    <TextField
                      type="text"
                      fullWidth
                      label="year"
                      size="small"
                      placeholder="1980"
                      variant="outlined"
                      margin="dense"
                    />
                  </Grid>
                  <Grid item>
                  <Rating name="size-large"
                       defaultValue={4}
                        size="large" />
                    <label>التقييم</label>
                  </Grid>
                </form>
              </Grid>
            </Item>
          </Grid>
        </Grid>
        <Grid lg={12} sx={12} sm={12} item  spacing={2} style={{backgroundColor:'yellowgreen'}}>
            <Paper elevation={3}
             variant="outlined"
             
             style={{textAlign:'right'}}>
                <h3>
                    نبذه عن الفلم
                    </h3>
                    <h4>Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.</h4>
            </Paper>
        </Grid>
        <Grid lg={12} sx={12} sm={12} item  spacing={2} style={{backgroundColor:'yellowgreen'}}>
            <Paper elevation={3}
             variant="outlined"
             style={{textAlign:'center',
             }}>
              <Grid style={{display: "flex", justifyContent: "space-between"}}>
   <Button item variant="contained"
    style={{width:140, height:50}}>أضافة</Button>
   <h3>الممثلين</h3>

              </Grid>
   <Stack direction="row" spacing={2} >
      <Grid Item style={{ textAlign: "center" }}>
        <Avatar src="/broken-image.jpg"
        sx={{ width: 100, height: 100 }}
        />
        <h3 style={{ textAlign: "center", margin: 0 }}>اسم الممثل</h3>
        <p style={{ textAlign: "center", margin: 0 }}>(دورة)</p>
      </Grid>
      <Grid Item style={{ textAlign: "center" }}>
        <Avatar src="/broken-image.jpg"
        sx={{ width: 100, height: 100 }}
        />
        <h3 style={{ textAlign: "center", margin: 0 }}>اسم الممثل</h3>
        <p style={{ textAlign: "center", margin: 0 }}>(دورة)</p>
      </Grid>
      <Grid Item style={{ textAlign: "center" }}>
        <Avatar src="/broken-image.jpg"
        sx={{ width: 100, height: 100 }}
        />
        <h3 style={{ textAlign: "center", margin: 0 }}>اسم الممثل</h3>
        <p style={{ textAlign: "center", margin: 0 }}>(دورة)</p>
      </Grid>
      <Grid Item style={{ textAlign: "center" }}>
        <Avatar src="/broken-image.jpg"
        sx={{ width: 100, height: 100 }}
        />
        <h3 style={{ textAlign: "center", margin: 0 }}>اسم الممثل</h3>
        <p style={{ textAlign: "center", margin: 0 }}>(دورة)</p>
      </Grid>
      <Grid Item style={{ textAlign: "center" }}>
        <Avatar src="/broken-image.jpg"
        sx={{ width: 100, height: 100 }}
        />
        <h3 style={{ textAlign: "center", margin: 0 }}>اسم الممثل</h3>
        <p style={{ textAlign: "center", margin: 0 }}>(دورة)</p>
      </Grid>
      <Grid Item style={{ textAlign: "center" }}>
        <Avatar src="/broken-image.jpg"
        sx={{ width: 100, height: 100 }}
        />
        <h3 style={{ textAlign: "center", margin: 0 }}>اسم الممثل</h3>
        <p style={{ textAlign: "center", margin: 0 }}>(دورة)</p>
      </Grid>
      <Grid Item style={{ textAlign: "center" }}>
        <Avatar src="/broken-image.jpg"
        sx={{ width: 100, height: 100 }}
        />
        <h3 style={{ textAlign: "center", margin: 0 }}>اسم الممثل</h3>
        <p style={{ textAlign: "center", margin: 0 }}>(دورة)</p>
      </Grid>
      <Grid Item style={{ textAlign: "center" }}>
        <Avatar src="/broken-image.jpg"
        sx={{ width: 100, height: 100 }}
        />
        <h3 style={{ textAlign: "center", margin: 0 }}>اسم الممثل</h3>
        <p style={{ textAlign: "center", margin: 0 }}>(دورة)</p>
      </Grid>
      <Grid Item style={{ textAlign: "center" }}>
        <Avatar src="/broken-image.jpg"
        sx={{ width: 100, height: 100 }}
        />
        <h3 style={{ textAlign: "center", margin: 0 }}>اسم الممثل</h3>
        <p style={{ textAlign: "center", margin: 0 }}>(دورة)</p>
      </Grid>
      <Grid Item style={{ textAlign: "center" }}>
        <Avatar src="/broken-image.jpg"
        sx={{ width: 100, height: 100 }}
        />
        <h3 style={{ textAlign: "center", margin: 0 }}>اسم الممثل</h3>
        <p style={{ textAlign: "center", margin: 0 }}>(دورة)</p>
      </Grid>
      <Grid Item style={{ textAlign: "center" }}>
        <Avatar src="/broken-image.jpg"
        sx={{ width: 100, height: 100 }}
        />
        <h3 style={{ textAlign: "center", margin: 0 }}>اسم الممثل</h3>
        <p style={{ textAlign: "center", margin: 0 }}>(دورة)</p>
      </Grid>
    </Stack>
            
            </Paper>
        </Grid>

        <Grid lg={12} item container spacing={2}>
          <Stack direction="row">
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
            عرض التقييمات
          </Button>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default MovieDetails;
