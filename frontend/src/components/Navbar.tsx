import * as React from "react";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Divider,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/providers/AuthProvider";

const pages = [
  { label: "Trouver un trajet", url: "/trips" },
  { label: "Proposer un trajet", url: "/trips/create" },
];
const settings = [
  { label: "Mon compte", url: "account" },
  { label: "Mes trajets", url: "/account/journey" },
];

export default function Navbar() {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

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

  const { me, isLoggedIn, signOut } = React.useContext(AuthContext);

  return (
    <AppBar sx={{ bgcolor: "#114360" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            GoD
          </Typography>
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
              color: "#54F49A",
              textDecoration: "none",
            }}
          >
            rive
          </Typography>
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
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: "flex", md: "none" },

              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            GoD
          </Typography>
          <Typography
            variant="h4"
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
              color: "#54F49A",
              textDecoration: "none",
            }}
          >
            rive
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "end",
            }}
          >
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={() => router.push(`/${page.url}`)}
                sx={{
                  my: 2,
                  mx: "5 rem",
                  color: "white",
                  display: "block",
                }}
              >
                <Typography textAlign="center">{page.label}</Typography>
              </Button>
            ))}
          </Box>

          {isLoggedIn && me ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Ouvrir les paramètres">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={me.email}
                    src={
                      "https://www.fakepersongenerator.com/Face/male/male20151083651693268.jpg"
                    }
                  />
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
                    Hello {me.firstname !== "" ? me.firstname : me.email} !
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
                <MenuItem onClick={() => signOut()}>
                  <Typography>Se déconnecter</Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Box sx={{ marginLeft: "5px" }}>
              <Link href="/login">
                <Button variant="contained">Se connecter</Button>
              </Link>
              <Link href="/register">
                <Button variant="contained">S&apos;inscrire</Button>
              </Link>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
