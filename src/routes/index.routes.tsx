import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/Login';
import ButtomRoutes from './buttom.routes';
import Cadastro from '../pages/Cadastro';

export default function Routes() {
    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name='Login'
                component={Login}
            />
            <Stack.Screen
                name='Cadastro'
                component={Cadastro}
            />
            <Stack.Screen
                name='ButtomRoutes'
                component={ButtomRoutes}
            />
        </Stack.Navigator>
    )
}