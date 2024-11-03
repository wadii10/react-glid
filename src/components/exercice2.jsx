// import './App.css';
// import { useState } from 'react';



// function App() {

//   const [nom, setNom] = useState("enter name");
//   const [list, setList] = useState([]);

//   const add = () => {
//     setList([...list, nom]);
//     setNom("");
//   }

//   const Display = ({props}) => {
//     return props.map( (el) => <h2> {el} </h2> )
//     // composant fils
//   }

//   return (
//     <div className="App">
//       <input type="text" value={nom} onChange={(e) => setNom(e.target.value)}/>
//       <Display props = {list} />
//       <button onClick={add}>+</button>
//     </div>
//   );
// }

// export default App;
