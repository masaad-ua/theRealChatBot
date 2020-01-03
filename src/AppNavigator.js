import {StackNavigator, TabNavigator} from 'react-navigation'
import Main from './screens/Main'

const AppNavigator =  StackNavigator({
    main: {
        screen: Main
    }
});

export default AppNavigator