import logo from './logo.svg';
import './App.css';
import './Components/Taskone.css';
import './Components/Tasktwo.css';
import './Components/Taskthree.css';
import Taskone from './Components/Taskone';
import Tasktwo from './Components/Tasktwo';
import Taskthree from './Components/Taskthree';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
    <Taskone/>
    <Tasktwo/>
    <Taskthree/>
    </>
  );
}

export default App;
