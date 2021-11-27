import React from "react";
import { Link, useParams } from "react-router-dom";
import { HomeBook } from "../components";
import { Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
function BooksByCategory() {
  const { category } = useParams();
  function handleClick(event) {
    event.preventDefault();
    console.log("this is running ");
  }
  return (
    <div className="container">
      <div role="presentation" className="breadcumb" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" to="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" to="/">
            Core
          </Link>
          <Typography color="text.primary">{category}</Typography>
        </Breadcrumbs>
      </div>
      <HomeBook title={`Books of ${category.toUpperCase()}`} />
    </div>
  );
}

export default BooksByCategory;
