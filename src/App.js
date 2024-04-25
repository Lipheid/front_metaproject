import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main.js'
import Chatbot from './pages/Chatbot.js'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path='/chatbot' element={<Chatbot/>}/>
      </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
