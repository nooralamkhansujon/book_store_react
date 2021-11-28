import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { NavLink, Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import MaterialLink from "@mui/material/Link";
import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// icons import
import DehazeIcon from "@mui/icons-material/Dehaze";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import AccountCircleSharp from "@mui/icons-material/AccountCircleSharp";
import LoginIcon from "@mui/icons-material/Login";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import styles from "../styles/Header.module.css";
function Header() {
  const [anchorEl, setsetAnchorEl] = useState(false);
  const [openBar, setOpenBar] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setsetAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setsetAnchorEl(null);
  };
  const handleBarClick = (event) => {
    setOpenBar(!openBar);
  };
  const handleBarClose = () => {
    setOpenBar(false);
  };

  return (
    <div>
      <AppBar position="fixed" className={styles.appHeaderSection}>
        <Grid container>
          <Grid md={3} item>
            <Toolbar className={styles.logo_text}>Book Stores</Toolbar>
          </Grid>
          <Grid md={6} item>
            <Container>
              <div className={styles.search}>
                {/* <FormControl variant="standard"> */}
                <Input
                  id="input-with-icon-adornment"
                  className={styles.searchInput}
                  startAdornment={
                    <InputAdornment position="start">
                      <SearchIcon className={styles.iconColor} />
                    </InputAdornment>
                  }
                  placeholder="Search Books"
                />
                {/* </FormControl> */}
              </div>
            </Container>
          </Grid>
          {/* profile and cart icons  */}
          <Grid md={2} item className={styles.flexboxend}>
            {/* profile nav  */}
            <Button
              className={styles.iconColor}
              id="basic-button"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <AccountCircleSharp style={{ fontSize: 30 }} />{" "}
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <Link style={{ textDecoration: "none" }} to="/profile">
                  My Account
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>My Orders</MenuItem>
              <MenuItem onClick={handleClose}>My List</MenuItem>
              <MenuItem onClick={handleClose}>My Point</MenuItem>
              <MenuItem onClick={handleClose}>Review</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
            {/* end of profile nav  */}
            <NavLink to="/cart">
              <Badge badgeContent={4} color="primary">
                <ShoppingCartSharpIcon
                  className={styles.cart}
                  style={{ fontSize: 30 }}
                  color="action"
                />
              </Badge>
            </NavLink>{" "}
            <NavLink to="/login-register">
              <LoginIcon
                className={styles.cart}
                style={{ fontSize: 30 }}
                color="action"
              />
            </NavLink>
          </Grid>
        </Grid>

        <Grid container className={styles.header_section}>
          <Grid md={4} item className={styles.barContainer}>
            <Button
              className={`${styles.iconColor} iconBar`}
              id="basic-button"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={openBar ? "true" : undefined}
              onClick={handleBarClick}
            >
              <DehazeIcon style={{ fontSize: 40 }} />
            </Button>
            <ul
              id="basic-menu"
              className={`${openBar ? styles.showBasicMenu : styles.basicMenu}`}
            >
              <li className={styles.title}>Categories</li>
              <li
                onClick={handleBarClose}
                className={`${styles.submenuContainer}`}
              >
                <Link
                  to="books/academic"
                  className={`${styles.flexboxBetween}`}
                >
                  Academic <ChevronRightIcon />
                </Link>
                <div className={styles.submenu}>
                  <Link to="books/academic" onClick={handleBarClose}>
                    Medical
                  </Link>
                </div>
              </li>
              <li
                onClick={handleBarClose}
                className={`${styles.submenuContainer}`}
              >
                <Link
                  to="books/academic"
                  className={`${styles.flexboxBetween}`}
                >
                  Medical <ChevronRightIcon />
                </Link>
                <div className={styles.submenu}>
                  <Link to="books/academic" onClick={handleBarClose}>
                    Medical
                  </Link>
                </div>
              </li>
              <li
                onClick={handleBarClose}
                className={`${styles.submenuContainer}`}
              >
                <Link
                  to="books/academic"
                  className={`${styles.flexboxBetween}`}
                >
                  Engineering <ChevronRightIcon />
                </Link>
                <div className={styles.submenu}>
                  <Link to="books/academic" onClick={handleBarClose}>
                    Medical
                  </Link>
                </div>
              </li>
              <li
                onClick={handleBarClose}
                className={`${styles.submenuContainer}`}
              >
                <Link to="books/medical" className={`${styles.flexboxBetween}`}>
                  school/Collage <ChevronRightIcon />
                </Link>
                <div className={styles.submenu}>
                  <Link to="books/schoolcollage" onClick={handleBarClose}>
                    Medical
                  </Link>
                </div>
              </li>
              <li
                onClick={handleBarClose}
                className={`${styles.submenuContainer}`}
              >
                <Link to="books/novel" className={`${styles.flexboxBetween}`}>
                  Novel <ChevronRightIcon />
                </Link>
                <div className={styles.submenu}>
                  <Link to="books/novel" onClick={handleBarClose}>
                    Bangla
                  </Link>
                  <Link to="books/novel" onClick={handleBarClose}>
                    English
                  </Link>
                </div>
              </li>
              <li
                onClick={handleBarClose}
                className={`${styles.submenuContainer}`}
              >
                <Link to="books/novel" className={`${styles.flexboxBetween}`}>
                  Novel <ChevronRightIcon />
                </Link>
                <div className={styles.submenu}>
                  <Link to="books/novel" onClick={handleBarClose}>
                    Bangla
                  </Link>
                  <Link to="books/novel" onClick={handleBarClose}>
                    English
                  </Link>
                </div>
              </li>
            </ul>
          </Grid>
          <Grid md={6} item>
            <div className={styles.navLinks}>
              <NavLink
                className={(navInfo) =>
                  navInfo.isActive ? `${styles.activeNav}` : ""
                }
                to="/"
              >
                Home
              </NavLink>
              {/* <NavLink
                className={(navInfo) =>
                  navInfo.isActive ? `${styles.activeNav}` : ""
                }
                to="/"
              >
                Buy{" "}
              </NavLink> */}
              <NavLink
                className={(navInfo) =>
                  navInfo.isActive ? `${styles.activeNav}` : ""
                }
                to="/register-seller"
              >
                Sell{" "}
              </NavLink>
              <NavLink
                className={(navInfo) =>
                  navInfo.isActive ? `${styles.activeNav}` : ""
                }
                to="/"
              >
                Newly Add{" "}
              </NavLink>
              <NavLink
                className={(navInfo) =>
                  navInfo.isActive ? `${styles.activeNav}` : ""
                }
                to="/"
              >
                Give Away{" "}
              </NavLink>
              {/* <NavLink
                className={(navInfo) =>
                  navInfo.isActive ? `${styles.activeNav}` : ""
                }
                to="/"
              >
                Recomendation{" "}
              </NavLink> */}
            </div>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
}

export default Header;
