import { useState } from "react";
import "../App.css";
import axios from "axios";
import { useEffect } from "react";

const FetchUser = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (count) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://randomuser.me/api?page=${count}&results=4`
      );
      console.log(response);
      if (response) {
        setLoading(false);
        setUsers([...users, ...response.data.results]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMoreUser = () => {
    setCount(count + 1);
    fetchData(count);
  };
  return (
    <>
      <div className="outer">
        <div className="inner">
          {loading ? (
            <span className="loader">Please Wait ....</span>
          ) : (
            <>
              {users.map((data, index) => (
                <div className="users" key={index}>
                  <p>
                    <img src={data.picture.large} />
                  </p>
                  <p>{data.name.first}</p>
                </div>
              ))}
            </>
          )}
        </div>
        <div>
          {loading ? (
            ""
          ) : (
            <button onClick={fetchMoreUser} className="btn">
              Load More
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default FetchUser;
