import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';

const Auth = createStackNavigator();

const authScreenOption = {
  headerShown: false,
  cardStyle: { backgroundColor: '#312e38' },
};

const AuthRoutes: React.FC = () => (
  <>
    <Auth.Navigator screenOptions={authScreenOption}>
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
  </>
);

export default AuthRoutes;
