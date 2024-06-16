import React, { useContext } from 'react'
import { SHOP_ROUTE } from '../../utils/consts';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Button, Container } from 'react-bootstrap';
import { Context } from '../..';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styles from './style.module.css';

function NavBar() {
  const { user } = useContext(Context);
  const login = () => user.setIsAuth(true);

  return (
    <Navbar bg="dark" data-bs-theme="dark" className={styles.container}>
      <Container>
        <NavLink className={styles.link_logo} to={SHOP_ROUTE}>Shop</NavLink>
        {user._isAuth ?
        <Nav className={styles.block_links}>
            <Button variant={"outline-light"}>Админ панель</Button>
            <Button variant={"outline-light"}>Выйти</Button>
        </Nav>
        :
        <Nav className={styles.block_links}>
            <Button onClick={login} variant={"outline-light"}>Авторизация</Button>
        </Nav>
        }
      </Container>
    </Navbar>
  );
};

export default observer(NavBar);