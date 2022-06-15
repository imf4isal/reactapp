import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import Section from "./components/Section";


function App() {
  return (
    <div>
      <Counter> 
        {(count, incrementCount) => (<ClickCounter count = {count} incrementCount = {incrementCount} />)}
      </Counter>

      {/* {(count, incrementCount) => (<ClickCounter count = {count} incrementCount = {incrementCount} />)}  */}
      <Provider value={} > <Section /> </Provider>
    </div>
  );
}

export default App;
