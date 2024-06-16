import React from 'react'
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './style.module.css';

export default function Auth() {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  
  return (
    <Container className={styles.container} style={{ height: window.innerHeight - 54 }}>
      <Card className={styles.card}>
        <h2 className={styles.title}>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className={styles.from}>
          <Form.Control
            className={styles.input}
            placeholder='Введите ваш email'
          />
          <Form.Control
            className={styles.input}
            placeholder='Введите ваш пароль'
          />
          <Row>
            {isLogin ? 
              <div className={styles.block_registration}>
                <span> Нет аккаунта?</span><NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
              </div>
             :
              <div className={styles.block_registration}>
                <span> Есть аккаунта?</span><NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
              </div>
            }
            <div className={styles.block_button}>
              <Button className={styles.button} variant={'outline-success'}>
                {isLogin ? 'Войти' : 'Регистрация'}
              </Button>
            </div>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};