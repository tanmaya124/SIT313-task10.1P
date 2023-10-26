import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Signup from './signup';
import Login from './login';
import './App.css';
import TopBar from './navigation';
import Subscription from './components/Subscription/NewsLetter'

function App() {
  return (
    // <Bar/>
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopBar/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
      </Routes>
      <Subscription/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;