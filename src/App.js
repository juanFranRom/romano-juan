import './App.css'
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer';

function App() {
  return (
    <>
      <section className="header">
        <NavBar/>
      </section>
      <section className="body">
        <ItemListContainer greeting="HOLI!" />
      </section>
    </>
  );
}

export default App;
