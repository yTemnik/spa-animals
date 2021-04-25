import React from 'react';
import { Redirect } from 'react-router';
import Preloader from '../../common/Preloader/Preloader';
import s from './Today.module.scss';

const Today = (props) => {

  if (!props.token) return <Redirect to="/" />;

  return (
    <div>
      {props.todayPage.loading ? (
        <table className={s.table}>
          <thead>
            <tr>
              <th className={s.subtitle}>Кличка</th>
              <th className={s.subtitle}>Назначение</th>
            </tr>
          </thead>
          <tbody>
            {props.todayPage.todayInfo.map((elem) => (
              <tr key={elem.animal.id}>
                <td
                  onClick={() => {
                    props.setModalActive(true);
                    props.setCheckElem(elem.animal);
                  }}
                >
                  {elem.animal.name}
                </td>
                <td>{elem.animal.spec_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Preloader />
      )}
    </div>
  );
};

export default Today;
