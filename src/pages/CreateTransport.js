import React, { useState, useEffect } from 'react';
import { Container, Form, Dropdown } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { fetchUsers, createTransport } from '../http/userAPI';

export const CreateTransport = () => {
  const [mark, setMark] = useState('');
  const [year, setYear] = useState('');
  const [number, setNumber] = useState('');

  const [user, setUser] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    if (!user.length) {
      fetchUsers().then((data) => setUser(data));
    }
  }, [user]);

  const addCar = async () => {
    try {
      const data = await createTransport(selectedUser.id, mark, year, number);
      alert(data);
      setSelectedUser(null);
      setMark('');
      setYear('');
      setNumber('');
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ padding: '40px 0px 0px 0px' }}>
      <Card style={{ width: 600, margin: '0px 0px 0px 20px' }}>
        <Form m className="d-flex flex-column">
          <h3 className="m-auto">Добавить машину клиенту</h3>

          <h6 style={{ margin: '15px 0px 0px 0px' }}>Клиент</h6>
          <Dropdown style={{ margin: '5px 0px 0px 0px' }}>
            <Dropdown.Toggle>{selectedUser?.name || 'Выберите клиента'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {user.map((item) => (
                <Dropdown.Item onClick={() => setSelectedUser(item)} key={item.id}>
                  {item.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

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

          <Button style={{ margin: '15px 0px 0px 0px' }} variant={'outline-success'} onClick={addCar}>
            Добавить
          </Button>
        </Form>
      </Card>
    </Container>
  );
};
