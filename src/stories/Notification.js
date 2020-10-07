import React from "react";
import PropTypes from "prop-types";

import "./Notification.scss";

const Notification = ({ id, title, info, read, click, url, theme }) => {
  const handleOnClick = (value) => {
    click(id, value);
  };

  return (
    <div
      className={`notification notification-${read ? "read" : "unread"}`}
      style={{
        backgroundColor: !read ? theme.notiBack || "#5f9ea0" : "#ffffff",
      }}
    >
      <div className="notification-content">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleOnClick("click")}
        >
          <p>{title}</p>
        </a>
        <span>{info}</span>
      </div>
      <div className="notification-mark">
        <button onClick={() => handleOnClick("marked")}>
          <span
            className={`fa fa-star notification-${read ? "checked" : ""}`}
          ></span>
        </button>
      </div>
    </div>
  );
};

Notification.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  info: PropTypes.string,
  read: PropTypes.bool,
  click: PropTypes.func,
  url: PropTypes.string,
  theme: PropTypes.object,
};

Notification.defaultProps = {
  id: "",
  title: "",
  info: "",
  read: false,
  click: () => {},
  url: "",
  theme: {},
};

export default Notification;
