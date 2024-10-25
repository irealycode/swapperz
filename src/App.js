import { Route, BrowserRouter, Routes } from 'react-router-dom';
import NN from './code/404';
import Home from './code/home';
import Login from './code/login';
import Make from './code/offering/make';
import Register from './code/register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
        <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="make" element={<Make />} />
          <Route path="*" element={<NN />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
