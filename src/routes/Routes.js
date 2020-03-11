import Login from '../views/login/Index';
import Home from '../views/home/Index';
import Search from '../views/search/Index';

export const MainRoutes = [
  {
    path: '/',
    exact: true,
    component: Login,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/search',
    component: Search,
  },
];
