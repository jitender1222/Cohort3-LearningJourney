import { useRef, useState } from "react";
import { CloseIcon } from "../Icons/CloseIcon";
import { Button } from "./Button";
import axios from "axios";
import { BACKEND_URL } from "../config";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

export const AddContetnModal = ({ modal, onClose }) => {
  const useTitleRef = useRef<HTMLInputElement>();
  const useLinkRef = useRef<HTMLInputElement>();
  const [type, setType] = useState(ContentType.Youtube);
  async function onHandleSubmit() {
    const title = useTitleRef.current?.value;
    const link = useLinkRef.current?.value;
    await axios.post(
      BACKEND_URL + "/api/v1/user/content",
      {
        title,
        link,
        type,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
  }
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
                <input
                  ref={useTitleRef}
                  placeholder="Enter your Title"
                  className="border"
                />
                <input
                  ref={useLinkRef}
                  placeholder="Enter your Link"
                  className="border"
                />
              </div>

              <div>
                <span>Type</span>
                <div className="flex gap-2 mb-2 mt-2">
                  <Button
                    text="YouTube"
                    variant={
                      type === ContentType.Youtube ? "primary" : "secondary"
                    }
                    onClick={() => {
                      setType(ContentType.Youtube);
                    }}
                  ></Button>
                  <Button
                    text="Twitter"
                    variant={
                      type === ContentType.Twitter ? "primary" : "secondary"
                    }
                    onClick={() => {
                      setType(ContentType.Twitter);
                    }}
                  ></Button>
                </div>
              </div>

              <div className="flex justify-center">
                <Button
                  onClick={onHandleSubmit}
                  variant="primary"
                  text="Submit"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
