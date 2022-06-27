import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40vh;
  width: 100%;
  text-align: center;
  padding: 0rem;
  background-image: url("https://uploads-ssl.webflow.com/5fb638ef16441f801761b4e1/5fb79efce3311363bce16f91_SUITS-TITLE.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0px 0px 10px rgba(31, 30, 120, 0.37);
  margin: 0, 0;
`;

const Banner = () => {
  return (
    <BannerContainer>
      <Box>
        <Typography variant="h1" color="white">
          My Account
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h5" color="white">
          Home
          </Typography>
            <DoubleArrowIcon sx={{color : "white"}} />
          </Box>

          <Typography variant="h5" color="red">
            My Account
          </Typography>
        </Box>
      </Box>
    </BannerContainer>
  );
};

export default Banner;
