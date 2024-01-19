import { useSelector } from "react-redux";

function App() {
  const value = useSelector((state) => state.value);
  return (
    <div>
      <h1>{value}</h1>
      <button>increment</button>
      <button>Decrement</button>
    </div>
    
  );
};

export default App;
