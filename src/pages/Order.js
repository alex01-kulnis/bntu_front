import React, { useState, useMemo, useEffect } from 'react';
import '../styles/styles.css';
import { observer } from 'mobx-react-lite';
import { fetchOrders } from '../http/userAPI';
import { Form } from 'react-bootstrap';
import OrderList from '../components/OrderList';
import MySelect from '../components/select/MySelect';

const Order = observer(() => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSort, setSelectedSort] = useState('');

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchOrders().then((data) => setPosts(data));
  }, []);

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) => post.user.toLocaleLowerCase().includes(searchQuery));
  }, [searchQuery, sortedPosts]);

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: 20 }}>Список Заказов</h1>
      <Form className="d-flex flex-column" style={{ width: 700, margin: '0px 0px 0px 595px' }}>
        <div className="search_string">
          <Form.Control placeholder="Поиск" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <div style={{ display: 'flex', margin: '0px 0px 0px 10px' }}>
            <MySelect
              value={selectedSort}
              onChange={sortPosts}
              defaultValue="Сортировка"
              options={[{ value: 'user', name: 'По имени' }]}
            />
          </div>
        </div>
      </Form>
      <OrderList posts={sortedAndSearchedPosts} />
    </div>
  );
});

export default Order;
