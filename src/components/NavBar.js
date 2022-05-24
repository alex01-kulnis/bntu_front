import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { CREATE_USER_ROUTE, CREATE_ORDER_ROUTE, ORDER_ROUTE, CREATE_СAR_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const NavBar = observer(() => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 50 }}>
      <Container>
        <Nav className="ml-auto">
          <Link style={{ color: 'white', margin: ' 0px 24px 0px 0px ' }} to={ORDER_ROUTE}>
            Заказы
          </Link>
          <NavLink style={{ color: 'white', margin: ' 0px 24px 0px 0px ' }} to={CREATE_ORDER_ROUTE}>
            Создать заказ
          </NavLink>
          <NavLink style={{ color: 'white', margin: ' 0px 24px 0px 0px ' }} to={CREATE_USER_ROUTE}>
            Добавление клиента
          </NavLink>
          <NavLink style={{ color: 'white', margin: ' 0px 24px 0px 0px ' }} to={CREATE_СAR_ROUTE}>
            Добавление машины
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
});

export default NavBar;
