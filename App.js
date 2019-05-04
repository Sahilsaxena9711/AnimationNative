import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './src/screens/homeScreen';
import FadeScreen from './src/screens/fadeScreen';
import FadeTranslateScreen from './src/screens/fadeTranslateScreen';
import GestureResponderScreen from './src/screens/gestureResponderScreen';

const App = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Fade: {
    screen: FadeScreen
  },
  FadeTranslate: {
    screen: FadeTranslateScreen
  },
  GestureResponder: {
    screen: GestureResponderScreen
  }
}, {
  initialRouteName: 'Home',
  headerMode: 'none',
});

export default createAppContainer(App)