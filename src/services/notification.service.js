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

function send(notifications) {
  notifications.forEach((notification) => {
    const notificationEntity = Notification.build({...request.body});

    notificationEntity.save()
      .then(savedNotificationEntity => {
        if(queuing) {
          // add queuing
          return;
        }

        return mail(savedNotificationEntity)
      })
      .then(async savedNotificationEntity => {
        notificationEntity.status = 'SENT';

        await notificationEntity.save();

        response.json(savedNotificationEntity)
      })
      .catch(e => next(e));
  })
}

function mail() {
  console.log('SENT MAIL')
}

export default {
  send,
  prepare,
};

