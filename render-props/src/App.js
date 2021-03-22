import './App.css';
import Counter from './components/Counter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <Counter render={(count, incrementCount) => (
        <ClickCounterTwo count={count} incrementCount={incrementCount} />
      )} >
      </Counter>
      <Counter render={(count, incrementCount) => (
        <HoverCounterTwo count={count} incrementCount={incrementCount} />
      )} />
      < User>
        {(isLoggedIn) => isLoggedIn ? 'Vishwas' : 'Gues'}
      </ User>
    </div>
  );
}

export default App;
