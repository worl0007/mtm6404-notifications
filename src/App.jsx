import React, { useState } from 'react';
import notificationsData from './notifications';
import './App.css';

function Notifications() {
  const [notifications, setNotifications] = useState(notificationsData);

  const clearNotification = (id) => {
    const updatedNotifications = notifications.filter((notif) => notif.id !== id);
    setNotifications(updatedNotifications);
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="notification-container">
      <h2>Notifications</h2>
      <p>Number of Notifications: {notifications.length}</p>
      {notifications.map((notification) => (
        <div key={notification.id} className="notification">
          <p>
            <strong>{notification.name}:</strong> {notification.message}
          </p>
          <button onClick={() => clearNotification(notification.id)}>Clear</button>
        </div>
      ))}
      <button onClick={clearAllNotifications}>Clear All</button>
    </div>
  );
}

export default Notifications;
