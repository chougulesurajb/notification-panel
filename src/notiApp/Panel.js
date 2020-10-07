import React from "react";
import PropTypes from "prop-types";

import Notification from "./Notification";
import "./Panel.scss";

const Panel = ({ clickRead, count, markAll, notifications, theme }) => (
  <div
    className="panel"
    style={{ backgroundColor: theme.panelBack || "lightcyan" }}
  >
    <h3>
      You have <span>{`${count}`}</span> unread notifications
    </h3>
    <div className="n-panel-rt">
      <button onClick={markAll}>Mark all as read</button>
    </div>
    <div className="panel-noti">
      {notifications.map((noti) => (
        <Notification key={noti.id} theme={theme} {...noti} click={clickRead} />
      ))}
    </div>
  </div>
);

Panel.propTypes = {
  clickRead: PropTypes.func,
  count: PropTypes.number,
  markAll: PropTypes.func,
  notifications: PropTypes.array,
  theme: PropTypes.object,
};

Panel.defaultProps = {
  clickRead: () => {},
  count: 0,
  markAll: () => {},
  notifications: [],
  theme: {},
};

export default Panel;
