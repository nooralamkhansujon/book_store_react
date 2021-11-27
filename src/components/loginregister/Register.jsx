import React from "react";
import styles from "../../styles/Login.module.css";
import Checkbox from "@mui/material/Checkbox";
const label = { inputProps: { "aria-label": "rememeber Me" } };

function Register() {
  return (
    <div className={styles.login_body}>
      <div className={`${styles.form_group}`}>
        <label>Name</label>
        <input type="text" placeholder="Name" />
      </div>
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
        <button className={styles.button}>register</button>
      </div>
    </div>
  );
}

export default Register;
