// import React, { useState } from 'react';
// import "../Component/Navbar.css";
// import { FaBars } from 'react-icons/fa';

// const Navbar = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');


//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     // Perform search functionality with searchQuery
//     console.log('Search submitted:', searchQuery);
//     // Clear the search query
//     setSearchQuery('');
//   };

//   // const handleMenuClick = () => {
//   //   setMenuOpen(!isMenuOpen);
//   // };

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="navbar">
//       {/* <div className="navbar-brand">
//         <a href="/">Taxi Service App</a>
//       </div> */}
//       <div className="menu-icon" onClick={toggleMenu}>
//         <FaBars className='hamburger-icon' />
//       </div>
//       {/* <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
//         <li className="menu-item">Home</li>
//         <li className="menu-item">About</li>
//       </ul> */}

//       {/* <div className={`navbar-menu`}>
//         <ul>
//           <li><a href="/">Home</a></li>
//           <li><a href="/book">Book a Ride</a></li>
//           <li><a href="/history">Ride History</a></li>
//           <li><a href="/profile">Profile</a></li>
//         </ul>
//       </div> */}
//       <form className="navbar-search" onSubmit={handleSearchSubmit}>
//         <input
//           type="text"
//           placeholder="Search"
//           value={searchQuery}
//           onChange={handleSearchChange}
//         />
//         <button type="submit">Search</button>
//       </form>

//       {/* <div className="hamburger-menu" onClick={handleMenuClick}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div> */}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';

function App() {
  const [isContentVisible, setContentVisible] = useState(false);

  const toggleContent = () => {
    setContentVisible(!isContentVisible);
  };

  return (
    <div>
      <button onClick={toggleContent}>Toggle Content</button>
      {isContentVisible && (
        <div>
          <p>This is some hidden content.</p>
        </div>
      )}
    </div>
  );
}

export default App;

