import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrementCount, incrementCount } from './redux/actions/countAction';

function App() {
  const count = useSelector((state) => {
    return state.count.count;
  });

  const dispatch = useDispatch();

  const handelDecrement = () => {
    if (count > 0) {
      dispatch(decrementCount(1));
    }
  };

  return (
    <section className='container'>
      <h3>Redux Counter App</h3>
      <h4>Total Count : {count > 0 ? count : 0}</h4>
      <button onClick={() => dispatch(incrementCount(1))}>Increment</button>
      <button onClick={handelDecrement}>Decrement</button>
    </section>
  );
}

export default App;
