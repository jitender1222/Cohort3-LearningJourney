import { RecoilRoot } from "recoil";
import EvenOdd from "./components/EvenOdd";
import EvenVal from "./components/EvenVal";
import Counter from "./components/Counter";

function App() {
  return (
    <RecoilRoot>
      <Counter />
      <EvenOdd />
      <EvenVal />
    </RecoilRoot>
  );
}

export default App;
