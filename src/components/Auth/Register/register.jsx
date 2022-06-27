import { Grid } from "@mui/material";
import RegisterForm from "./RegisterForm/RegisterForm";

const Register = () => {
  return (
    <Grid
      container
      spacing={3}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Grid item xs={12} md={6}>
        <RegisterForm></RegisterForm>
      </Grid>
    </Grid>
  );
};

export default Register;
