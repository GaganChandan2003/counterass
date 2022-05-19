
import './App.css';
import {Counter} from "./components/Counter.jsx";
let i=100;
function App() {
  return (
    <>
    <div className='App'>
      <Counter intialValue={i}/>
    </div>
    
    </>
   
  );
}

export default App;
