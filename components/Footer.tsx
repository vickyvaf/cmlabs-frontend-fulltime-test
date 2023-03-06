import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-4 bg-white md:px-6 md:py-8 border-t-[1px] mt-28 font-main">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center mb-4 sm:mb-0">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900">
            Meals
          </span>
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-900 sm:mb-0 space-x-5">
          <li>About</li>
          <li>Privacy Policy</li>
          <li>Licensing</li>
          <li> Contact</li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {new Date().getFullYear()} Vicky Adi Firmansyah. All Rights Reserved.
      </span>
    </footer>
  );
}
