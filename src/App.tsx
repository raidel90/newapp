import React from 'react';
import Conference from './Conference';
import Home from './Home';
import Sessions from './Sessions';
import Speakers from './Speakers';
import Story from './Story';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Conference" component={Conference} />
          <Stack.Screen name="Story" component={Story} />
          <Stack.Screen name="Sessions" component={Sessions} />
          <Stack.Screen name="Speakers" component={Speakers} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
