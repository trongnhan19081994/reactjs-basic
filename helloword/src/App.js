import './App.css';
import Greet from './components/greet';
import Welcome from './components/welcome';
import Message from './components/message';
import Counter from './components/counter';
function App() {
  return (
    <div className="App">
      <Counter />
      <Greet name="Clark"/>
      <Welcome name="Anh Tư"/> 
      {/* <Message />
      <Greet name="Bruce"> 
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark"/>
      <Greet name="Dania"/>
      <Welcome name="Anh Hai"/>
      <Welcome name="Anh Ba"/>
     */}
    </div>
  );
}

export default App;
