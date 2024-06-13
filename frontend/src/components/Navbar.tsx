import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { gql, useQuery } from "@apollo/client";

const ME = gql`
  query Me {
    me {
      id
      email
    }
  }
`;

const pages = [
  { label: "Trouver un trajet", url: "/journeys" },
  { label: "Proposer un trajet", url: "/journeys/create" },
];
const settings = [
  { label: "Mon compte", url: "account" },
  { label: "Mes trajets", url: "/account/journey" },
  { label: "Logout", url: "/" },
];

export default function Navbar() {
  const router = useRouter();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const [user, setUser] = React.useState(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { data } = useQuery(ME);

  const handleLogout = async () => {
    localStorage.removeItem("token");
  };

  return (
    <AppBar>
      <Container maxWidth="xl">
        {console.log("USER", user)}
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            GoDrive
          </Typography>
          <h1>{count}</h1>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <button onClick={() => dispatch(incrementByAmount(2))}>
            Increment by 2
          </button>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Button
                    onClick={() => router.push(`/${page.url}`)}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    <Typography textAlign="center">{page.label}</Typography>
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            GoDrive
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={() => router.push(`/${page.url}`)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Typography textAlign="center">{page.label}</Typography>
              </Button>
            ))}
          </Box>

          {data && data.me ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Ouvrir les paramètres">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
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
                <MenuItem>
                  <Typography textAlign="center" sx={{ fontWeight: "bold" }}>
                    Hello {data.me.email} !
                  </Typography>
                </MenuItem>
                <Divider />
                {settings.map((setting, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => router.push(`/${setting.url}`)}
                  >
                    <Typography textAlign="center">{setting.label}</Typography>
                  </MenuItem>
                ))}
                <Divider />
                <MenuItem onClick={handleLogout}>
                  <Typography>Log out</Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Box>
              <Link href="/login">
                <Button variant="contained">Login</Button>
              </Link>
              <Link href="/register">
                <Button variant="contained">Register</Button>
              </Link>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
