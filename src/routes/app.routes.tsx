import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';

const App = createStackNavigator();

const appScreenOption = {
  headerShown: false,
  cardStyle: { backgroundColor: '#312e38' },
};

const AppRoutes: React.FC = () => (
  <>
    <App.Navigator screenOptions={appScreenOption}>
      <App.Screen name="Dashboard" component={Dashboard} />
    </App.Navigator>
  </>
);

export default AppRoutes;
