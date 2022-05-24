import { CreateUser } from './pages/CreateUser';
import { CreateOrder } from './pages/CreateOrder';
import { CreateTransport } from './pages/CreateTransport';
import Order from './pages/Order';
import { ORDER_ROUTE, CREATE_ORDER_ROUTE, CREATE_USER_ROUTE, CREATE_СAR_ROUTE } from './utils/consts';

export const publicRoutes = [
  { path: ORDER_ROUTE, Component: Order },
  { path: CREATE_ORDER_ROUTE, Component: CreateOrder },
  { path: CREATE_USER_ROUTE, Component: CreateUser },
  { path: CREATE_СAR_ROUTE, Component: CreateTransport },
];

export const authRoutes = [];
