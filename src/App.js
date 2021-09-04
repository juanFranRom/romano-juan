import { useState } from "react";
import Body from "./components/Body";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import GlobalStyle from "./GlobalStyles";

function App() {
  const [desplegado, setDesplegado] = useState(false)

  const handleDesplegado = () => { setDesplegado(!desplegado) }
  return (
    <>
      <GlobalStyle/>
      <NavBar handle={ handleDesplegado }/>
      <SideBar value={ desplegado } handle={ handleDesplegado }/>
      <Body/>
    </>
  );
}

export default App;
