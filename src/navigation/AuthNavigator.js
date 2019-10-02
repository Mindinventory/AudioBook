import {createStackNavigator} from 'react-navigation';
import {createFluidNavigator} from 'react-navigation-fluid-transitions';
import Home from "../componenets/home/main";
import SuggestionDetails from "../componenets/details/index";

const AuthStack = createFluidNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
        },
    },
    SuggestionDetails: {
        screen: SuggestionDetails,
        navigationOptions: {
            header: null,
        },
    }
}, {
    initialRouteName: 'Home'
});

export default AuthStack;
