// import logo from './logo.svg';
import './App.css';
import Award from './Component/Award.jsx'
import Contact from './Component/Contact'
import Footer from './Component/Footer'

function App() {
  return (
    <div className="App">
      <div>
        <Award></Award>
      </div>
      <div>
        <Contact></Contact>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
