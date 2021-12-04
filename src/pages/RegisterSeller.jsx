import React, { useEffect } from "react";
import {
  RadioGroup,
  Container,
  Select,
  Checkbox,
  Typography,
  Radio,
  FormControlLabel,
} from "@mui/material";
import styles from "../styles/Seller.module.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
const label = { inputProps: { "aria-label": "Register Seller" } };

function RegisterSeller() {
  const [category, setCategory] = React.useState();
  const [authorName, setAuthorName] = React.useState();
  const [bookName, setBookName] = React.useState();
  const [price, setPrice] = React.useState();
  const [image, setImage] = React.useState();
  const [status, setStatus] = React.useState();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  function handleImage(e) {
    setImage(e.target.files[0]);
  }
  return (
    <div>
      <Container>
        <div className={`${styles.seller_components}`}>
          <div className={styles.seller_header}>
            <Typography
              className={styles.title}
              style={{ marginLeft: "10px" }}
              to="register"
            >
              Register As A Seller
            </Typography>
          </div>
          {/* form content  */}
          <div className={styles.login_body}>
            <div className={`${styles.form_group}`}>
              <label>Book Name</label>
              <input
                type="text"
                onChange={(e) => setBookName(e.target.value)}
                placeholder="Book Name"
              />
            </div>
            <div className={`${styles.form_group}`}>
              <label>Author Name</label>
              <input
                type="text"
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder="Author Name"
              />
            </div>
            <div className={`${styles.form_group}`}>
              <label>Book Price</label>
              <input
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Book Price"
              />
            </div>
            <div className={`${styles.form_group}`}>
              <label>Book Image</label>
              <input type="file" onChange={handleImage} />
            </div>
            <div className={`${styles.form_group_radio} py-3`}>
              <label>Book Seller Type</label>
              <div className={`${styles.radio_box_container}`}>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="None"
                    control={<Radio />}
                    label="None"
                  />
                  <FormControlLabel
                    value="Borrow"
                    control={<Radio />}
                    label="Borrow"
                  />
                  <FormControlLabel
                    value="GiveWay"
                    control={<Radio />}
                    label="GiveWay"
                  />
                </RadioGroup>
              </div>
            </div>
            <div className={`${styles.form_group}`}>
              <InputLabel id="demo-simple-select-standard-label">
                Select Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                className={styles.selectBox}
                onChange={(event) => setCategory(event.target.value)}
                label="Category"
                autoWidth
                defaultValue={""}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="academic">Academic</MenuItem>
                <MenuItem value="medical">Medical</MenuItem>
                <MenuItem value="engineering">Engineering</MenuItem>
                <MenuItem value="school_collage">School/Collage</MenuItem>
                <MenuItem value="novel">Novel</MenuItem>
              </Select>
            </div>
            <div className={`${styles.rememberMe}`}>
              <Checkbox
                {...label}
                onClick={(e) => setStatus(e.target.value)}
                sx={{
                  color: "rgba(47, 23, 147)",
                  "&.Mui-checked": {
                    color: "rgba(47, 23, 147)",
                  },
                }}
              />
              <label>Status</label>
            </div>
            <div className={`${styles.form_group}`}>
              <button className={styles.button}>Register As Seller</button>
            </div>
          </div>
          {/* end of form content  */}
        </div>
      </Container>
    </div>
  );
}

export default RegisterSeller;
