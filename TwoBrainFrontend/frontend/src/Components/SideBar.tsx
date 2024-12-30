import { BrainIcon } from "../Icons/BrainIcon";
import { TwitterIcon } from "../Icons/TwitterIcon";
import { YouTubeIcon } from "../Icons/YouTubeIcon";
import { SideBarItem } from "./SideBarItem";

export const SideBar = () => {
  return (
    <>
      <div className="w-72 h-screen bg-white border-r-2 top-0 left-0 fixed border-slate-200">
        <div className="text-2xl flex p-4 gap-4 items-center">
          <BrainIcon />
          Brainly
        </div>
        <div className="p-4  text-gray-600">
          <SideBarItem icon={<TwitterIcon />} text={"Tweets"} />
          <SideBarItem icon={<YouTubeIcon />} text={"YouTube"} />
        </div>
      </div>
    </>
  );
};
