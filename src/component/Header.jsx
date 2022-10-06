import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Header() {
  const matches = !useMediaQuery('(min-width:900px)');
  const navigate = useNavigate();
  const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElMenu, setAnchorElMenu] = React.useState(null);

  const menuItemsValue = [
    { name: "Home", link: "/" },
    { name: "Explore", link: "/explore" },
    { name: "ContactUs", link: "/contact" },
  ];

  const handleMenuLogin = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseLogin = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorElMenu(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElMenu(null);
  };

  return (
    <Box sx={{ flexGrow: 1, marginBottom: "100px" }}>
      <AppBar sx={{ color: "black", background: "#eeeae6" }}>
        <Toolbar>
          <Box
            sx={{ display: matches ? "inline" : "none", color: "black" }}
          >
            <IconButton
              onClick={handleMenu}
              size="large"
              edge="start"
              color="inherit"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElMenu}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElMenu)}
              onClose={handleClose}
            >
              {menuItemsValue.map((values) => (
                <Link
                  style={{ textDecoration: "none" }}
                  to={values.link}
                  key={values.name}
                >
                  <MenuItem onClick={handleClose} sx={{ color: "black" }}>
                    {values.name}
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <IconButton size="large" color="inherit" sx={{ mr: 2 }}>
            <img
              src="/images/company-Logo.png"
              style={{ height: "50px", width: "50px", borderRadius: "50%" }}
              alt="company-logo"
            />
          </IconButton>

          {menuItemsValue.map((values) => (
            <Link
              style={{ textDecoration: "none" }}
              to={values.link}
              key={values.name}
            >
              <MenuItem
                sx={{
                  display: matches ? "none" : "inline",
                  color: "black",
                }}
              >
                {values.name}
              </MenuItem>
            </Link>
          ))}

          {!auth && (
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={2}
              sx={{ width: "100%" }}
            >
              <Box>
                <Link to={`/login`} style={{ textDecoration: "none" }}>
                  <Button sx={{ color: "black" }} color="inherit">
                    Login
                  </Button>
                </Link>
                <Link to={`/login`} style={{ textDecoration: "none" }}>
                  <Button
                    sx={{
                      marginLeft: "10px",
                      color: "white",
                      backgroundColor: "#000000d1",
                      "&:hover": {
                        backgroundColor: "black",
                      },
                    }}
                    variant="contained"
                  >
                    Sign up
                  </Button>
                </Link>
              </Box>
            </Stack>
          )}
          {auth && (
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={2}
              sx={{ width: "100%" }}
            >
              <IconButton
                size="large"
                onClick={handleMenuLogin}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleCloseLogin}
              >
                <MenuItem
                  onClick={() => {
                    navigate("/dashboard");
                    handleCloseLogin();
                  }}
                >
                  Go To DashBoard
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setTimeout(() => {
                      setAuth(false);
                      setAnchorEl(null);
                      navigate("/");
                      handleCloseLogin();
                    }, 1000);
                  }}
                >
                  Log out
                </MenuItem>
              </Menu>
            </Stack>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
