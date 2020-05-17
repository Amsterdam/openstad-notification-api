import db from '../bootstrap/sequelize';
import { config } from '../config/app';
import { transporter } from '../bootstrap/notification/mail';

const Notification = db.notification;

function prepare(emailData, user) {
  return {
    mail: {
      from: config.fromAddress,
      to: String(user.email),
      subject: String(emailData.subject),
      text: String(emailData.text),
      html: String(emailData.html),
    },
  };
}

function send(notifications) {
  notifications.forEach(async (notification) => {
    const { mail } = notification;
    const notificationEntity = Notification.build({
      subject: mail.subject,
      to: mail.to,
      from: mail.from,
      type: 'mail',
      body: JSON.stringify({ text: mail.text, html: mail.html }),
    });

    const savedNotificationEntity = await notificationEntity.save();

    if (config.queuing) {
      // add queuing
      return;
    }

    if (config.mailing) {
      const mailSent = await sendMail(mail);

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

