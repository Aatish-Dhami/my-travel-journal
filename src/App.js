import './App.css';
import data from './data';
import Tile from './components/Tile';
import NavBar from './components/NavBar';

function App() {
  const tiles = data.map(item => {
    return (
      <Tile 
          key={item.startDate}
          item={item}
      />
    )
  })
  
  return (
    <div className="App">
      <NavBar src="../images/EarthIcon.png" title="my travel journal."/>
      {tiles}
    </div>
  );
}

export default App;
