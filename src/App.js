import { Usuario } from './components/Usuario/Usuario';
import { Card } from './components/Card/Card';


function App() {
  return (
    <div className="App">
      <Usuario nombre="Santiago" edad={19} nacionalidad="Aregentina"/>
      <Usuario nombre="David" edad={33} nacionalidad="Britanico"/>
      <Usuario nombre="Sofia" edad={58} nacionalidad="Italiana"/>
     <Card/>
    </div>
  );
}

export default App;
