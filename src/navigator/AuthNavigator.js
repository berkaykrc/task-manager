// src/navigator/AuthNavigator.js
import { createStackNavigator } from '@react-navigation/stack';
import { AuthScreen } from '../screens';

const Stack = createStackNavigator();

function AuthNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Auth" component={AuthScreen} />
        </Stack.Navigator>
    );
}

export default AuthNavigator;