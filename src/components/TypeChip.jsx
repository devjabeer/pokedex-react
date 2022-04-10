import React from "react";
import { Chip, Icon } from "@mui/material";
import { titleCase } from "../utilities";

const types = {
  normal: {
    color: "#757575",
    icon: "catching_pokemon",
  },
  fighting: {
    color: "#dd2c00",
    icon: "sports_mma",
  },
  flying: {
    color: "#2196f3",
    icon: "paragliding",
  },
  poison: {
    color: "#673ab7",
    icon: "science",
  },
  ground: {
    color: "#3e2723",
    icon: "map",
  },
  rock: {
    color: "#bdbdbd",
    icon: "landscape",
  },
  bug: {
    color: "#33691e",
    icon: "pest_control",
  },
  ghost: {
    color: "#8d6e63",
    icon: "blur_on",
  },
  steel: {
    color: "#616161",
    icon: "square",
  },
  fire: {
    color: "#b71c1c",
    icon: "whatshot",
  },
  water: {
    color: "#2962ff",
    icon: "water_drop",
  },
  grass: {
    color: "#43a047",
    icon: "grass",
  },
  electric: {
    color: "#ef6c00",
    icon: "electric_bolt",
  },
  psychic: {
    color: "#f06292",
    icon: "psychology",
  },
  ice: {
    color: "#81d4fa",
    icon: "ac_unit",
  },
  dragon: {
    color: "#7c4dff",
    icon: "visibility",
  },
  dark: {
    color: "#5d4037",
    icon: "shield_moon",
  },
  fairy: {
    color: "#f48fb1",
    icon: "star_purple500",
  },
  unknown: {
    color: "#b26500",
    icon: "catching_pokemon",
  },
  shadow: {
    color: "#2c387e",
    icon: "contrast",
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
      icon={<Icon>{types[type].icon}</Icon>}
      size="small"
    />
  );
}

export default TypeChip;
