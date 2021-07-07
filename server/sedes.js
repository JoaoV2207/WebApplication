import './sedes.css';
import { useState } from "react";

function App() {
  const [ID, setID] = useState("");
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");

  return (
    <div className="App">
      <div className="infos">
        <label>ID:</label>
        <input type="number" onChange={(event) => {
          setID(event.target.val);
          }} 
        />
        <label>Nome:</label>
        <input type="text" onChange={(event) => {
          setName(event.target.val);
          }} 
        />
        <label>Endereço:</label>
        <input type="text" onChange={(event) => {
          setAdress(event.target.val);
          }} 
        />
        <button onClick={displayInfo}> Adicionar sede</button>
      </div>
    </div>
  );
}

export default App;
