import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Container from "@mui/material/Container";

import styles from "../styles/Login.module.css";
function LoginRegister() {
  return (
    <div>
      <Container>
        <div className={`${styles.login_components}`}>
          <div className={styles.login_header}>
            <NavLink
              className={(navInfo) =>
                navInfo.isActive
                  ? `${styles.active} ${styles.title}`
                  : `${styles.title}`
              }
              style={{ marginLeft: "10px" }}
              to="login"
            >
              Login
            </NavLink>

            <NavLink
              className={(navInfo) =>
                navInfo.isActive
                  ? `${styles.active} ${styles.title}`
                  : `${styles.title}`
              }
              style={{ marginLeft: "10px" }}
              to="register"
            >
              Register
            </NavLink>
          </div>
          <Outlet />
        </div>
      </Container>
    </div>
  );
}

export default LoginRegister;
