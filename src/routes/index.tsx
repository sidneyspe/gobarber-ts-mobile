import React from 'react';
import LoadingPage from '../components/LoadingPage';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import { useAuth } from '../hooks/auth';

const Routes: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingPage />;
  }

  return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
