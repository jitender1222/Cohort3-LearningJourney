import "./App.css";
import Form from "./component/Form";
import Header from "./component/Header";
import { BrowserRouter } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Form />
      </BrowserRouter>
    </>
  );
}

export default App;
