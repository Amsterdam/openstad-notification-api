import db from '../bootstrap/sequelize';
import { config } from '../config/app';

const Notification = db.notification;

function prepare(notificationInstance, user) {
  return {
    from: config.fromAddress, // sender address
    to: String(user.email), // list of receivers
    subject: notificationInstance.subject, // Subject line
    text: notificationInstance.textBody, // plain text body
    html: notificationInstance.body, // html body
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

