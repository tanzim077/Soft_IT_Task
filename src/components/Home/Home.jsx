import { Grid } from "@mui/material";
import AdBanner from "../AdBanner/AdBanner";
import LogInForm from "../Auth/LogIn/LogInForm/LogInForm";
import RegisterForm from "../Auth/Register/RegisterForm/RegisterForm";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <>
      <Banner />
      {/* <Box sx={{ display: "flex", justifyContent: "center", px: "4%" }}> */}
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center", px: "4%" }}
      >
        <Grid item xs={12} md={6}>
          <LogInForm />
        </Grid>
        <Grid item xs={12} md={6}>
          <RegisterForm />
        </Grid>
      </Grid>
      {/* </Box> */}
      <AdBanner />
    </>
  );
};

export default Home;
