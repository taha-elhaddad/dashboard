import React, { useState } from "react";
import { styled } from "@mui/material/styles";
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
  Box,
} from "@mui/material";
import {
  Grid,
  FormControl,
  FormLabel,
  FormHelperText,
  label,
  AvatarGroup,
} from "@material-ui/core";
import { width } from "@mui/system";

const commonStyles = {
    bgcolor: 'background.paper',
    m: 1,
    border: 1,
    width: '5rem',
    height: '5rem',
  };

const Ratings = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      <Container style={{ width: 1000, height: 300, backgroundColor: "red" }}>
        <Paper
          variant="outlined"
          style={{ width: 700, height: 100, backgroundColor: "blue" }}
        >
     <div style={{ display: "flex",
      justifyContent: "space-between" }}>
      <div>
<Grid Item>
<Box sx={{display: 'flex',
         justifyContent: 'center',
         border:"5",
         width:120,
         ...commonStyles, borderColor: 'primary.main'
         }}>
assds
        </Box>
</Grid>
        </div>
      <div style={{backgroundColor:'yellow',
      textAlign:'right',
      paddingTop: 20,
      paddingLeft: 100,
      width:150}}>
        <Rating name="size-small"
         defaultValue={2} size="small"
         />
        <p style={{fontSize: 12,
             textAlign:'right',
             backgroundColor:'gray',
             }}>
            هذا النص هو مثال لنص اخر هذا النص هو مثال لنص اخر     
               </p>
      </div>
      <div>
      <Grid Item style={{  }}>
        <Avatar src="/broken-image.jpg"
        sx={{ width: 70, height: 70 }}
        />
        <p style={{ margin: 0 }}>
            أسم المستخدم
            </p>
      </Grid>
        </div>
    </div>

        </Paper>
      </Container>
    </div>
  );
};

export default Ratings;
