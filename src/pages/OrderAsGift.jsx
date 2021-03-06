import React, { useState, useEffect } from "react";
import { Card, Typography, Grid, Box, Checkbox, Radio } from "@mui/material";
import styles from "../styles/OrderAsGift.module.css";
function OrderAsGift() {
  const [districts, setDistricts] = useState([]);
  const [upozilas, setUpozilas] = useState([]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
    async function fetchDistricts() {
      const response = await fetch(`http://localhost:3001/districts`);
      const data = await response.json();
      setDistricts(data);
    }
    async function fetchArea() {
      const response = await fetch(`http://localhost:3001/upozilas`);
      const data = await response.json();
      setUpozilas(data);
    }
    fetchDistricts();
    fetchArea();
  }, []);
  return (
    <div className="container">
      <Grid container rowSpacing={2} columnSpacing={2}>
        <Grid item md={8}>
          {/* header of order form box  */}
          <Card className={`flex space-x-2 py-2 px-2 items-center `}>
            <Typography className={styles.title} variant="h5">
              Shipping Address
            </Typography>
            <p className={`self-center mt-4 ${styles.msg}`}>
              (Please Fill Out Your Information)
            </p>
          </Card>
          {/* end of header of form box */}
          {/* shipping form box */}
          <Card className="my-3 pb-3">
            <Grid container rowSpacing={2} columnSpacing={1}>
              <Grid item md={6}>
                <Card className={`${styles.shipping_box_header} p-3`}>
                  <Typography
                    className={styles.shipping_box_header_title}
                    variant="h6"
                  >
                    Gift From
                  </Typography>
                </Card>

                <form>
                  <Grid container>
                    {/* //single input  */}
                    <Grid item md={12}>
                      <div className="flex flex-column space-x-2">
                        <label className="ml-2 my-2">Name</label>
                        <input
                          type="text"
                          className={`${styles.input} p-3`}
                          placeholder="Enter Name"
                        />
                      </div>
                    </Grid>
                    {/* end of single input */}

                    {/* //single input  */}
                    <Grid item md={12}>
                      <div className="flex flex-column space-x-2">
                        <label className="ml-2 my-2">Phone No</label>
                        <input
                          type="text"
                          className={`${styles.input} p-3`}
                          placeholder="Enter Phone No."
                        />
                      </div>
                    </Grid>
                    {/* end of single input */}

                    {/* //single input  */}
                    <Grid item md={12}>
                      <div className="flex flex-column space-x-2">
                        <label className="ml-2 my-2">
                          Alternative Phone No
                        </label>
                        <input
                          type="text"
                          className={`${styles.input} p-3`}
                          placeholder="Enter Alternative Phone No."
                        />
                      </div>
                    </Grid>
                    {/* end of single input */}

                    {/* single input  */}
                    <Grid item md={12}>
                      <div className="flex flex-column space-x-2">
                        <label className="ml-2 my-2">Select Country</label>
                        <select
                          onChange={(event) => console.log(event.target.value)}
                          className={`${styles.input} p-3`}
                        >
                          <option value="bangladesh">Bangladesh</option>
                        </select>
                      </div>
                    </Grid>
                    {/* end of single input */}

                    {/* single input  */}
                    <Grid item md={12}>
                      <div className="flex flex-column space-x-2">
                        <label className="ml-2 my-2">Select City</label>
                        <select
                          onChange={(event) => console.log(event.target.value)}
                          className={`${styles.input} p-3`}
                        >
                          {districts.map((district, index) => (
                            <option key={index} value={district.bn_name}>
                              {district.bn_name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </Grid>
                    {/* end of single input */}

                    {/* single input  */}
                    <Grid item md={12}>
                      <div className="flex flex-column space-x-2">
                        <label className="ml-2 my-2">Select Area</label>
                        <select
                          onChange={(event) => console.log(event.target.value)}
                          className={`${styles.input} p-3`}
                        >
                          {upozilas.map((upozila, index) => (
                            <option key={index} value={upozila.bn_name}>
                              {upozila.bn_name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </Grid>
                    {/* end of single input */}

                    {/* single input  */}
                    <Grid item md={12}>
                      <div className="flex flex-column space-x-2">
                        <label className="ml-2 my-2">Address</label>
                        <textarea
                          placeholder="Address"
                          className={`${styles.input} p-3`}
                        ></textarea>
                      </div>
                    </Grid>
                    {/* end of single input */}
                  </Grid>
                </form>
              </Grid>
              <Grid item md={6}>
                <Card className={`${styles.shipping_box_header} p-3`}>
                  <Typography
                    className={styles.shipping_box_header_title}
                    variant="h6"
                  >
                    Gift To
                  </Typography>
                </Card>
                <form>
                  <Grid container>
                    {/* //single input  */}
                    <Grid item md={12}>
                      <div className="flex flex-column space-x-2">
                        <label className="ml-2 my-2">Name</label>
                        <input
                          type="text"
                          className={`${styles.input} p-3`}
                          placeholder="Enter Name"
                        />
                      </div>
                    </Grid>
                    {/* end of single input */}

                    {/* //single input  */}
                    <Grid item md={12}>
                      <div className="flex flex-column space-x-2">
                        <label className="ml-2 my-2">Phone No</label>
                        <input
                          type="text"
                          className={`${styles.input} p-3`}
                          placeholder="Enter Phone No."
                        />
                      </div>
                    </Grid>
                    {/* end of single input */}

                    {/* single input  */}
                    <Grid item md={12}>
                      <div className="flex flex-column space-x-2">
                        <label className="ml-2 my-2">Select Country</label>
                        <select
                          onChange={(event) => console.log(event.target.value)}
                          className={`${styles.input} p-3`}
                        >
                          <option value="bangladesh">Bangladesh</option>
                        </select>
                      </div>
                    </Grid>
                    {/* end of single input */}

                    {/* single input  */}
                    <Grid item md={12}>
                      <div className="flex flex-column space-x-2">
                        <label className="ml-2 my-2">Select City</label>
                        <select
                          onChange={(event) => console.log(event.target.value)}
                          className={`${styles.input} p-3`}
                        >
                          {districts.map((district, index) => (
                            <option key={index} value={district.bn_name}>
                              {district.bn_name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </Grid>
                    {/* end of single input */}

                    {/* single input  */}
                    <Grid item md={12}>
                      <div className="flex flex-column space-x-2">
                        <label className="ml-2 my-2">Select Area</label>
                        <select
                          onChange={(event) => console.log(event.target.value)}
                          className={`${styles.input} p-3`}
                        >
                          {upozilas.map((upozila, index) => (
                            <option key={index} value={upozila.bn_name}>
                              {upozila.bn_name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </Grid>
                    {/* end of single input */}

                    {/* single input  */}
                    <Grid item md={12}>
                      <div className="flex flex-column space-x-2">
                        <label className="ml-2 my-2">Address</label>
                        <textarea
                          placeholder="Address"
                          className={`${styles.input} p-3`}
                        ></textarea>
                      </div>
                    </Grid>
                    {/* end of single input */}

                    {/* single input  */}
                    <Grid item md={12}>
                      <div className="flex flex-column space-x-2">
                        <label className="ml-2 my-2">Select Occasion</label>
                        <select
                          onChange={(event) => console.log(event.target.value)}
                          className={`${styles.input} p-3`}
                        >
                          <option value="">Birthday</option>
                          <option value="ten">Anniversary</option>
                          <option value="200">FriendShip</option>
                          <option value="20">others</option>
                        </select>
                      </div>
                    </Grid>
                    {/* end of single input */}

                    {/* single input  */}
                    <Grid item md={12}>
                      <div className="flex flex-column space-x-2">
                        <label className="ml-2 my-2">Gift Message</label>
                        <textarea
                          placeholder="Address"
                          className={`${styles.input} p-3 mb-2`}
                        ></textarea>
                        <p>500 character(s) Remaining</p>
                      </div>
                    </Grid>
                    {/* end of single input */}
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </Card>
          {/* end of shipping form box */}

          {/* payment method box */}
          <Box
            style={{ borderBottom: "1px solid #f7f7f7" }}
            className={` ${styles.shipping_box_header} flex space-x-2 py-2 px-2 items-center `}
          >
            <Typography
              className={styles.shipping_box_header_title}
              variant="h5"
            >
              Payment Method
            </Typography>
            <p className={`self-center mt-4 text-white`}>
              (Please select only one! payment method)
            </p>
          </Box>
          {/* end of payment method box */}
          <Card className="p-3 my-2">
            <Card
              className={`${styles.card_payment} flex items-center py-2 space-x-3 pl-3`}
            >
              <div className={`${styles.radio_section}`}>
                <input
                  type="radio"
                  value="card"
                  onClick={(e) => console.log(e.target.value)}
                  className={styles.radio_input}
                  name="payment_option"
                />
              </div>
              <p className="mt-2">
                <img
                  className={styles.card_payment_img}
                  src="/assets/images/payment/card.png"
                  alt=""
                />
              </p>
            </Card>
            <Box className={`my-2 flex items-center py-2 pl-1`}>
              <Grid container rowSpacing={1} columnSpacing={2} className="mt-2">
                <Grid item md={3}>
                  <Card
                    className={`${styles.card_payment}  flex items-center justify-center py-3 space-x-3 px-3 `}
                  >
                    <div className={`${styles.radio_section}`}>
                      <input
                        type="radio"
                        value="card"
                        onClick={(e) => console.log(e.target.value)}
                        className={styles.radio_input}
                        name="payment_option"
                      />
                    </div>
                    <img
                      className={styles.payment_img}
                      src="/assets/images/payment/bkash.png"
                      alt=""
                    />
                  </Card>
                </Grid>
                <Grid item md={3}>
                  <Card
                    className={`${styles.card_payment}  flex items-center justify-center py-3 space-x-3 px-3 `}
                  >
                    <div className={`${styles.radio_section}`}>
                      <input
                        type="radio"
                        value="card"
                        onClick={(e) => console.log(e.target.value)}
                        className={styles.radio_input}
                        name="payment_option"
                      />
                    </div>
                    <img
                      className={styles.payment_img}
                      src="/assets/images/payment/rocket.png"
                      alt=""
                    />
                  </Card>
                </Grid>
                <Grid item md={3}>
                  <Card
                    className={`${styles.card_payment}  flex items-center justify-center py-3 space-x-3 px-3 `}
                  >
                    <div className={`${styles.radio_section}`}>
                      <input
                        type="radio"
                        value="card"
                        onClick={(e) => console.log(e.target.value)}
                        className={styles.radio_input}
                        name="payment_option"
                      />
                    </div>
                    <img
                      className={styles.payment_img}
                      src="/assets/images/payment/dmoney.jpg"
                      alt=""
                    />
                  </Card>
                </Grid>
                <Grid item md={3}>
                  <Card
                    className={`${styles.card_payment}  flex items-center justify-center py-3 space-x-3 px-3 `}
                  >
                    <div className={`${styles.radio_section}`}>
                      <input
                        type="radio"
                        value="card"
                        onClick={(e) => console.log(e.target.value)}
                        className={styles.radio_input}
                        name="payment_option"
                      />
                    </div>
                    <img
                      className={styles.payment_img}
                      src="/assets/images/payment/nagad.png"
                      alt=""
                    />
                  </Card>
                </Grid>
              </Grid>
            </Box>
            <p className="py-3 px-2 my-3">
              ??????:?????????: ???????????? ???????????? ???????????????????????? ??????????????? ????????????????????? ???????????? ??????/?????????????????? ???????????????
              ?????????????????????/????????????????????????????????? ???????????? ???????????? ????????????????????? ??????????????? ???????????????????????? ????????? ???????????????
              ??????????????? ??????????????? ???????????????????????? ??????/???????????? ?????????????????????/ ????????????????????????????????? ???????????? ????????? ???????????????
              ??????????????? ?????? ??????????????? ???????????????????????????????????? ??????????????????????????? ???????????? ???????????? ?????????????????? ???
              ??????????????????????????????????????????
            </p>
            <Box
              style={{ borderTop: "1px solid rgba(47,23,147,0.4)" }}
              className="mt-4 pt-4 pb-2 flex justify-end"
            >
              <button
                type="submit"
                className={`${styles.submit} py-3 px-4 ml-2`}
              >
                Confirm Order
              </button>
            </Box>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card>
            <Typography variant="h6" style={{ padding: "1rem" }}>
              Checkout Summery
            </Typography>

            <Box className={`${styles.priceContent}`}>
              <div className={styles.single_group}>
                <p>Subtotal</p>
                <p>162 Tk</p>
              </div>
              <div className={styles.single_group}>
                <p>Shipping</p>
                <p>60 Tk</p>
              </div>
              <div className={styles.single_group}>
                <p>Total</p>
                <p>222 Tk</p>
              </div>
              <div className={`${styles.single_group} ${styles.payable_total}`}>
                <p>Payable Total</p>
                <p>222 Tk</p>
              </div>
              <div className="flex space-x-2 justify-center items-center">
                <div className={`${styles.rememberMe}`}>
                  <Checkbox
                    onClick={(e) => console.log(e.target.value)}
                    sx={{
                      color: "rgba(47, 23, 147)",
                      "&.Mui-checked": {
                        color: "rgba(47, 23, 147)",
                      },
                    }}
                  />
                </div>
                <p className="mt-3">Gift Wrap For Tk.20</p>
              </div>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default OrderAsGift;
