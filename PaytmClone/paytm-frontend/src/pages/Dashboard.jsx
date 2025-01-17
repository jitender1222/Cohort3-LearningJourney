import axios from "axios";
import { useEffect, useState } from "react";
import UserList from "../Components/UserList";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const loadAllUsers = async () => {
    const response = await axios.get(
      "http://localhost:3000/api/v1/user/allUsers"
    );
    console.log(response.data.users);
    setData(response.data.users);
  };
  useEffect(() => {
    loadAllUsers();
  }, []);

  return (
    <>
      <UserList data={data} />
      {/* {data.map((items) => (
        <UserList item={items} key={items._id} />
      ))} */}
    </>
  );
};

export default Dashboard;
