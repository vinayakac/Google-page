// import logo from './logo.svg';

// import Figma from './component/figma.js'
// import Header from './component/Header/Header.js'
// impo
import Header from './component/Header/Header.js';
import Body from './component/Body/Body.js';
import Footer from './component/Footer/Footer.js';

function App() {
  return (
    <div className='page-container'>
      <div className='menu-layout'>
        <Header />
        <Body />
        <Footer />

      </div>
      
    </div>
    
  );
}

export default App;
