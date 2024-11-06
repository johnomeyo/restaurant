import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FoodDetailsPage from './food_details.jsx';
import Homepage from './homepage.jsx';


const Stack = createNativeStackNavigator();
const App = () => {
    return (

        <Stack.Navigator initialRouteName='Home' screenOptions={{
            headerStyle: { backgroundColor: '#F5F5F5',height: 100,   }, // Set the global app bar background color
            headerShadowVisible: false,
            headerTitle: '',
            headerShown: false,
        }}>
            <Stack.Screen name="home" component={Homepage} />
            <Stack.Screen name="details" component={FoodDetailsPage} />
        </Stack.Navigator>
    );
};


export default App;
