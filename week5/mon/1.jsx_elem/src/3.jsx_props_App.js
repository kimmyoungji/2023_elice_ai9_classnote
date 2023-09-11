// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// 1,2
// import React from "react";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <h1 className="title">Hello, React!</h1>
//     </div>
//   );
// }

// export default App;

//3. jsx_props
import React from "react";
import "./App.css";

function App() {
  const name = "Sara";
  return (
    <div className="App">
      <Welcome name={name} />
    </div>
  );
}

function Welcome({ name }) {
  return <h2>Welcome, {name}!</h2>;
}

export default App;