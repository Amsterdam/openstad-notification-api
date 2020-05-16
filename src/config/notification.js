export default {
  smpt: {
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'testAccount.user', // generated ethereal user
      pass: 'testAccount.pass', // generated ethereal password
    },
  },
  fromAddress: process.env.MAIL_FROM_ADDRESS,
  testAddress: process.env.MAIL_TEST_EMAIL_ADDRESS,
}
