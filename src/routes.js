import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SignIn from './pages/signIn';
import Main from './pages/main';

const Routes = createStackNavigator({SignIn, Main});

export default createAppContainer(Routes);
