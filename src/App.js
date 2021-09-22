import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import GlobalStyle from "./GlobalStyles";
import Cart from './components/Cart'
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartContext } from './context/CartContext'

function App() {
  const [desplegado, setDesplegado] = useState(false)

  const handleDesplegado = () => { setDesplegado(!desplegado) }
  return (
    <>
      <CartContext.Provider value={null}>
        <BrowserRouter>
          <GlobalStyle/>
          <NavBar handle={ handleDesplegado }/>
          <SideBar value={ desplegado } handle={ handleDesplegado }/>
          <Switch>
            <Route exact path="/">
              <ItemListContainer/>
            </Route>
            <Route path="/category/:idCategory">
              <ItemListContainer/>
            </Route>
            <Route path="/detail/:idItem">
              <ItemDetailContainer/>
            </Route>
            <Route path="/cart">
              <Cart/>
            </Route>
          </Switch>
        </BrowserRouter>
      </CartContext.Provider>
    </>
  );
}

export default App;