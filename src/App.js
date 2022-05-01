import Dashboard from './Dashboard';
import Indetails from './Indetails';
import './App.css';
import {Route,Routes} from "react-router-dom";

function App() {
 
  return (
    <>
    
    <Routes>
    <Route path='/' element={<Dashboard/>}/>
    <Route path='/indetails/:title' element={<Indetails/>}/>
    </Routes>
    </>
  );
}

export default App;
