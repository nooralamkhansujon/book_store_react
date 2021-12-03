import React from "react";
import { Box, Typography, Grid, Card } from "@mui/material";
import styles from "../../styles/InstitutionalOrder.module.css";
import MenuBookIcon from "@mui/icons-material/MenuBook";
function SingleCard({ title, content, children }) {
  return (
    <Card className={styles.single_card_content}>
      <div className={styles.single_choose_image_section}>{children}</div>
      <p className={styles.single_choose_title}> {title}</p>
      <p className={styles.single_choose_description}>{content}</p>
    </Card>
  );
}

export default SingleCard;
