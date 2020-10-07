import React, { useState, useEffect } from "react";

import { Button } from "./stories";
import { Panel } from "./stories";
import data from "./data.json";

import "./App.scss";

// Application theme initial values
const themeData = {
  panelBack: "#e0ffff",
  btnBack: "#008b8b",
  notiBack: "#5f9ea0",
};

const App = () => {
  const [pActive, setPActive] = useState(false);
  const [setting, setSetting] = useState(false);
  const [notifications, setNotifications] = useState(data.notifications);
  const [count, setCount] = useState(data.notifications.length);
  const [theme, setTheme] = useState(themeData);

  // used to mark notifications read or unread
  useEffect(() => {
    const count = notifications.filter((e) => {
      return !e.read;
    });
    setCount(count.length);
  }, [notifications]);

  // Notification panel open or close
  const handleOnClick = () => {
    setPActive(!pActive);
  };

  // Settings panel open or close
  const handleSetting = () => {
    setSetting(!setting);
  };

  // Handle to mark notifications read or unread
  const handleMarkRead = (id, value) => {
    const dataCopy = [...notifications];
    const data = dataCopy.map((e) => {
      if (e.id === id) {
        e.read = value === "marked" ? !e.read : true;
      }
      return e;
    });
    setNotifications(data);
  };

  // Handle to mark all notifications read
  const handleMarkAll = (id) => {
    const dataCopy = [...notifications];
    const data = dataCopy.map((e) => {
      e.read = true;
      return e;
    });
    setNotifications(data);
  };

  // Handle for theme modifications
  const handleOnChange = (e, id) => {
    const color = e.target.value;
    const themeCopy = { ...theme };
    switch (id) {
      case "panelBack":
        themeCopy[id] = color;
        break;
      case "notiBack":
        themeCopy[id] = color;
        break;
      case "btnBack":
        themeCopy[id] = color;
        break;

      default:
        break;
    }
    setTheme(themeCopy);
  };

  return (
    <div className="app">
      <div className="n-btn">
        <Button
          theme={theme}
          pActive={pActive}
          onClick={handleOnClick}
          label={`Notifications (${count || 0})`}
        />
      </div>
      <div className={`n-panel n-panel-${pActive ? "active" : "inactive"}`}>
        <div className="n-panel-rt">
          <span onClick={handleSetting} className="fa fa-gear"></span>
        </div>
        {setting && (
          <div
            className={`n-panel-setting n-panel-setting-${setting ? "s" : "h"}`}
          >
            <span>
              <label htmlFor="panelBack">Panel Background: </label>
              <input
                type="color"
                id="panelBack"
                name="panelBack"
                value={theme.panelBack}
                onChange={(e) => {
                  handleOnChange(e, "panelBack");
                }}
              />
            </span>
            <br />
            <span>
              <label htmlFor="notiBack">Notification Background: </label>
              <input
                type="color"
                id="notiBack"
                name="notiBack"
                value={theme.notiBack}
                onChange={(e) => {
                  handleOnChange(e, "notiBack");
                }}
              />
            </span>
            <br />
            <span>
              <label htmlFor="btnBack">Button Background: </label>
              <input
                type="color"
                id="btnBack"
                name="btnBack"
                value={theme.btnBack}
                onChange={(e) => {
                  handleOnChange(e, "btnBack");
                }}
              />
            </span>
          </div>
        )}
        <Panel
          theme={theme}
          count={count}
          notifications={notifications}
          clickRead={handleMarkRead}
          clickSetting={handleSetting}
          markAll={handleMarkAll}
        />
      </div>
    </div>
  );
};

export default App;
