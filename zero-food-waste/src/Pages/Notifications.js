import React from 'react';
import '../CSS/Notification.css';

const notifications = [
  { id: 1, text: 'Mert shows his interest to collect your food.' },
  { id: 2, text: 'Canned Tuna will expire tomorrow. You can use it for yourself or you can donate to someone.' },
  { id: 3, text: 'Jack gave feedback on your last donation.' }
];

const Notifications = () => {
  return (
    <div className="notifications-container">
      {notifications.map((notification) => (
        <div key={notification.id} className="notification-card">
          <div className="notification-icon">
            {/* Icon placeholder - replace with actual icon component */}
            <i className="icon-placeholder">🔔</i>
          </div>
          <div className="notification-text">
            {notification.text}
          </div>
        </div>
      ))}
    </div>
);
};

export default Notifications;