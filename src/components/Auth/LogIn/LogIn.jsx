import {
  Box,
  Button,
  Checkbox,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import LogInForm from "./LogInForm/LogInForm";

const LogInContainer = styled.div`
  display: flex;
  padding :5% 30%;
  margin : 10%
  height: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
  `

const LogIn = () => {

  return (
    <LogInContainer>
      <LogInForm />
    </LogInContainer>
  );
};

export default LogIn;
