import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
      const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    
    return (
      <Box
        sx={{
          padding: 3,
        //   px: "40px",
          width: "90%",    
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Typography variant="h6" color="black">
            Register Now
          </Typography>
          <Typography variant="h6" color="gray">
            (If you don't have any account)
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              {...register("name")}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              {...register("email")}
            />
          </Grid>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              {...register("password")}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="confirmedPassword"
              label="Confirm Password"
              type="password"
              id="confirmedPassword"
              {...register("confirmedPassword")}
            />
          </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
            <Checkbox defaultChecked />
            <Typography variant="body2" color="gray">
              I accept all the terms and conditions including the privacy policy
            </Typography>
          </Grid>
        </Box>
        <Box xs={12} sx={{ display: "flex", alignItems: "center" }}>
          <Button variant="contained" color="primary" type="submit">
            Register
          </Button>
        </Box>
      </Box>
    );
};

export default RegisterForm;