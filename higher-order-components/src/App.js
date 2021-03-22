import './App.css';
import ClickCounter from './component/ClickCounter';
import HoverCounter from './component/HoverCounter';

function App() {
  return (
    <div className="App">
      <ClickCounter name="TrongNhan" />
      <HoverCounter />
    </div>
  );
}

export default App;
