import { CloseIcon } from "../Icons/CloseIcon";
import { Button } from "./Button";

export const AddContetnModal = ({ modal, onClose }) => {
  console.log(modal);
  return (
    <div>
      {modal && (
        <div className="w-screen top-0 left-0 h-screen fixed bg-slate-500 opacity-90 flex justify-center">
          <div className="flex flex-col justify-center">
            <div className="flex flex-col  bg-white p-2 rounded">
              <span
                className=" flex justify-end  cursor-pointer opacity-100"
                onClick={onClose}
              >
                <CloseIcon />
              </span>
              <div className="flex flex-col gap-4 p-4">
                <input placeholder="Enter your text" className="border" />
                <input placeholder="Enter your text" className="border" />
              </div>

              <div className="flex justify-center">
                <Button variant="primary" text="Submit" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
