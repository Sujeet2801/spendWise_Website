import React from "react";
import { useState, useContext } from "react";
import { authenticateSignup, authenticateLogin } from "../../service/api";
import { DataContext } from "../../context/DataProvider";
import {Box,Button,Dialog,TextField,Typography,styled} from "@mui/material";
import { useNavigate } from "react-router-dom";

import Logo from "../../components/image/logo1.png";

const Component = styled(Box)`
  height: 87vh;
  width: 105vh;
`;

const Image = styled(Box)`
  background: blueviolet;
  height: 100%;
  width: 40%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: #ffffff;
    font-weight: 600;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
  width: 300px;
  flex = 1;
  & > div,
  & > button {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #f06418;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

// const RequestOTP = styled(Button)`
//   text-transform: none;
//   background: #fff;
//   color: #2874f0;
//   height: 48px;
//   border-radius: 2px;
//   box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
// `;

const Text = styled(Typography)`
  margin-top: 10px;
  font-size: 12px;
  color: #878787;
`;

const Createaccount = styled(Typography)`
  font-size: 16px;
  text-align: center;
  color: blueviolet;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

const accountIntialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Track your expenses with spendWise and achieve your financial goals",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subHeading: "Sign up with spendWise",
  },
};

const signupIntialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
  mode: "signup", // field for sign-up
};

const loginIntialValues = {
  username: "",
  password: "",
  mode: "login", // field for login
};

const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountIntialValues.login);
  const [signup, setSignup] = useState(signupIntialValues);
  const [login, setLogin] = useState(loginIntialValues);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const { setAccount } = useContext(DataContext);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountIntialValues.login);
    setError(false);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const toggleSignup = () => {
    toggleAccount(accountIntialValues.signup);
  };

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    if (!response) return;
    handleClose();
    setAccount(signup.firstname);

    navigate("/dashboard");
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const registerUser = async () => {
    let response = await authenticateLogin(login);
    console.log(response);
    if (response.status === 200) {
      handleClose();
      setAccount(response.data.data.firstname);
    } else {
      // show error
      setError(true);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>
              {account.subHeading}
            </Typography>
            <img
              style={{ width: 174, height: "auto", marginTop: 140 }}
              src={Logo}
              alt=""
            />
          </Image>

          {account.view === "login" ? (
            <Wrapper>
              <TextField
                variant="standard"
                label="Enter Username"
                name="username"
                onChange={(e) => onValueChange(e)}
              />
              {error && <Error>Please enter valid username or password</Error>}
              <TextField
                variant="standard"
                label="Enter Password"
                name="password"
                onChange={(e) => onValueChange(e)}
              />

              <Text>
                Note: Remember your username for saving all your expenses
              </Text>

              <LoginButton onClick={() => registerUser()}>Login</LoginButton>

              <Typography style={{ textAlign: "center", marginTop: 12 }}>OR</Typography>
              {/* <RequestOTP>Request OTP</RequestOTP> */}

              <Createaccount onClick={() => toggleSignup()}>
                New here? Create an account
              </Createaccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="firstname"
                label="First Name"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="lastname"
                label="Last Name"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="username"
                label="Username"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="email"
                label="Enter Email"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="password"
                label="Enter Password"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="phone"
                label="Enter Phone"
              />

              <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
