import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShopPage from './pages/ShopPage';
import { ProtectedRoutes, index } from './components/ProtectedRoutes';

const Router = () => (
  <Routes>
    <Route path='/' element={<LoginPage />} />
    <Route path='/register' element={<RegisterPage />} />

    <Route element={<ProtectedRoutes />}>
      <Route path='/shop' element={<ShopPage />} />
    </Route>
  </Routes>
);

export default Router;
