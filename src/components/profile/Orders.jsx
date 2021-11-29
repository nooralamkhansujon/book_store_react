import React from "react";
import {
  FormControlLabel,
  Card,
  MenuItem,
  Typography,
  RadioGroup,
  Select,
  Radio,
  InputLabel,
  FormControl,
  Box,
} from "@mui/material";
import styles from "../../styles/Profile.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
function Orders() {
  const [search, setSearch] = React.useState("");
  function handleChange(event) {
    setSearch(event.target.value);
  }
  return (
    <Card className={styles.profile_content_box}>
      <div className={styles.card_header}>
        <div className={styles.cart_header__left}>
          <Typography variant="h5">My Orders</Typography>
          <p>
            Your Total Orders: <span className={styles.total_orders}>0</span>
          </p>
        </div>
        <div className={styles.cart_header_right}>
          <div className={styles.searchOrder_section}>
            <p>Status: </p>
            <Box sx={{ minWidth: 140 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={search}
                  label="Search"
                  onChange={handleChange}
                  defaultValue={""}
                >
                  <MenuItem value="">Select Any</MenuItem>
                  <MenuItem value="processing">Processing</MenuItem>
                  <MenuItem value="approved">Approved</MenuItem>
                  <MenuItem value="on_shipping">On Shipping</MenuItem>
                  <MenuItem value="shipped">shipped</MenuItem>
                  <MenuItem value="completed">Completed</MenuItem>
                  <MenuItem value="cancelled">Cancelled</MenuItem>
                  <MenuItem value="returned">Returned</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <button className={styles.change_info}>Submit</button>
        </div>
      </div>
      <div className={styles.card_body}>
        <Card>
          <table className="table table-hovered table-striped">
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Total Books</th>
                <th>Total Quantity</th>
                <th>Total Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>3 books</td>
                <td>3</td>
                <td>350</td>
                <td>
                  <button
                    className={`${styles.button} btn btn-sm btn-success `}
                  >
                    <DeleteIcon />
                  </button>
                  <button
                    style={{ marginLeft: "5px" }}
                    className={`${styles.button} btn btn-sm btn-danger ml-3`}
                  >
                    <VisibilityIcon />
                  </button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>3 books</td>
                <td>3</td>
                <td>350</td>
                <td>
                  <button
                    className={`${styles.button} btn btn-sm btn-success `}
                  >
                    <DeleteIcon />
                  </button>
                  <button
                    style={{ marginLeft: "5px" }}
                    className={`${styles.button} btn btn-sm btn-danger ml-3`}
                  >
                    <VisibilityIcon />
                  </button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>3 books</td>
                <td>3</td>
                <td>350</td>
                <td>
                  <button
                    className={`${styles.button} btn btn-sm btn-success `}
                  >
                    <DeleteIcon />
                  </button>
                  <button
                    style={{ marginLeft: "5px" }}
                    className={`${styles.button} btn btn-sm btn-danger ml-3`}
                  >
                    <VisibilityIcon />
                  </button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>3 books</td>
                <td>3</td>
                <td>350</td>
                <td>
                  <button
                    className={`${styles.button} btn btn-sm btn-success `}
                  >
                    <DeleteIcon />
                  </button>
                  <button
                    style={{ marginLeft: "5px" }}
                    className={`${styles.button} btn btn-sm btn-danger ml-3`}
                  >
                    <VisibilityIcon />
                  </button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>3 books</td>
                <td>3</td>
                <td>350</td>
                <td>
                  <button
                    className={`${styles.button} btn btn-sm btn-success `}
                  >
                    <DeleteIcon />
                  </button>
                  <button
                    style={{ marginLeft: "5px" }}
                    className={`${styles.button} btn btn-sm btn-danger ml-3`}
                  >
                    <VisibilityIcon />
                  </button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>3 books</td>
                <td>3</td>
                <td>350</td>
                <td>
                  <button
                    className={`${styles.button} btn btn-sm btn-success `}
                  >
                    <DeleteIcon />
                  </button>
                  <button
                    style={{ marginLeft: "5px" }}
                    className={`${styles.button} btn btn-sm btn-danger ml-3`}
                  >
                    <VisibilityIcon />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
    </Card>
  );
}

export default Orders;
