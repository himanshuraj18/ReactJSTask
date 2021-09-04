import Card from "./Components/CardHolder.js"
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";

function App() {
  // const location = useLocation();
  const id = getID();
  console.log(id);
  return fecthPrint(id);
}

function getID(){
  let val =  window.location.href.split('/');
  let id = 1;
  for (let i = val.length; i >= 1; i--) {
    if(val[i-1] == 'comments'){
      id = Number(val[i]);
    }
  }
  return id;
}

function fecthPrint(cmnt_id){
  return (
    <>
      <Card id={cmnt_id}/>
    </>
  );
}

export default App;

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// import Card from "./Components/CardHolder.js"

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/ab">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/ab">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Users />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return fecthPrint('1');
// }

// function About() {
//   return fecthPrint('2');
// }

// function Users() {
//   return fecthPrint('3');
// }

// function fecthPrint(cmnt_id){
//   console.log(cmnt_id);
//   return (
//     <>
//       <Card />
//     </>
//   );
// }