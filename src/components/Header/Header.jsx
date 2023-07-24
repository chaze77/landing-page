import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";
import logo from "../../assets/logo_odigital.png";
import { navItems } from "./constants";
import styles from "./styles.module.css";
import { StyledContainer } from "../../globalstyle/GlobalTheme";

const drawerWidth = 240;

function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} className={styles.ListItemButton}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton className={styles.ListItemButton}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <header>
      <StyledContainer fixed>
        <Box className={styles.headerBox}>
          <Toolbar className={styles.toolbar}>
            <Box className={styles.navLogo}>
              <img src={logo} alt="" />
            </Box>

            <Box
              className={styles.buttonsContainer}
              sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}
            >
              {navItems.map((item) => (
                <Button
                  key={item}
                  className={
                    item === "+996 700 453 456"
                      ? styles.buttonItemsBold
                      : styles.buttonItems
                  }
                >
                  {item}{" "}
                </Button>
              ))}
            </Box>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none" } }}
            >
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
          </Toolbar>
        </Box>

        <Box component="main" sx={{ p: 3 }}>
          <Box component="nav">
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              anchor="right"
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                  color: "black",
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
        </Box>
      </StyledContainer>
    </header>
  );
}

export default Header;
