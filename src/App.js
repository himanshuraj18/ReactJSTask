import Card from "./Components/CardHolder.js"
import './App.css';

function App() {
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