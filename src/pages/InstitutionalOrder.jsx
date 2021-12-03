import React from "react";
import { Box, Typography, Grid, Card } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../styles/InstitutionalOrder.module.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SellSharpIcon from "@mui/icons-material/SellSharp";
import LocalShippingSharpIcon from "@mui/icons-material/LocalShippingSharp";
import {
  InstitutionalOrderSingleCard,
  InstitutionalOrderCarousel,
} from "../components/";

function InstitutionalOrder() {
  return (
    <div className="container">
      <Box className={styles.banner}>
        <Box className={styles.content}>
          <Typography variant="h6">
            রকমারি থেকে প্রাতিষ্ঠানিক ক্লায়েন্টরা পাচ্ছেন কাস্টমাইজড সার্ভিস
          </Typography>
          <p className={styles.banner_description}>
            টেন্ডার, RFQ অথবা ডিরেক্ট পারচেজ যেভাবেই কেনা হোক, যত কপি-ই অর্ডার
            করা হোক না কেন বাংলাদেশের যেকোন স্থানে বই পৌছে দিচ্ছে রকমারি। স্কুল,
            কলেজ, বিশ্ববিদ্যালয়, লাইব্রেরি, কর্পোরেট হাউজ, ব্যাংক, বীমা, NGO,
            ডিফেন্স এবং সরকারি-বেসরকারি সব ধরনের প্রতিষ্ঠানে সর্বোচ্চ
            ডিস্কাউন্টে দেশি-বিদেশি অরিজিনাল প্রিন্টেড বই সরবরাহ করছে রকমারি
            কর্পোরেট সেলস টীম।
          </p>
        </Box>
        <Box
          className={`${styles.banner__footer} d-flex align-items-center justify-content-center`}
        >
          <button type="button" className={`${styles.button} btn`}>
            Request A Quote
          </button>
          <span className="btn btn-info btn-sm">OR</span>
          <div
            style={{ marginLeft: "10px" }}
            className=" d-flex flex-row align-items-center"
          >
            <p style={{ marginTop: "25px" }}>
              <LocalPhoneIcon style={{ color: "white" }} />
            </p>
            <p
              style={{ marginTop: "25px" }}
              className="d-flex justify-content-between align-items-center text-white"
            >
              <span>&nbsp;+8801708166238&nbsp;,</span>
              <span>&nbsp;+8801708166239&nbsp;,</span>
              <span>&nbsp;+8801708166242&nbsp;</span>{" "}
              <span>&nbsp;(9.00AM - 7.00PM)</span>
            </p>
          </div>
        </Box>
      </Box>
      <Box className={styles.why_choose_us}>
        <Typography variant="h3" className={styles.why_title}>
          Why Choose Us
        </Typography>
        <Grid container rowSpacing={1} columnSpacing={1}>
          <Grid item md={4}>
            <InstitutionalOrderSingleCard
              title="Largest Book Collection"
              content={`Reading book is a wonderful experience and there's an explorer in all of
        us who shouldn't be lost at any cost. We offer splendid discounts on
        bulk purchases`}
            >
              {/* pass only icon  as a child */}
              <MenuBookIcon className={styles.single_choose_image} />
            </InstitutionalOrderSingleCard>
          </Grid>
          <Grid item md={4}>
            <InstitutionalOrderSingleCard
              title="Best Price"
              content={`Reading book is a wonderful experience and there's an explorer
                in all of us who shouldn't be lost at any cost. We offer
                splendid discounts on bulk purchases`}
            >
              <SellSharpIcon className={styles.single_choose_image} />
            </InstitutionalOrderSingleCard>
          </Grid>
          <Grid item md={4}>
            <InstitutionalOrderSingleCard
              title="On Time Delivery"
              content={`On Time 24/7 Delivery is available to meet your unique on-demand
                and scheduled delivery needs. Our professional executives and
                friendly customer service will ensure your books are delivered
                reliability to their destination and it will be free of cost.`}
            >
              <LocalShippingSharpIcon className={styles.single_choose_image} />
            </InstitutionalOrderSingleCard>
          </Grid>
        </Grid>
      </Box>

      <Grid container>
        <Grid item md={12}>
          {/* <InstitutionalOrderCarousel /> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default InstitutionalOrder;
