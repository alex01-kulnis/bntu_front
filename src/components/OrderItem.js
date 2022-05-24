import React from 'react';

export const OrderItem = ({ post }) => {
  return (
    <div className="post_main">
      <div className="post">
        <div className="post__content">
          <div>
            <strong>Имя клиента</strong> : {post.user}
          </div>
          <div>
            <strong>Личный телефон</strong> : {post.telephone}
          </div>
          <div>
            <strong>Марка </strong> : {post.mark} <strong> Гос. номер </strong> : {post.goverment_number}
            <strong> Год выпуска </strong> : {post.year_of_issue}
          </div>
          <div>
            <strong>Дата заказа</strong> : {post.date}
          </div>
          <div>
            <strong>Услуга</strong> : {post.service}
          </div>
          <div>
            <strong>ФИО работника</strong> : {post.employee}
          </div>
          <div>
            <strong>Транспорт работника</strong> : {post.employeeTransport}
          </div>
          <div>
            <strong>Cкидка</strong> : {post.card}
          </div>
          <div>
            <strong>Результат</strong> : {post.result}
          </div>
        </div>
      </div>
    </div>
  );
};
