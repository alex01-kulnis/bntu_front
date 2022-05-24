import React, { useState, useEffect } from 'react';
import { Container, Form, Dropdown } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {
  fetchUsers,
  fetchService,
  fetchEmployee,
  fetchEmployeeTransport,
  fetchUserTransport,
  createOrder,
  fetchMarks,
} from '../http/userAPI';

export const CreateOrder = () => {
  const [user, setUser] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [telephone, setTelephone] = useState('');
  const [transport, setTransport] = useState([]);
  const [selectedTransport, setSelectedTransport] = useState(null);
  const [mark, setMarks] = useState([]);
  const [selectedMark, setSelectedMark] = useState(null);
  const [service, setService] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [employee, setEmployee] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employeeTransport, setEmployeeTransport] = useState([]);
  const [selectedEmployeeTransport, setselectedEmployeeTransport] = useState(null);
  const [selectCard, setSelectCard] = useState(null);
  const [date, setDate] = useState('');
  const [result, setResult] = useState('');
  const cards = ['Без скидки', '5%', '10%'];

  useEffect(() => {
    if (!mark.length) {
      fetchMarks().then((data) => setMarks(data));
    }

    if (!user.length) {
      fetchUsers().then((data) => setUser(data));
    }

    if (!service.length) {
      fetchService().then((data) => setService(data));
    }

    if (!employee.length) {
      fetchEmployee().then((data) => setEmployee(data));
    }

    if (!employeeTransport.length) {
      fetchEmployeeTransport().then((data) => setEmployeeTransport(data));
    }

    if (!transport.length) {
      fetchUserTransport().then((data) => setTransport(data));
    }
  }, [mark, user, service, employee, employeeTransport, transport]);

  const click = async () => {
    try {
      await createOrder(
        date,
        selectedUser.id,
        selectedEmployee.id,
        selectedService.id,
        selectedEmployeeTransport.id,
        result,
        selectCard,
        selectedUser.name,
        selectedService.name_service,
        selectedEmployee.FIO,
        selectedEmployeeTransport.goverment_number,
        selectedMark.mark,
        selectedTransport.goverment_number,
        selectedTransport.year_of_issue,
        telephone
      );
      setSelectedUser(null);
      setTelephone('');
      setSelectedTransport(null);
      setSelectedMark(null);
      setSelectedService(null);
      setSelectedEmployee(null);
      setselectedEmployeeTransport(null);
      setSelectCard(null);
      setDate('');
      setResult('');
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ padding: '40px 0px 0px 0px' }}>
      <Card style={{ width: 600 }}>
        <Form className="d-flex flex-column">
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

          <h6 style={{ margin: '15px 0px 0px 0px' }}>Телефон</h6>
          <Form.Control placeholder="Телефон.." onChange={(e) => setTelephone(e.target.value)} value={telephone} />

          <h6 style={{ margin: '15px 0px 0px 0px' }}>Гос. номер</h6>
          <Dropdown style={{ margin: '5px 0px 5px 0px' }}>
            <Dropdown.Toggle>{selectedTransport?.goverment_number || 'Выберите гос. номер'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {transport.map((item) => (
                <Dropdown.Item onClick={() => setSelectedTransport(item)} key={item.id}>
                  {'Номер : ' + item.goverment_number}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <h6 style={{ margin: '15px 0px 0px 0px' }}>Год выпуска</h6>
          <Dropdown style={{ margin: '5px 0px 5px 0px' }}>
            <Dropdown.Toggle>{selectedTransport?.year_of_issue || 'Выберите год выпуска'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {transport.map((item) => (
                <Dropdown.Item onClick={() => setSelectedTransport(item)} key={item.id}>
                  {'Год выпуска : ' + item.year_of_issue}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <h6 style={{ margin: '15px 0px 0px 0px' }}>Марка</h6>
          <Dropdown style={{ margin: '5px 0px 0px 0px' }}>
            <Dropdown.Toggle>{selectedMark?.mark || 'Выберите марку'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {mark.map((item) => (
                <Dropdown.Item onClick={() => setSelectedMark(item)} key={item.id}>
                  {item.mark}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <h6 style={{ margin: '10px 0px 0px 0px' }}>Услуга</h6>
          <Dropdown style={{ margin: '5px 0px 10px 0px' }}>
            <Dropdown.Toggle>{selectedService?.name_service || 'Выберите услугу'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {service.map((item) => (
                <Dropdown.Item onClick={() => setSelectedService(item)} key={item.id}>
                  {item.name_service}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <h6 style={{ margin: '10px 0px 0px 0px' }}>Рабочий</h6>
          <Dropdown style={{ margin: '5px 0px 10px 0px' }}>
            <Dropdown.Toggle>{selectedEmployee?.FIO || 'Выберите рабочего'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {employee.map((item) => (
                <Dropdown.Item onClick={() => setSelectedEmployee(item)} key={item.id}>
                  {item.FIO}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <h6 style={{ margin: '10px 0px 0px 0px' }}>Машина рабочего</h6>
          <Dropdown style={{ margin: '5px 0px 10px 0px' }}>
            <Dropdown.Toggle>{selectedEmployeeTransport?.goverment_number || 'Выберите машину'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {employeeTransport.map((item) => (
                <Dropdown.Item onClick={() => setselectedEmployeeTransport(item)} key={item.id}>
                  {item.goverment_number}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <h6 style={{ margin: '10px 0px 0px 0px' }}>Скидка</h6>
          <Dropdown style={{ margin: '5px 0px 10px 0px' }}>
            <Dropdown.Toggle>{selectCard || 'Выберите скидку'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {cards.map((item) => (
                <Dropdown.Item onClick={() => setSelectCard(item)} key={item}>
                  {item}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <h6 style={{ margin: '10px 0px 0px 0px' }}>Дата</h6>
          <Form.Control className="mt-1" placeholder="Дата.." onChange={(e) => setDate(e.target.value)} value={date} />

          <h6 style={{ margin: '10px 0px 0px 0px' }}>Результат</h6>
          <Form.Control
            className="mt-1"
            placeholder="Результат.."
            onChange={(e) => setResult(e.target.value)}
            value={result}
          />
          <Button style={{ margin: '10px 0px 0px 0px' }} variant={'outline-success'} onClick={click}>
            Создать
          </Button>
        </Form>
      </Card>
    </Container>
  );
};
