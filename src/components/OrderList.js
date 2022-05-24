import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { OrderItem } from './OrderItem';
import { observer } from 'mobx-react-lite';

const OrderList = observer(({ posts }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>Заказы не найдены!</h1>;
  }

  return (
    <div>
      <TransitionGroup>
        {posts.map((post) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <OrderItem post={post} key={post.id} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
});

export default OrderList;
