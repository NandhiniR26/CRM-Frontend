// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// // import { useSelector } from 'react-redux'; // Import useSelector
// // import Navbar from './components/Navbar';
// // import Login from './components/Login';
// // import Signup from './components/Signup';

// // const App = () => {
// //   const { token } = useSelector((state) => state.auth); // Use useSelector

// //   return (
// //     <Router>
// //       <Navbar />
// //       <div className="container">
// //         <Routes>
// //           <Route path="/login" element={<Login />} />
// //           <Route path="/signup" element={<Signup />} />
// //           <Route path="/dashboard" element={token ? <h2>Dashboard</h2> : <Navigate to="/login" />} />
// //           <Route path="/" element={<Navigate to="/login" />} />
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // };

// // export default App;

// // src/App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import Dashboard from './components/Dashboard';
// import Navbar from './components/Navbar';
// import './App.css';  // Custom styles if necessary

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <div className="container mt-4">
//         <Routes>
//           <Route path="/" element={<Navigate to="/login" />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;





