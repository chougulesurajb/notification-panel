import React from "react";
import PropTypes from "prop-types";

import "./Button.scss";

const Button = ({ pActive, label, theme, ...props }) => (
  <button
    style={{
      backgroundColor: !pActive ? theme.btnBack || "darkcyan" : "darkgray",
    }}
    className={`noti-btn noti-btn-${pActive ? "active" : "inactive"}`}
    {...props}
  >
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  pActive: PropTypes.bool,
  theme: PropTypes.object,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: "",
  pActive: false,
  theme: {},
  onClick: () => {},
};

export default Button;
