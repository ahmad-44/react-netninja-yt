import './App.css';
import Navbar from './Navbar'
import Home from './Home'

function App() {
  const title = "Welcome to the new blog";
  const likes = 100;
// Booleans and Objects can not be passed into JSX {}
  return (
    <div className="App">
      <Navbar />
      <div className="content">
      <Home />
      </div>
    </div>
  );
}

export default App;
