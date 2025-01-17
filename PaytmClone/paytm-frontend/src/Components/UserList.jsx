const UserList = ({ data }) => {
  console.log("user", data);
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className=" bg-white text-black w-[80%] p-10 rounded-md">
        <div className="flex justify-between font-bold font-sans">
          <h1>Payments App</h1>
          <span>Hello,User</span>
        </div>
        <div className="mt-4">
          <span className="font-bold">
            Your Balance: <span className="font-medium">$50000</span>
          </span>
          <p className="mt-4 font-semibold">Users</p>
        </div>
        <div className="">
          <input
            className="border w-full p-1 rounded-md mt-2"
            placeholder="search user..."
          />
          <div className="mt-4 flex justify-between">
            <div className="flex gap-4 font-bold flex-col w-full ">
              {data.length === 0 ? (
                <div>Loading the users ... </div>
              ) : (
                <>
                  {data.map((items) => (
                    <div className=" flex justify-between">
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
