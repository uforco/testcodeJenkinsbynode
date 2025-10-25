import { Injectable } from '@nestjs/common';
import { MailerService } from './mailer/mailer.service';

@Injectable()
export class AppService {

  constructor(private readonly mailerService: MailerService) {}

  async getHello() {
    // const result = await this.mailerService.sendMail();

    // console.log('Email sent successfully:', result);

    return 'Email system is working!  Check your inbox.';
  }
}
