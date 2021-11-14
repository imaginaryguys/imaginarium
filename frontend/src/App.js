import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Appbar from './components/Appbar';
import Editor from './pages/Editor';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/create" element={<Editor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
