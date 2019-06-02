import React from 'react';
import logo from './logo.svg';
import './App.css';
import {joinGame} from './utils/game-client'

function App() {
  const [id, setId] = React.useState(0)
  const [name, setName] = React.useState(null)
  const [players, setPlayers] = React.useState(null)
  const [joined, setJoined] = React.useState(false)

  function callback({type, payload}) {
    console.log('type', type)
  }

  const handleJoin = () => joinGame(name, callback)

  return (
    <div className="App">
      <input type="text" onChange={e => setName(e.target.value)} disabled={joined} />
      <button disabled={name === null} onClick={handleJoin}>Join Game</button>
    </div>
  );
}

export default App;
