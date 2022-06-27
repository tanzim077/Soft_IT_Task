import {
  Box,
  Button,
  Checkbox,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";

const LogInForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <Box
      sx={{
        py: 2,
        width: "90%",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Typography variant="h6" color="black">
        Login Your Account
      </Typography>
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
            <Checkbox defaultChecked />
            <Typography variant="body1" color="black">
              Remember me
            </Typography>
          </Grid>
          <Typography variant="body1" color="black">
            {" "}
            Forgot Password?
          </Typography>
        </Box>
        <Box xs={12} sx={{ display: "flex", alignItems: "center" }}>
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
        </Box>
    </Box>
      </form>
  );
};

export default LogInForm;
