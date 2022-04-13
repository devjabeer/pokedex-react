import { Card } from "@mui/material";
import React from "react";

function BaseCard(props) {
  return <Card {...props}>{props.children}</Card>;
}

export default BaseCard;
