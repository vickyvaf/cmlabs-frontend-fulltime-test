import { AiOutlineSearch } from "react-icons/ai";
import Strawberry from "../public/strawberry.png";
import Jujube from "../public/jujube.png";
import Cocacola from "../public/cocacola.png";
import Image from "next/image";

type Props = {
  search: string;
  setSearch: (search: string) => void;
};

export default function Banner({ setSearch, search }: Props) {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="px-5 flex flex-col justify-center h-48 md:h-56 items-center bg-slate-200 mb-5 md:mb-10">
      <div className="flex gap-5 mb-5 items-center">
        <Image src={Strawberry} alt="icon" width={20} height={20} />
        <Image src={Jujube} alt="icon" width={20} height={20} />
        <Image src={Cocacola} alt="icon" width={15} height={15} />
      </div>
      <h1 className="text-2xl md:text-4xl font-bold mb-5 text-center">
        See All The Delicious Foods
      </h1>
      <form
        onSubmit={handleSearch}
        className="bg-white flex justify-between items-center px-5 rounded-full max-w-full relative"
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-white p-2 pr-4 md:pr-6 md:py-2 md:px-2 outline-none w-[500px] font-main"
        />
        <AiOutlineSearch className="cursor-pointer absolute right-3 w-5 h-5" />
      </form>
    </div>
  );
}
