import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex justify-center items-center gap-2 h-[3rem] w-[8rem] bg-violet-950/70 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-violet-950/85 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1  " />
        </>
      )}
    </button>
  );
}
