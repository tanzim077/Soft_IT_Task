import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PinterestIcon from "@mui/icons-material/Pinterest";
import RedditIcon from "@mui/icons-material/Reddit";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import americanExpress from "../../assets/images/american-express.png";
import applePay from "../../assets/images/apple-pay.png";
import masterCard from "../../assets/images/mastercard.png";
import payPal from "../../assets/images/paypal.png";
import visaCard from "../../assets/images/visa.png";

const style = {
  height: "content",
  textAlign: "center",
  backgroundColor: "#222222",
  color: "white",
};
const Footer = () => {
  return (
    <Grid container sx={{ pt: 4 }}>
      <Grid items xs={12} sm={12} md={12} lg={12}>
        <Grid
          container
          spacing={{ xs: 2, md: 0 }}
          style={style}
          sx={{ display: "flex", p: 4, justifyContent: "center", gap: 0 }}
        >
          <Grid
            items
            xs={6}
            md={3}
            lg={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Box>
              <ShoppingCartIcon />
            </Box>
            <Box>
              <Typography variant="body1" color="white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" color="white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Typography>
            </Box>
          </Grid>

          <Grid
            items
            xs={6}
            md={3}
            lg={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <Box>
              <Typography
                sx={{ textAlign: "left" }}
                variant="body1"
                color="white"
              >
                Contact Us
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box sx={{ display: "flex", gap: 2 }}>
                <AddLocationAltIcon />
                <Typography variant="body1" color="white">
                  12/3, Road no : 7, Sector : 1, Dhaka
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <LocalPhoneIcon />
                <Typography variant="body1" color="white">
                  +09340-2934, 098324, 809320
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <EmailIcon />
                <Typography variant="body1" color="white">
                  demo@admin.com
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <LanguageIcon />
                <Typography variant="body1" color="white">
                  www.google.com www.facebook.com
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid
            items
            xs={12}
            md={2}
            lg={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              // alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="body1" color="white">
                My Account
              </Typography>
            </Box>
            &nbsp;
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                gap: 2,
              }}
            >
              <Typography variant="body1" color="white">
                My Account
              </Typography>
              <Typography variant="body1" color="white">
                Wishlist
              </Typography>
              <Typography variant="body1" color="white">
                Shopping Cart
              </Typography>
              <Typography variant="body1" color="white">
                Compare
              </Typography>
              <Typography variant="body1" color="white">
                Checkout
              </Typography>
            </Box>
          </Grid>

          <Grid
            items
            xs={8}
            md={4}
            lg={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <Typography
              variant="body1"
              color="white"
              sx={{ textAlign: "left" }}
            >
              Signup for NewsLetter
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  sx={{
                    input: { color: "white" },
                    label: { color: "white" },
                    border: "1px solid white",
                  }}
                />
              </Box>
              <Button
                sx={{ color: "white", backgroundColor: "red", my: 1 }}
                variant="contained"
                type="submit"
              >
                Submit
              </Button>
            </Box>
            <Typography
              variant="body1"
              color="white"
              sx={{ textAlign: "left" }}
            >
              Follow Us on
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "space-around", px: 3 }}
            >
              <FacebookIcon />
              <TwitterIcon />
              <PinterestIcon />
              <LinkedInIcon />
              <RedditIcon />
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Box
          sx={{
            backgroundColor: "#555",
            display: "flex",
            justifyContent: "space-around",
            py: "10px",
          }}
        >
          <Box
            sx={{ textAlign: "center", display: "flex", alignItems: "center" }}
          >
            <Typography variant="body1" color="white">
              Copyright © 2020 All rights reserved by
            </Typography>
            &nbsp;
            <Typography variant="body1" color="red">
              E-Buy
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 2, textAlign: "center" }}>
            <img
              style={{ height: "35px", width: "35px" }}
              src={americanExpress}
              alt=""
            />
            <img
              style={{ height: "35px", width: "35px" }}
              src={masterCard}
              alt=""
            />
            <img
              style={{ height: "35px", width: "35px" }}
              src={visaCard}
              alt=""
            />
            <img
              style={{ height: "35px", width: "35px" }}
              src={payPal}
              alt=""
            />
            <img
              style={{ height: "35px", width: "35px" }}
              src={applePay}
              alt=""
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
