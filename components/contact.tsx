"use client";

import { sendEmail } from "@/actions/sendEmail";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import toast from "react-hot-toast";
import SectionHeading from "./section-heading";
import SubmitBtn from "./submit-btn";

export default function Contact() {
  const { ref } = useSectionInView("contact");
  const t = useTranslations("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>{t("title")}</SectionHeading>

      <p className="text-lg text-gray-600 dark:text-gray-300">
        {t("paragraph1")}{" "}
        <a
          href="mailto:catalina_ava@yahoo.com"
          className="text-violet-800 dark:text-violet-400 hover:underline transition"
        >
          catalina_ava@yahoo.com
        </a>{" "}
        {t("paragraph2")}.
      </p>
      <form
        className=" mt-10 flex flex-col dark:text-black "
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="px-4 h-14 shadow-md border rounded-lg border-white/80 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder={t("placeholderEmail")}
        />
        <textarea
          className="h-32 my-3 shadow-md rounded-lg border-white/80 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder={t("placeholderMessage")}
          required
          maxLength={5000}
        ></textarea>
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
