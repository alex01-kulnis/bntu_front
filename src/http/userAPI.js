import { $host } from './index';

export const fetchOrders = async () => {
  const { data } = await $host.get('/api/order');
  return data;
};

export const fetchMarks = async () => {
  const { data } = await $host.get('/api/marks');
  return data;
};

export const fetchUsers = async () => {
  const { data } = await $host.get('/api/users');
  return data;
};

export const fetchService = async () => {
  const { data } = await $host.get('/api/services');
  return data;
};

export const fetchEmployee = async () => {
  const { data } = await $host.get('/api/employee');
  return data;
};

export const fetchEmployeeTransport = async () => {
  const { data } = await $host.get('/api/transport-empoyee');
  return data;
};

export const fetchUserTransport = async () => {
  const { data } = await $host.get('/api/transport-user');
  return data;
};

export const createOrder = async (
  date,
  UserId,
  EmployeeId,
  ServiceId,
  EmployeeTransportId,
  result,
  card,
  user,
  service,
  employee,
  employeeTransport,
  mark,
  goverment_number,
  year_of_issue,
  telephone
) => {
  const { data } = await $host.post('/api/create-order', {
    date,
    UserId,
    EmployeeId,
    ServiceId,
    EmployeeTransportId,
    result,
    card,
    user,
    service,
    employee,
    employeeTransport,
    mark,
    goverment_number,
    year_of_issue,
    telephone,
  });
  return data;
};

export const createUser = async (name, telephone, mark, year_of_issue, goverment_number) => {
  const { data } = await $host.post('/api/create-user', {
    name,
    telephone,
    mark,
    year_of_issue,
    goverment_number,
  });
  return data;
};

export const createTransport = async (user, mark, year_of_issue, goverment_number) => {
  const { data } = await $host.post('/api/create-transport-user', {
    user,
    mark,
    year_of_issue,
    goverment_number,
  });
  return data;
};
