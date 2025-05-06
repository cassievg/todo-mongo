import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { TodoWrapper } from './components/TodoWrapper';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/todo' element={<TodoWrapper />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
