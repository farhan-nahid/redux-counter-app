import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrementCount, incrementCount } from './redux/actions/countAction';

function App() {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.count.count);

  return (
    <section className='container'>
      <h3>Redux Counter App</h3>
      <h4>Total Count : {count}</h4>
      <button onClick={() => dispatch(incrementCount(1))}>Increment</button>
      <button onClick={() => count && dispatch(decrementCount(1))}>Decrement</button>
    </section>
  );
}

export default App;
