import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { emailTamplate } from './emailTamplate';

@Injectable()
export class MailerService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail', // or use host/port
      auth: {
        user: 'srka780@gmail.com',
        pass: 'vxaf xbeo fahv ladq',
      },
    });
  }

  async sendMail(): Promise<nodemailer.SentMessageInfo> {
    return await this.transporter.sendMail({
      from: 'srka780@gmail.com',
      to: ['srka780@gmail.com', 'uforcode123@gmail.com'],
      subject: 'Test Email',
      html: emailTamplate(),
    });
  }
}
