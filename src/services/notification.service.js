import db from '../bootstrap/sequelize';
import { config } from '../config/app';
import { transporter } from '../bootstrap/notification/mail';

const Notification = db.notification;

function prepare(user, subject, text, html) {
  return {
    mail: {
      from: config.fromAddress,
      to: String(user.email),
      subject: String(subject),
      text: String(text),
      html: String(html),
    },
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

    if (config.mailing) {
      const mailSent = await sendMail(savedNotificationEntity);

      if (mailSent) {
        savedNotificationEntity.status = 'SENT';

        return await savedNotificationEntity.save();
      } else {
        // mail send failure
      }
    }
  });
}

async function sendMail(mail) {
  let info = await transporter.sendMail(mail);

  console.log(info);

  return info;
}

export default {
  send,
  prepare,
};

