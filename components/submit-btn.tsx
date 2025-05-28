import { useTranslations } from "next-intl";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  const t = useTranslations("Contact");

  return (
    <button
      type="submit"
      className="group flex justify-center items-center gap-2 h-[3rem] w-full bg-gradient-to-r from-blue-300 to-violet-900 hover:from-blue-400 hover:to-violet-800 text-white rounded-lg outline-none transition-all focus:scale-110  active:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10"
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
