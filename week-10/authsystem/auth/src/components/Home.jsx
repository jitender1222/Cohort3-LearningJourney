import "../App.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Auth System Demo</h1>
      <p className="para">
        THis demo showcase two approaches to managing authentication state in
        react:
      </p>
      <li>State Lifting</li>
      <li>Context Api</li>
      <p className="para">
        Use Toggle above to switch between the two approaches
      </p>
    </div>
  );
};

export default Home;
