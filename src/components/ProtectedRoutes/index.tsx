import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../../providers/UserContext';
import { CartProvider } from '../../providers/CartContext';

export const ProtectedRoutes = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to='/' />;
  }

  return (
    <CartProvider>
      <Outlet />
    </CartProvider>
  );
};
