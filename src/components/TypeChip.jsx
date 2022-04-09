import React from "react";
import { Chip } from "@mui/material";
import { titleCase } from "../utilities";

const types = {
  normal: {
    color: "#757575",
    icon: "house",
  },
  fighting: {
    color: "#dd2c00",
    icon: "house",
  },
  flying: {
    color: "#2196f3",
    icon: "house",
  },
  poison: {
    color: "#673ab7",
    icon: "house",
  },
  ground: {
    color: "#3e2723",
    icon: "house",
  },
  rock: {
    color: "#bdbdbd",
    icon: "house",
  },
  bug: {
    color: "#33691e",
    icon: "house",
  },
  ghost: {
    color: "#8d6e63",
    icon: "house",
  },
  steel: {
    color: "#616161",
    icon: "house",
  },
  fire: {
    color: "#b71c1c",
    icon: "house",
  },
  water: {
    color: "#2962ff",
    icon: "house",
  },
  grass: {
    color: "#43a047",
    icon: "house",
  },
  electric: {
    color: "#ef6c00",
    icon: "house",
  },
  psychic: {
    color: "#f06292",
    icon: "house",
  },
  ice: {
    color: "#81d4fa",
    icon: "house",
  },
  dragon: {
    color: "#7c4dff",
    icon: "house",
  },
  dark: {
    color: "#5d4037",
    icon: "house",
  },
  fairy: {
    color: "#f48fb1",
    icon: "house",
  },
  unknown: {
    color: "#FFFFFF",
    icon: "house",
  },
  shadow: {
    color: "#FFFFFF",
    icon: "house",
  },
};

function TypeChip({ type }) {
  return (
    <Chip
      label={titleCase(type)}
      style={{
        cursor: "pointer",
        backgroundColor: `${types[type].color}`,
        color: "white",
      }}
      size="small"
    />
  );
}

export default TypeChip;
