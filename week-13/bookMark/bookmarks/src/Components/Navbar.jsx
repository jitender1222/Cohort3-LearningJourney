import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className=" py-5 md:py-10 flex justify-around items-center font-rubik cursor-pointer ">
      <div>
        <span>
          <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/logo-bookmark.svg" />
        </span>
      </div>
      <span className="md:hidden">
        <FontAwesomeIcon className="h-6" icon={faBars} />
      </span>
      <div className="sm: hidden md:flex gap-10 items-center tracking-[1.6px] uppercase text-gray-400">
        <span className="hover:text-red-400">Features</span>
        <span className="hover:text-red-400">Download</span>
        <span className="hover:text-red-400">FAQ</span>
        <button
          className="bg-red-500 px-8 py-2 text-center uppercase text-white 
          rounded-lg border-2 border-red-400 hover:bg-white hover:text-red-400"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
