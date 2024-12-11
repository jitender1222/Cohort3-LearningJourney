const Table = ({ data }) => {
  return (
    <>
      <div className="outer-table">
        <table>
          <thead>
            <tr className="head-table">
              <th>Pet Name</th>
              <th>Pet Type</th>
              <th>Your Name</th>
              <th>Email</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr className="table-item" key={index}>
                <td className="item">{item.name}</td>
                <td className="item">{item.petType}</td>
                <td className="item">{item.yourName}</td>
                <td className="item">{item.email}</td>
                <td className="item">{item.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
