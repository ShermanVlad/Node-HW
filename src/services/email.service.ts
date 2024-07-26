import path from "node:path";

import nodemailer, { Transporter } from "nodemailer";
import hbs from "nodemailer-express-handlebars";

import { configs } from "../configs/config";
import { emailConstants } from "../constants/email.constants";
import { EmailTypeEnum } from "../enums/email-type.enum";
import { EmailTypeToPayload } from "../types/email-type-to-payload";

class EmailService {
  private transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      from: configs.SMTP_EMAIL,
      auth: {
        user: configs.SMTP_EMAIL,
        pass: configs.SMTP_PASSWORD,
      },
    });

    this.transporter.use(
      "compile",
      hbs({
        viewEngine: {
          extname: ".hbs",
          partialsDir: path.join(process.cwd(), "src", "teplates", "partials"),
          layoutsDir: path.join(process.cwd(), "src", "teplates", "partials"),
        },
        viewPath: path.join(process.cwd(), "src", "teplates", "view"),
        extName: ".hbs",
      }),
    );
  }

  public async sendEmail<T extends EmailTypeEnum>(
    type: T,
    to: string,
    context: EmailTypeToPayload[T],
  ): Promise<void> {
    const { subject, template } = emailConstants[type];
    context["frontUrl"] = configs.FRONTEND_URL;
    const options = {
      to,
      subject,
      template,
      context,
    };

    await this.transporter.sendMail(options);
  }
}

export const emailService = new EmailService();
