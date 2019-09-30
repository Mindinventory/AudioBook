import {createStackNavigator} from 'react-navigation';
import Home from "../componenets/home/main";
import SuggestionDetails from "../componenets/details/index";

const AuthStack = createStackNavigator({
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
