import { useTranslations } from "next-intl";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  const t = useTranslations("Contact");

  return (
    <button
      type="submit"
      className="group flex justify-center items-center gap-2 h-[3rem] w-full bg-violet-950/70 text-white rounded-lg outline-none transition-all focus:scale-110  hover:bg-violet-950/85 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          {t("submit")}{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1  " />
        </>
      )}
    </button>
  );
}
