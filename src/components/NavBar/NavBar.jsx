import LocalMallIcon from "@mui/icons-material/LocalMall";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Menu, MenuItem } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const paths = ["Home", "About", "Shop", "Contact"];
  const pages = ["Login", "Register", "Create Product", "Create Category", "All Users", "All Products", "All Categories"];
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleRedirect = (page) => {
    switch (page) {
      case "Login":
        navigate("/login");
        break;
      case "Register":
        navigate("/register"); 
        break;
      case "Create Product":
        navigate("/product");
        break;
      case "Create Category":
        navigate("/category");
        break;
      case "All Users":
        navigate("/users");
        break;
      case "All Products":
        navigate("/products");
        break;
      case "All Categories":
        navigate("/categories");
        break;
      case "Home":
        navigate("/");
        break;
      default:
        break;
    }
        handleCloseUserMenu();
  }

  return (
    <Box sx={{ flexGrow: 1, boxShadow: "none" }}>
      <AppBar
        sx={{ backgroundColor: "#fff", color: "#000", boxShadow: "none" }}
        position="static"
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
          <Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            {paths.map((path) => (
              <Typography
                key={path}
                sx={{ cursor: "pointer", flexGrow: 1 }}
                onClick={() => handleRedirect(path)}
                variant="h6"
                component="div"
              >
                {path}
              </Typography>
            ))}
            <Typography
              sx={{ cursor: "pointer", flexGrow: 1 }}
              onClick={handleOpenUserMenu}
              variant="h6"
              component="div"
            >
              Pages
            </Typography>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    onClick={() => handleRedirect(page)}
                    textAlign="center"
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Box sx={{ border: 1, borderRadius: "50%", px: "1px" }}>
              <SearchIcon />
            </Box>
            <LocalMallIcon />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
