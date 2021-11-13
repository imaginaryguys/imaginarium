import './App.css';
import Appbar from './components/Appbar';
import Editor from './pages/Editor';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Appbar />
      <Editor />
      {/* <Home /> */}
    </div>
  );
}

export default App;
