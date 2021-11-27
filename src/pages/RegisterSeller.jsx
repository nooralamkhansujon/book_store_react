import React from "react";
import Container from "@mui/material/Container";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import styles from "../styles/Seller.module.css";
import Select from "@mui/material/Select";
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
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Select Category</MenuItem>
              </Select>
            </div>
            <div className={`${styles.rememberMe}`}>
              <Checkbox
                {...label}
                onClick={(e) => setStatus(e.target.value)}
                sx={{
                  color: "#ec619f",
                  "&.Mui-checked": {
                    color: "#ec619f",
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
