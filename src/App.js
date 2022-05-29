
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Route,Routes,} from "react-router-dom";
import Home from "../src/components/Home/Home"
import About from "../src/components/About/About"
import Employees from "../src/components/Employess/Employees"
import Stocks from "../src/components/Stocks/Stocks"
import EmployeeDetails from './components/Employess/EmployeeDetails';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path ="/" element = {<Home/>} />
          <Route exact path ='/about' element = {<About/>} />
          <Route exact path = '/employess' element = {<Employees/>} />
          <Route exact path = '/employess/:id' element = {<EmployeeDetails/>} />
          <Route exact path ='/about' element = {<About/>} />
          <Route exact path ='/stocks' element = {<Stocks/>} />
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
