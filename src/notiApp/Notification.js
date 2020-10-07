import React from "react";
import PropTypes from "prop-types";

import "./Notification.scss";

const Notification = ({ click, id, info, read, theme, title, url }) => {
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
  click: PropTypes.func,
  info: PropTypes.string,
  id: PropTypes.string,
  read: PropTypes.bool,
  theme: PropTypes.object,
  title: PropTypes.string,
  url: PropTypes.string,
};

Notification.defaultProps = {
  click: () => {},
  id: "",
  info: "",
  read: false,
  title: "",
  theme: {},
  url: "",
};

export default Notification;
