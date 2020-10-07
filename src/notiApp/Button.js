import React from "react";
import PropTypes from "prop-types";

import "./Button.scss";

const Button = ({ label, panelActive, theme, ...props }) => (
  <button
    style={{
      backgroundColor: !panelActive ? theme.btnBack || "darkcyan" : "darkgray",
    }}
    className={`noti-btn noti-btn-${panelActive ? "active" : "inactive"}`}
    {...props}
  >
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  panelActive: PropTypes.bool,
  theme: PropTypes.object,
};

Button.defaultProps = {
  label: "",
  panelActive: false,
  theme: {},
  onClick: () => {},
};

export default Button;
