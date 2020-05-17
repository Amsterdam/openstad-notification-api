import db from '../bootstrap/sequelize';
import { config } from '../config/app';
import mjml2html from 'mjml'
import { transporter } from '../bootstrap/notification/mail';

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

    if(config.mailing) {
      const mailSent = mail(savedNotificationEntity);

      if(mailSent) {
        savedNotificationEntity.status = 'SENT';

        return await savedNotificationEntity.save();
      } else {
        // mail send failure
      }
    }
  });
}

async function mail(notification) {
  const mailHTML = ;

  let info = await transporter.sendMail({ ...notification });

  console.log(info)

  return info;
}

export default {
  send,
  prepare,
};

