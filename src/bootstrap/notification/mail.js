import { config } from '../../config/app';

export const transporter = nodemailer.createTransport({
  ...config.smpt
});
