import './App.css';
import { AllProducts } from './Components/AllRoutes';
import { Navbar } from './Components/Navbar';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <AllProducts/>
    </div>
  );
}

export default App;