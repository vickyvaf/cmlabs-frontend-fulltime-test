import Image from "next/image";
import Link from "next/link";
import Logo from "../public/logo.png";

export default function Navbar() {
  return (
    <header className="w-full border-b-[1px] bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 md:py-5 px-5 font-main">
        <Link href="/" className="w-fit">
          <Image src={Logo} alt="logo" width={40} height={40} />
        </Link>
        <nav className="space-x-5 text-sm md:text-base text-black font-medium">
          <Link href="/" className="w-fit">
            Home
          </Link>
          <Link href="/" className="w-fit">
            Foods
          </Link>
        </nav>
      </div>
    </header>
  );
}
