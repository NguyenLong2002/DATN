"use strict";

const nodemailer = require("nodemailer");

class EmailService {
  static sendVerificationEmail = async ({ email, name, verificationLink }) => {
    try {
      // Cấu hình SMTP
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST, // e.g., "smtp.gmail.com"
        port: process.env.EMAIL_PORT, // e.g., 587
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_USER, // Email gửi đi
          pass: process.env.EMAIL_PASSWORD, // Mật khẩu ứng dụng
        },
      });

      // Nội dung email
      const mailOptions = {
        from: `"Your App Name" <${process.env.EMAIL_USER}>`, // Sender address
        to: email, // Người nhận
        subject: "Xác nhận đăng ký tài khoản", // Tiêu đề
        html: `
          <h1>Chào ${name},</h1>
          <p>Cảm ơn bạn đã đăng ký tài khoản. Vui lòng xác nhận email bằng cách nhấp vào liên kết bên dưới:</p>
          <a href="${verificationLink}" style="text-decoration: none; color: blue;">Xác nhận tài khoản</a>
          <p>Nếu bạn không thực hiện yêu cầu này, vui lòng bỏ qua email này.</p>
        `, // Nội dung HTML
      };

      // Gửi email
      const info = await transporter.sendMail(mailOptions);
      console.log("Message sent: %s", info.messageId);
      return info;
    } catch (error) {
      console.error("Error sending email:", error.message);
      throw error;
    }
  };

}

module.exports = EmailService;
