import { config } from '../../config/app';
import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  ...config.smpt
});
