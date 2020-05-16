import db from '../bootstrap/sequelize';
import { config } from '../config/app';

const Notification = db.notification;

function prepare(notificationInstance, user) {
  console.log(config)
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

function mail() {
  console.log('SENT MAIL')
}

export default {
  send,
  prepare,
};

