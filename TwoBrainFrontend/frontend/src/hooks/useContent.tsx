import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export function useContent() {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    axios
      .get(BACKEND_URL + "/api/v1/user/allContent", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((data) => {
        setContents(data.data.content);
      });
  }, []);
  return contents;
}