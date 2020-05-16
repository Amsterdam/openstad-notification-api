import db from '../bootstrap/sequelize';
import { config } from '../config/app';

const Notification = db.notification;

function prepare(notificationInstance, user) {
  return {
    from: config.fromAddress,
    to: String(user.email),
    subject: notificationInstance.subject,
    text: notificationInstance.text,
    html: notificationInstance.html,
  };
}

function send(notifications, body) {
  notifications.forEach(async (notification) => {
    const notificationEntity = Notification.build({ ...notification });

    const savedNotificationEntity = await notificationEntity.save();

    if (config.queuing) {
      // add queuing
      return;
    }

    mail(savedNotificationEntity);
    savedNotificationEntity.status = 'SENT';

    return await savedNotificationEntity.save();
  });
}

function mail(notification) {
  console.log('SENT MAIL');

  return notification;
}

export default {
  send,
  prepare,
};

