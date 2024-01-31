import NavBar from "./components/NavBar";
import BestSellers from "./components/BestSellers";
import "./index.css"
import Agends from "./components/Agends";
import Slider from './components/Slider'


function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <Slider></Slider>
        
        <main>
            <BestSellers></BestSellers>
            <Agends></Agends>
        </main>
    </div>
  );
}

export default App;
