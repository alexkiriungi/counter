import { useDispatch, useSelector } from "react-redux";
import increment from "./actions/increment";
import decrement from "./actions/decrement";

function App() {
  const value = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment)
  };

  const handleDecrement = () => {
    dispatch(decrement)
  };
  
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default App;
