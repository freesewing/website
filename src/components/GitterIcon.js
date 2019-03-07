import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";
import { gitter } from "../config/icons";

const GitterIcon = props => {
  return <Icon size={props.size} viewBox={props.viewBox} pathString={gitter} />;
};

GitterIcon.propTypes = {
  size: PropTypes.number,
  viewBox: PropTypes.string
};

GitterIcon.defaultProps = {
  size: 24,
  viewBox: "0 0 24 24"
};

export default GitterIcon;
