import './App.css';
// import Greet from './components/greet';
// import Welcome from './components/welcome';
// import Message from './components/message';
//import Counter from './components/counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Form from './components/Form';
function App() {
  return (
    <div className="App">
      <Form />
      {/* <Stylesheet  primary={true} />
      <UserGreeting />
      <NameList /> */}
      {/* <FunctionClick />
      <ClassClick />
      <EventBind />
      <ParentComponent /> */}
      {/* <Counter /> */}
      {/* <Counter />
      <Greet name="Clark"/>
      <Welcome name="Anh Tư"/>  */}
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
