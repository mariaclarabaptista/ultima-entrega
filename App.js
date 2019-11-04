
import LoginScreen from './screens/Login/login';
import CadastroScreen from './screens/Cadastro/cadastro';

import { createAppContainer, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator({
    Login: LoginScreen,
    Cadastro: CadastroScreen
  })
);

export default Routes;