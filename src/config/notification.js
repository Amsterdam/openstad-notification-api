require('dotenv').config();

export default {
  smpt: {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'roderick.ziemann70@ethereal.email',
      pass: 'Z5BW2YxFVgCEPkJa2h'
    },
    secure: false, // true for 465, false for other ports
  },
  fromAddress: process.env.MAIL_FROM_ADDRESS,
  testAddress: process.env.MAIL_TEST_EMAIL_ADDRESS,
  queuing: false,
  mailing: true,
}
