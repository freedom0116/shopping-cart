import './App.css';
import Players from'./components/players/Players'
import data from './data.json'

function App() {
  return (
    <div className="App">
      <header className="header">
        FantasyTW simulator
      </header>
      <body>
        <Players data={data} />
      </body>
    </div>
  );
}

export default App;
