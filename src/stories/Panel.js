import React from "react";
import PropTypes from "prop-types";

import Notification from "./Notification";
import "./Panel.scss";

const Panel = ({ count, notifications, clickRead, markAll, theme }) => (
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
  count: PropTypes.number,
  notifications: PropTypes.array,
  clickRead: PropTypes.func,
  markAll: PropTypes.func,
  theme: PropTypes.object,
};

Panel.defaultProps = {
  count: 0,
  notifications: [],
  clickRead: () => {},
  markAll: () => {},
  theme: {},
};

export default Panel;
