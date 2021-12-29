import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrementCount, incrementCount } from './redux/actions/countAction';

function App() {
  const count = useSelector((state) => {
    return state.count.count;
  });

  const dispatch = useDispatch();

  return (
    <section className='container'>
      <h3>Redux Counter App</h3>
      <h4>Total Count : {count}</h4>
      <button onClick={() => dispatch(incrementCount())}>Increment</button>
      <button onClick={() => dispatch(decrementCount())}>Decrement</button>
    </section>
  );
}

export default App;
