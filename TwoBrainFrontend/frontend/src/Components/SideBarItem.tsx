import { ReactElement } from "react";

export function SideBarItem({
  text,
  icon,
}: {
  text: String;
  icon: ReactElement;
}) {
  return (
    <div
      className="flex p-2 gap-4 items-center cursor-pointer
     hover:bg-gray-300 rounded max-w-42 transition-all duration-500"
    >
      {icon} {text}
    </div>
  );
}
