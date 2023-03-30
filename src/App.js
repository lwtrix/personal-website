import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from './views/main/Main';
import NotFound from './views/notfound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
