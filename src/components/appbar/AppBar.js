import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import { useState, useContext } from "react";

import { DataContext } from "../../context/DataProvider";

// Login Dialog page
import LoginDialog from "../../pages/Login/loginDialog";
import Profile from "../../pages/Login/Profile";

export default function ButtonAppBar() {
  const [open, setOpen] = useState(false);
  

  const { account, setAccount } = useContext(DataContext);

  const openDialog = () => {
    setOpen(true);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative" style={{ background: "white" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>

          <Typography
            color={"black"}
            fontSize={36}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            spendWise
          </Typography>

          {account ? (
              <Button
              style={{ marginRight: 60}}
              variant="contained"
            >
              <Profile account={account} setAccount={setAccount}/>
            </Button>
          ) : (
            <Button
              style={{ marginRight: 60 }}
              variant="contained"
              color="primary"
              onClick={openDialog}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <LoginDialog open={open} setOpen={setOpen} />
    </Box>
  );
}
