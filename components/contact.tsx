"use client";

import { sendEmail } from "@/actions/sendEmail";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import SectionHeading from "./section-heading";
import SubmitBtn from "./submit-btn";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id='contact'
      className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className=' text-gray-700 -mt-5'>
        Please contact me directly at{" "}
        <a className='underline' href='mailto:catalina_ava@yahoo.com'>
          catalina_ava@yahoo.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className=' mt-10 flex flex-col'
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
          className='px-4 h-14 border borderBlack'
          name='senderEmail'
          type='email'
          required
          maxLength={50}
          placeholder='Your email'
        />
        <textarea
          className='h-52 my-3 rounded-lg borderBlack p-4'
          name='message'
          placeholder='Your message'
          required
          maxLength={500}
        ></textarea>
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
