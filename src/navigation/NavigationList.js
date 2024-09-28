import Home from '../screens/home/Home';
import Help from '../screens/help/Help';
import Login from '../screens/login/Login';

export default [
  {
    name: 'Login',
    options: { headerShown: false },
    component: Login,
    // flavour: [],
  },
  {
    name: 'Home',
    options: { headerShown: false },
    component: Home,
    // flavour: [],
  },
  {
    name: 'Help',
    options: { headerShown: false },
    component: Help,
    // flavour: [],
  },
];
