import React, { useState, useEffect } from 'react';
import { Container, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { createUser } from '../http/userAPI';
import { fetchUsers } from '../http/userAPI';

export const CreateUser = () => {
  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [mark, setMark] = useState('');
  const [year, setYear] = useState('');
  const [number, setNumber] = useState('');

  const [user, setUser] = useState([]);
  useEffect(() => {
    if (!user.length) {
      fetchUsers().then((data) => setUser(data));
    }
  }, [user]);

  const click = async () => {
    try {
      await createUser(name, telephone, mark, year, number);
      setName('');
      setTelephone('');
      setMark('');
      setYear('');
      setNumber('');
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ padding: '40px 0px 0px 0px' }}>
      <Card style={{ width: 600 }}>
        <Form m className="d-flex flex-column">
          <h3 className="m-auto">Создать клиента</h3>

          <h6 style={{ margin: '15px 0px 5px 0px' }}>Клиент</h6>
          <Form.Control className="mt-1" placeholder="Имя..." onChange={(e) => setName(e.target.value)} value={name} />

          <h6 style={{ margin: '15px 0px 5px 0px' }}>Телефон</h6>
          <Form.Control
            className="mt-1"
            placeholder="Телефон..."
            onChange={(e) => setTelephone(e.target.value)}
            value={telephone}
            style={{ margin: '0px 0px 10px 0px' }}
          />

          <h5 style={{ margin: '15px 0px 0px 0px' }} className="m-auto">
            Машина
          </h5>
          <h6 style={{ margin: '0px 0px 5px 0px' }}>Марка</h6>
          <Form.Control
            value={mark}
            onChange={(e) => setMark(e.target.value)}
            className="mt-1"
            placeholder="Марка..."
          />

          <h6 style={{ margin: '15px 0px 5px 0px' }}>Год выпуска</h6>
          <Form.Control
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="mt-1"
            placeholder="Год выпуска..."
          />

          <h6 style={{ margin: '15px 0px 5px 0px' }}>Гос. номер</h6>
          <Form.Control
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="mt-1"
            placeholder="Гоc. номер..."
          />

          <Button style={{ margin: '15px 0px 0px 0px' }} variant={'outline-success'} onClick={click}>
            Создать
          </Button>
        </Form>
      </Card>
    </Container>
  );
};
