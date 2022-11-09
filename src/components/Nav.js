import React from "react";
import {
  PopoverNotificationCenter,
  NotificationBell,
} from "@novu/notification-center";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const onNotificationClick = (notification) =>
    navigate(notification.cta.data.url);

  // function handlerOnNotificationClick(message) {
  //   console.log(message);
  //   if (message?.cta?.data?.url) {
  //     window.location.href = message.cta.data.url;
  //   }
  // }
  return (
    <nav className="navbar">
      <h3>Team's todo list</h3>
      <div>
        <PopoverNotificationCenter
          onNotificationClick={onNotificationClick}
          colorScheme="light"
        >
          {({ unseenCount }) => <NotificationBell unseenCount={unseenCount} />}
        </PopoverNotificationCenter>
      </div>
    </nav>
  );
};

export default Nav;
