
import './App.css';
import Intro from "./components/Intro";
import About from "./components/About.jsx";
import ProductList from "./components/ProductList";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
        <Intro />
        <About />
        <ProductList />
        <Contact />
    </div>
  );
}

export default App;
