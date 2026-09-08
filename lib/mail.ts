import nodemailer from "nodemailer";

const smtpUser = process.env.EMAIL_USER;
const smtpPassword = process.env.EMAIL_PASSWORD;
const appUrl = process.env.NEXTAUTH_URL ?? "http://localhost:3000";

function createTransporter() {
  if (!smtpUser || !smtpPassword) {
    throw new Error(
      "EMAIL_USER and EMAIL_PASSWORD must be configured before sending email.",
    );
  }

  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST ?? "smtp-mail.outlook.com",
    port: Number(process.env.EMAIL_PORT ?? 587),
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  });
}

export async function sendVerificationEmail(email: string, token: string) {
  const verificationUrl = `${appUrl}/api/verification/${encodeURIComponent(token)}`;

  await createTransporter().sendMail({
    from: `"AlWathba" <${smtpUser}>`,
    to: email,
    subject: "Verify Your Email",
    html: `Please click on the following link to verify your email: <a href="${verificationUrl}">${verificationUrl}</a>`,
  });
}

export async function sendPasswordResetEmail(email: string, token: string) {
  const resetPasswordUrl = `${appUrl}/api/resetpass/${encodeURIComponent(token)}`;

  await createTransporter().sendMail({
    from: `"AlWathba" <${smtpUser}>`,
    to: email,
    subject: "Password Reset Request",
    html: `We received a request to reset your password. Please use this link: <a href="${resetPasswordUrl}">Reset Password</a>. If you did not request a password reset, please ignore this email.`,
  });
}

