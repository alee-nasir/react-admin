import { Typography, useTheme } from "@mui/material";
import React from "react";
import { MenuItem } from "react-pro-sidebar";
import { tokens } from "../theme";
import { Link } from "react-router-dom";

const Item = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={props.selected === props.title}
      style={{ color: colors.grey[100] }}
      onClick={() => props.setSelected(props.title)}
      icon={props.icon}
    >
      <Typography>{props.title}</Typography>
      <Link to={props.to} />
    </MenuItem>
  );
};

export default Item;
