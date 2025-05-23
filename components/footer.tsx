const date = new Date();
const year = date.getFullYear();

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 ">
      <small className="mb-2 block text-xs">
        &copy; {year} Catalina Avadani.
      </small>
    </footer>
  );
}
