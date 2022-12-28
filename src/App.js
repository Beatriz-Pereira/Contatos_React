import React from "react";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Contacts from "./components/pages/Contacts";
import NewContact from "./components/pages/NewContact";
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar title = "Contatos"/>
      <div className="card">
        <Button key="Novo"      name="Novo"      link = "NewContact"/>
        <Button key="Contatos"  name="Contatos"  link = "Contacts"/>
        <Button key="Favoritos" name="Favoritos"/>

        <Routes>
          <Route path="NewContact" element={<NewContact />} />
          <Route path="Contacts" element={<Contacts />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
