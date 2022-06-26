import styled from "styled-components";
import RegisterForm from "./RegisterForm/RegisterForm";
const RegisterContainer = styled.div`
  display: flex;
  padding :5% 30%;
  margin : 10%
  height: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
  `;
const Register = () => {
  return (
    <RegisterContainer>
      <RegisterForm></RegisterForm>
    </RegisterContainer>
  );
};

export default Register;
