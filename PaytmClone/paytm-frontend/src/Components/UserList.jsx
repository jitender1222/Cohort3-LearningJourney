import axios from "axios";
import { useEffect, useState } from "react";

const UserList = () => {
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState(data);
  const [name, setName] = useState();
  const [bal, setBalance] = useState();

  const loadAllUsers = async () => {
    const res = await axios.get(
      "http://localhost:3000/api/v1/user/allUser?showData=" + showData,
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    setBalance(res.data.balance);
    setName(res.data.name);
    setData(res.data.users);
  };

  useEffect(() => {
    loadAllUsers();
  }, [showData]);
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className=" bg-white text-black w-[80%] p-10 rounded-md">
        <div className="flex justify-between font-bold font-sans">
          <h1>Payments App</h1>
          <span>Hello,{name}</span>
        </div>
        <div className="mt-4">
          <span className="font-bold">
            Your Balance: <span className="font-medium">{bal}</span>
          </span>
          <p className="mt-4 font-semibold">Users</p>
        </div>
        <div>
          <input
            onChange={(e) => setShowData(e.target.value)}
            className="border w-full p-1 rounded-md mt-2"
            placeholder="search user..."
          />
          <div className="mt-4 flex justify-between">
            <div className="flex gap-4 font-bold flex-col w-full ">
              {data.length === 0 ? (
                <div className="text-center text-4xl text-gray-400">
                  Sorry! No User Found 😞
                </div>
              ) : (
                <>
                  {data.map((items) => (
                    <div
                      key={items._id}
                      className=" flex justify-between hover:bg-gray-400 p-2 cursor-pointer rounded-lg hover:transition-all "
                    >
                      <div className="flex justify-between gap-4 items-center">
                        <span className="rounded-full px-3 py-2 bg-gray-200">
                          {items.username.toUpperCase().charAt(0)}
                        </span>
                        <span>{items.username}</span>
                      </div>
                      <div>
                        <button className="bg-black p-2 text-white rounded-lg">
                          Send Money
                        </button>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
