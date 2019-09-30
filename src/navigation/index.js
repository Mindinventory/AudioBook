import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Auth from './AuthNavigator';

export default createAppContainer(
    createSwitchNavigator(
        {
            Auth,
        },
        {
            initialRouteName: 'Auth',
        },
    ),
);
