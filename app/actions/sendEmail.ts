"use server";

import { Resend } from "resend";
import { RESEND_API_KEY } from "../utils/api";

const resend = new Resend(RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "catalinaavadani@gmail.com",
    subject: "New message from my contact form portfolio",
    text: `New message from ${formData.get("senderEmail")}: ${formData.get(
      "message"
    )}`,
  });
};
