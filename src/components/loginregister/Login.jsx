import React from "react";
import Checkbox from "@mui/material/Checkbox";
import styles from "../../styles/Login.module.css";
const label = { inputProps: { "aria-label": "rememeber Me" } };
function Login() {
  return (
    <div className={styles.login_body}>
      <div className={`${styles.form_group}`}>
        <label>Email</label>
        <input type="text" placeholder="Email" />
      </div>
      <div className={`${styles.form_group}`}>
        <label>Password</label>
        <input type="password" placeholder="Password" />
      </div>
      <div className={`${styles.rememberMe}`}>
        <Checkbox
          {...label}
          sx={{
            color: "#ec619f",
            "&.Mui-checked": {
              color: "#ec619f",
            },
          }}
        />
        <label>Remember Me</label>
      </div>
      <div className={`${styles.form_group}`}>
        <button className={styles.button}>Login</button>
      </div>
    </div>
  );
}

export default Login;
