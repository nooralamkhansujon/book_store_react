import React from "react";
import {
  FormControlLabel,
  Card,
  Typography,
  RadioGroup,
  Radio,
} from "@mui/material";
import styles from "../../styles/Profile.module.css";

function Account() {
  return (
    <Card className={styles.profile_content_box}>
      <div className={styles.card_header}>
        <Typography variant="h5">Personal Information </Typography>
        <button className={styles.change_info}>change Information</button>
      </div>
      <div className={styles.card_body}>
        <form>
          <div className={styles.form_group}>
            <label>Name</label>
            <input type="text" placeholder="profile Name" />
          </div>
          <div className={styles.form_group}>
            <label>Your Date of Birth</label>
            <input type="date" />
          </div>
          <div className={styles.form_group}>
            <label>Gender</label>
            <RadioGroup
              aria-label="gender"
              defaultValue="female"
              name="radio-buttons-group"
              className={styles.radio_group}
              row
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </div>
        </form>
      </div>
    </Card>
  );
}

export default Account;
