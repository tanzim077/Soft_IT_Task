import { Grid } from "@mui/material";
import LogInForm from "./LogInForm/LogInForm";

const LogIn = () => {
  return (
    <Grid
      container
      spacing={3}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Grid item xs={10} md={6}>
        <LogInForm />
      </Grid>
    </Grid>
  );
};

export default LogIn;
