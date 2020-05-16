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
  notifications.forEach((notification) => {
    const notificationEntity = Notification.build({...notification});

    notificationEntity.save()
      .then(savedNotificationEntity => {
        if(config.queuing) {
          // add queuing
          return;
        }

        return mail(savedNotificationEntity)
      })
      .then(async savedNotificationEntity => {
        savedNotificationEntity.status = 'SENT';

        await savedNotificationEntity.save();

        return savedNotificationEntity;
      })
      .catch(e => console.log(e));
  })
}

function mail(notification) {
  console.log('SENT MAIL')

  return notification;
}

export default {
  send,
  prepare,
};

