import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'

function App() {
  return (
    <div>
      <Header />
      <h1>My Health</h1>
    </div>
  );
}

export default App;
